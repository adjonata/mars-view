<template>
  <div
    :class="[
      'label justify-start text-left',
      align === 'left' && 'lg:justify-start lg:text-left',
      align === 'center' && 'lg:justify-center lg:text-center',
      align === 'right' && 'lg:justify-end lg:text-right',
    ]"
  >
    <span>{{ label }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    align: "left" | "center" | "right";
  }>(),
  {
    align: "left",
  }
);
</script>

<style lang="scss" scoped>
.label {
  @apply w-full flex flex-col;

  & > span {
    @apply text-white mb-2 font-medium px-1;
  }
}
</style>
