<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string;
    title?: string;
    name: string;
  }>(),
  {}
);
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const changeValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <span class="text-gray-200 font-medium">{{ title }}</span>
    <input
      v-bind="$attrs"
      class="input"
      :placeholder="title"
      :title="title"
      :name="name"
      :value="modelValue"
      @input="changeValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  @apply w-full h-[50px] py-2 px-4 rounded-lg bg-transparent border-gray-400 border-2 outline-none focus:border-amber-600 text-white;
}
</style>
