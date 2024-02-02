<script setup lang="ts">
import VSelect from "vue-select";

export interface Option {
  label: string;
  description?: string;
  value: string;
}

defineProps<{
  options: Option[];
  modelValue: Option | Option[];
  multiple?: boolean;
}>();

defineEmits<{
  (e: "update:modelValue", value: Option | Option[]): void;
}>();
</script>

<template>
  <VSelect
    :options="options"
    :value="modelValue"
    :multiple="multiple"
    @update:modelValue="$emit('update:modelValue', $event)"
    class="select"
  >
    <template #option="option">
      <span class="text-gray-800">{{ option["label"] }}</span>
      <p v-if="option['description']" class="text-sm text-gray-600">
        {{ option["description"] }}
      </p>
    </template>
  </VSelect>
</template>

<style scoped lang="scss">
.select {
}
</style>
