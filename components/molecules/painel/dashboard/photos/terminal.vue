<template>
  <div class="flex flex-col gap-4 items-start">
    <div class="terminal">
      <div
        class="terminal__line"
        v-for="(log, logIndex) in syncStore.logs"
        :key="logIndex"
      >
        <span>
          {{ log }}
        </span>
      </div>
    </div>
    <AtomsButton outline @click="syncStore.clearLogs()"
      >Limpar terminal</AtomsButton
    >
  </div>
</template>

<script setup lang="ts">
const syncStore = useSyncStore();
</script>

<style scoped lang="scss">
.terminal {
  @apply w-full p-4 bg-slate-800 rounded border-2 border-slate-900 h-[400px] overflow-y-auto;

  &__line {
    @apply w-full border-b border-b-slate-700 py-3;
    span {
      @apply text-slate-200 text-base;
    }
  }
}
</style>
