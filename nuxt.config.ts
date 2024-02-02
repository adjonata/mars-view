// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "radix-vue/nuxt", "nuxt-primevue"],
  plugins: ["~/plugins/toastify", "~/plugins/axios"],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      WS_BASE_URL: process.env.WS_BASE_URL,
    },
  },
});
