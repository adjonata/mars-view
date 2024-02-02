<script setup lang="ts">
const viewerStore = useViewerStore();
import Image from "primevue/image";
</script>

<template>
  <section
    class="w-full grid grid-cols-2 auto-rows-min lg:grid-cols-4 gap-4 mt-10"
  >
    <Image
      v-for="photo in viewerStore.photos"
      :key="photo.id_base"
      :alt="String(photo.id_base)"
      :src="photo.src"
      preview
      image-class="w-full h-full object-cover rounded"
    />
  </section>
  <section class="w-full flex items-center justify-center mt-8 mb-[120px]">
    <AtomsButton
      v-if="viewerStore.canFetchMore"
      @click="viewerStore.fetchMore()"
      :loading="viewerStore.isLoadingMore"
    >
      Ver mais
    </AtomsButton>
  </section>
</template>

<style scoped></style>
