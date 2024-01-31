import { defineStore } from "pinia";
import { Socket, io } from "socket.io-client";

export const useSyncStore = defineStore("sync", () => {
  const config = useRuntimeConfig();
  const painelStore = usePainelStore();

  const logsStorage = useLocalStorage<undefined | string>(
    "terminal",
    undefined
  );
  const logs = ref<string[]>([]);
  onMounted(() => {
    if (logsStorage.value) {
      logs.value = JSON.parse(logsStorage.value) as string[];
    }
  });
  watch(
    () => logs.value.length,
    () => {
      logsStorage.value = JSON.stringify(logs.value);
    }
  );

  const socket = ref<Socket>();

  const openSocket = () => {
    if (!painelStore.isAuthenticated) return;
    const url = String(config.public.WS_BASE_URL || "");
    if (!url) {
      console.error("Erro ao abrir conexão com o socket - Não existe URL");
      return;
    }
    try {
      socket.value = io(url, {
        extraHeaders: {
          authorization: painelStore.token || "",
        },
      });
      setTimeout(() => registerSocket(), 1500);
    } catch (error) {
      console.error("Erro ao abrir conexão com o socket");
    }
  };

  const registerSocket = () => {
    socket?.value?.on("status", (value: string) => {
      pushLog(value);
    });
    socket?.value?.on("error", (value: object) => {
      pushLog(`Error - ${JSON.stringify(value)}`);
    });
    socket?.value?.on("success", (value: object) => {
      pushLog(`Success - ${JSON.stringify(value)}`);
    });
  };

  const closeSocket = () => {
    socket.value?.disconnect();
    socket.value = undefined;
  };

  const syncPhotosByPeriod = (minDate: string, maxDate: string) => {
    socket.value?.emit(
      "sync",
      `{"minDate":"${minDate}", "maxDate": "${maxDate}"}`
    );
  };

  const clearLogs = () => {
    logs.value = [];
    logsStorage.value = undefined;
  };

  const pushLog = (value: string) => {
    logs.value?.push(value);
  };

  return {
    logs,
    closeSocket,
    openSocket,
    syncPhotosByPeriod,
    clearLogs,
    pushLog,
  };
});
