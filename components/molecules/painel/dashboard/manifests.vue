<template>
  <article
    class="container min-h-[200px] mt-6 rounded-md grid grid-cols-1 lg:grid-cols-2 gap-4"
  >
    <div
      class="flex flex-col justify-center gap-2 lg:pr-5 text-center lg:text-left"
    >
      <span class="text-2xl text-white">Manifestos das missões</span>
      <p class="text-lg text-gray-300">
        Refere-se ao registro diário que cataloga informações detalhadas,
        incluindo o número de imagens capturadas no dia e as câmeras específicas
        utilizadas para tal.
      </p>
    </div>
    <div class="flex flex-col items-end justify-center">
      <AtomsButton :loading="isLoading" @click="handleSyncManifests"
        >Sincronizar manifestos</AtomsButton
      >
    </div>
  </article>
  <hr class="border-slate-500 mt-6 mb-10" />
</template>

<script setup lang="ts">
import { manifestsService } from "~/services/manifests";

const isLoading = ref(false);

const handleSyncManifests = async () => {
  console.log("teste");
  isLoading.value = true;
  try {
    await manifestsService.sync();
    useNuxtApp().$toast("Manifestos sincronizados", {
      position: "top-center",
      type: "success",
    });
  } catch (error) {
    useNuxtApp().$toast("Não foi possível sincronizar os manifestos", {
      position: "top-center",
      type: "error",
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>
