<template>
  <div class="flex flex-col gap-4 items-start">
    <div class="terminal" ref="terminalRef">
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

const terminalRef = ref<HTMLDivElement>();

watch(
  () => syncStore.logs.length,
  () => scrollTerminalToBottom()
);
const scrollTerminalToBottom = () => {
  if (terminalRef.value) {
    terminalRef.value?.scrollTo({
      top: 1000000,
    });
  }
};
</script>

<style scoped lang="scss">
.terminal {
  @apply w-full p-4 bg-zinc-900 rounded border-2 border-zinc-900 h-[400px] overflow-y-auto;

  &__line {
    @apply w-full border-b border-b-zinc-700 py-3;
    span {
      @apply text-zinc-200 text-base;
    }
  }
}
</style>
