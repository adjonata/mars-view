import { defineStore } from "pinia";
import { Socket, io } from "socket.io-client";

export const useSyncStore = defineStore("sync", () => {
  const config = useRuntimeConfig();
  const painelStore = usePainelStore();

  const logsStorage = useLocalStorage<undefined | string>(
    "sync-logs",
    undefined
  );
  const logs = ref<string[]>([]);
  onMounted(() => {
    if (logsStorage.value) {
      logs.value = JSON.parse(logsStorage.value) as string[];
    }
  });
  watch(
    () => logs.value,
    (allLogs) => {
      logsStorage.value = JSON.stringify(allLogs);
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
      console.log(value);
      logs.value?.push(value);
    });
    socket?.value?.on("error", (value: object) => {
      logs.value?.push(`Error - ${JSON.stringify(value)}`);
    });
    socket?.value?.on("success", (value: object) => {
      logs.value?.push(`Success - ${JSON.stringify(value)}`);
    });
  };

  const closeSocket = () => {
    socket.value?.disconnect();
    socket.value = undefined;
  };

  const syncPhotosByPeriod = (minDate: string, maxDate: string) => {
    socket.value?.send(
      `{ "command": "sync-images", "data": {"minDate":"${minDate}", "maxDate": "${maxDate}"}}`
    );
  };

  const clearLogs = () => {
    logs.value = [];
    logsStorage.value = undefined;
  };

  return {
    logs,
    closeSocket,
    openSocket,
    syncPhotosByPeriod,
    clearLogs,
  };
});
