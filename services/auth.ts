import type { LoginData, User } from "@/types/auth";

export interface LoginResponse {
  user: User;
  token: string;
}
export const authService = {
  login(data: LoginData) {
    return useNuxtApp().$api.post<LoginResponse>("/auth/login", data);
  },
};
