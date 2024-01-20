import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const defaultUrl = config.public.API_BASE_URL;

  const api = axios.create({
    baseURL: String(defaultUrl),
  });

  return {
    provide: {
      api: api,
    },
  };
});
