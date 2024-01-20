<template>
  <nav class="container flex justify-end py-6">
    <AtomsButton variant="secondary" outline @click="painelStore.logout()"
      >Sair</AtomsButton
    >
  </nav>
</template>

<script setup lang="ts">
const painelStore = usePainelStore();
</script>

<style scoped></style>
