<template>
  <button
    class="button"
    :class="[
      variant === 'primary'
        ? outline
          ? 'border-amber-600 border-2 bg-transparent'
          : 'bg-amber-600'
        : '',
      variant === 'secondary'
        ? outline
          ? 'border-slate-500 border-2 bg-transparent'
          : 'bg-slate-500'
        : '',
      disabled && 'contrast-50 cursor-not-allowed',
      loading && 'contrast-75 cursor-not-allowed',
    ]"
    @click="
      () => {
        if (loading) return;
        emit('click');
      }
    "
    :disabled="disabled"
  >
    <AtomsSpinner v-if="loading" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { AtomsSpinner } from "#build/components";

withDefaults(
  defineProps<{
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    outline?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  { type: "button", variant: "primary" }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<style scoped lang="scss">
.button {
  @apply min-w-[210px] px-4 py-2 text-white rounded-lg hover:brightness-110 transition-[filter] flex items-center justify-center text-center gap-2 cursor-pointer;
}
</style>
