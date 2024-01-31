<template>
  <button
    class="button"
    :class="[
      variant === 'primary'
        ? outline
          ? 'border-amber-700 border-2 bg-transparent'
          : 'bg-amber-700'
        : '',
      variant === 'secondary'
        ? outline
          ? 'border-zinc-500 border-2 bg-transparent'
          : 'bg-zinc-500'
        : '',
      disabled && 'contrast-50 cursor-not-allowed',
      loading && 'contrast-75 cursor-not-allowed',
    ]"
    @click="
      () => {
        if (loading) return;
        if (to) {
          router.push(to);
        }
        emit('click');
      }
    "
    :disabled="disabled"
    :type="type"
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
    to?: string;
  }>(),
  { type: "button", variant: "primary" }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const router = useRouter();
</script>

<style scoped lang="scss">
.button {
  @apply min-w-[210px] px-4 py-2 text-white rounded-lg hover:brightness-110 transition-[filter] flex items-center justify-center text-center gap-2 cursor-pointer;
}
</style>
