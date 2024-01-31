<template>
  <article class="container grid grid-cols-1 lg:grid-cols-12 gap-6">
    <MoleculesPainelDashboardPhotosTerminal class="col-span-1 lg:col-span-9" />
    <form
      @submit.prevent="handleSync"
      class="col-span-1 lg:col-span-3 flex flex-col gap-5"
    >
      <VueDatePicker
        v-model="range"
        range
        dark
        :max-date="new Date()"
        format="dd/MM/yyyy"
        locale="pt-BR"
        placeholder="Selecione o período"
      />
      <AtomsButton type="submit" :loading="isLoading">
        Sincronizar fotos
      </AtomsButton>
    </form>
  </article>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
const syncStore = useSyncStore();

onMounted(() => {
  syncStore.openSocket();
});

onUnmounted(() => {
  syncStore.closeSocket();
});

const range = ref<[Date, Date]>();

const isLoading = ref(false);

const handleSync = async () => {
  isLoading.value = true;

  try {
    if (!range.value?.[0] || !range.value?.[1]) return;
    syncStore.syncPhotosByPeriod(
      range.value?.[0].toISOString(),
      range.value?.[1].toISOString()
    );
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
