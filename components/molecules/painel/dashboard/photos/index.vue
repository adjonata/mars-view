<template>
  <article class="container grid grid-cols-1 lg:grid-cols-12 gap-6">
    <MoleculesPainelDashboardPhotosTerminal class="col-span-1 lg:col-span-9" />
    <form
      @submit.prevent="handleSync"
      class="col-span-1 lg:col-span-3 flex flex-col gap-5"
    >
      <AtomsInput
        v-model="minDate"
        type="date"
        name="min-date"
        title="Data inicial"
      />
      <AtomsInput
        v-model="maxDate"
        type="date"
        name="min-date"
        title="Data final"
      />
      <AtomsButton type="submit" :loading="isLoading"
        >Sincronizar fotos</AtomsButton
      >
    </form>
  </article>
</template>

<script setup lang="ts">
const syncStore = useSyncStore();

onMounted(() => {
  syncStore.openSocket();
});

onUnmounted(() => {
  syncStore.closeSocket();
});

const minDate = ref("");
const maxDate = ref("");
watch(
  () => minDate.value,
  (value) => {
    if (!maxDate.value) {
      maxDate.value = value;
    }
  }
);

const isLoading = ref(false);

const handleSync = async () => {
  isLoading.value = true;

  try {
    if (!minDate.value || !maxDate.value) return;
    syncStore.syncPhotosByPeriod(minDate.value, maxDate.value);
  } catch (error) {
    useNuxtApp().$toast("Erro ao sincronizar fotos por período", {
      type: "error",
      position: "bottom-center",
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>
