import type { AxiosInstance } from "axios";

interface PluginsInjections {
  $api: AxiosInstance;
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
