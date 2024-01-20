import { defineStore } from "pinia";
import { authService, type LoginResponse } from "~/services/auth";
import type { LoginData, User } from "~/types/auth";

export const usePainelStore = defineStore("painel", () => {
  const authStorage = useLocalStorage<undefined | string>("auth", undefined);
  const user = ref<User>();

  const isAuthenticated = computed(() => !!user.value);

  const setTokenHeader = (token?: string) => {
    if (token) {
      useNuxtApp().$api.defaults.headers["Authorization"] = token;
    } else {
      delete useNuxtApp().$api.defaults.headers["Authorization"];
    }
  };

  const handleLogin = async (loginData: LoginData) => {
    const { data } = await authService.login(loginData);
    setTokenHeader(data.token);
    user.value = data.user;
    authStorage.value = JSON.stringify(data);
  };

  const loadSession = () => {
    if (authStorage.value) {
      const authData = JSON.parse(authStorage.value) as LoginResponse;
      user.value = authData.user;
      setTokenHeader(authData.token);
    }
  };

  const logout = () => {
    setTokenHeader(undefined);
    authStorage.value = undefined;
    user.value = undefined;
    window.location.reload();
  };

  return {
    handleLogin,
    loadSession,
    user,
    isAuthenticated,
    logout,
  };
});
