import type { AxiosInstance } from "axios";
import type { Content, Id, Toast, ToastOptions } from "vue3-toastify/index";

interface PluginsInjections {
  $api: AxiosInstance;
  $toast(content: Content, options?: ToastOptions): Id;
}

declare module "#app" {
  interface NuxtApp extends PluginsInjections {}
}

declare module "nuxt/dist/app/nuxt" {
  interface NuxtApp extends PluginsInjections {}
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties extends PluginsInjections {}
}
