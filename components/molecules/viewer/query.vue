<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { subDays } from "date-fns";
import type { Option } from "~/components/atoms/Select.vue";
import { camerasOptions } from "@/utils/cameras";

const viewerStore = useViewerStore();

const range = ref<[Date, Date]>([subDays(new Date(), 30), new Date()]);
const cameras = ref<Option[]>([]);

const isLoading = ref(false);

const handleFetch = async () => {
  isLoading.value = true;
  await viewerStore.fetchPhotos({
    cameras: cameras ? cameras.value.map((c) => c.value) : undefined,
    minDate: range.value[0].toISOString(),
    maxDate: range.value[1].toISOString(),
  });
  isLoading.value = false;
};

watch([range, cameras], async () => {
  await handleFetch();
});

onMounted(async () => {
  await handleFetch();
});
</script>

<template>
  <div
    class="w-full flex flex-col gap-4 lg:flex-row items-start lg:items-center justify-between"
  >
    <div class="w-[300px]">
      <AtomsLabel label="Filtrar por câmeras" align="left" class="w-[400px]">
        <AtomsSelect
          v-model="cameras"
          :options="camerasOptions"
          multiple
          :disabled="isLoading"
        />
      </AtomsLabel>
    </div>
    <div>
      <AtomsLabel label="Pesquise por período" align="right">
        <VueDatePicker
          v-model="range"
          range
          dark
          :max-date="new Date()"
          format="dd/MM/yyyy"
          locale="pt-BR"
          placeholder="Selecione o período"
          class="max-w-[300px]"
          :clearable="false"
          :disabled="isLoading"
        />
      </AtomsLabel>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
