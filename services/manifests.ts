export interface ManifestsSyncResponse {
  message: string;
  syncSeconds: number;
  syncMilliSeconds: number;
  totalAdded: number;
  daysAdded: string[];
}
export const manifestsService = {
  sync() {
    return useNuxtApp().$api.post<ManifestsSyncResponse>("/manifests/sync");
  },
};
