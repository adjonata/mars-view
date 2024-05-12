import { photosService } from "~/services/photos";
import type { Pagination } from "~/types/pagination";
import type { Photo } from "~/types/photo";

export interface FetchPhotosQuery {
  minDate?: string;
  maxDate?: string;
  cameras?: string[];
}

export const useViewerStore = defineStore("viewer", () => {
  const photos = ref<Photo[]>([]);

  const pagination = ref<Pagination<Photo[], FetchPhotosQuery>>({
    itemsPerPage: 20,
    page: 1,
    totalPages: 1,
  });

  const lastQuery = ref<FetchPhotosQuery>();

  const isLoadingMore = ref();

  const fetchPhotos = async (filters?: FetchPhotosQuery, clear?: boolean) => {
    try {
      isLoadingMore.value = true;

      if (filters) lastQuery.value = filters;

      const isFetchingMore = !filters;
      if (!isFetchingMore) {
        pagination.value = {
          itemsPerPage: 20,
          page: 1,
          totalPages: 1,
        };
      }

      if (clear) {
        photos.value = [];
      }

      const response = await photosService.query({
        ...pagination.value,
        filters: filters || lastQuery.value,
        ...(isFetchingMore
          ? { page: (pagination.value?.page || 0) + 1 }
          : undefined),
      });
      pagination.value = response.data;

      if (isFetchingMore) {
        photos.value = [...photos.value, ...(response.data.items || [])];
      } else {
        photos.value = response.data.items || [];
      }
    } catch (error) {
      useNuxtApp().$toast("Não foi possível buscar as fotos", {
        type: "error",
        position: "top-center",
      });
    } finally {
      isLoadingMore.value = false;
    }
  };

  const canFetchMore = computed(() => {
    const { page, totalPages } = pagination.value;
    if (isLoadingMore) return true;
    if (page && totalPages) {
      if (page < totalPages) return true;
    }
    return false;
  });

  const fetchMore = async () => {
    isLoadingMore.value = true;
    await fetchPhotos();
    isLoadingMore.value = false;
  };

  const notFoundedPhotos = computed(
    () => isLoadingMore.value === false && !photos.value?.length
  );

  return {
    photos,
    fetchPhotos,
    canFetchMore,
    fetchMore,
    isLoadingMore,
    notFoundedPhotos,
  };
});
