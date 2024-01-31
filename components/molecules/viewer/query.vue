<template>
  <div class="w-full flex items-center justify-between">
    <VueDatePicker
      v-model="range"
      range
      dark
      :max-date="new Date()"
      format="dd/MM/yyyy"
      locale="pt-BR"
      placeholder="Selecione o período"
      class="max-w-[300px]"
    />
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { subDays } from "date-fns";
const range = ref<[Date, Date]>([subDays(new Date(), 30), new Date()]);
</script>

<style scoped></style>
