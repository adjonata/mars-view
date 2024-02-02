import axios, { AxiosError } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const painelStore = usePainelStore();
  const defaultUrl = config.public.API_BASE_URL;

  const api = axios.create({
    baseURL: String(defaultUrl),
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        painelStore.logout();
        setTimeout(() => {
          useNuxtApp().$toast("Sessão expirada, entre novamente", {
            type: "error",
            position: "top-center",
          });
        }, 1000);
        throw error;
      }
      throw error;
    }
  );

  return {
    provide: {
      api: api,
    },
  };
});
