import type { FetchPhotosQuery } from "~/stores/viewer";
import type { Pagination } from "~/types/pagination";
import type { Photo } from "~/types/photo";

export const photosService = {
  query(filters: Pagination<any, FetchPhotosQuery>) {
    return useNuxtApp().$api.post<Pagination<Photo[], FetchPhotosQuery>>(
      "/photos/period",
      filters
    );
  },
};
