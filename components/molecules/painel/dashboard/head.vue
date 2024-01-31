<template>
  <nav class="container flex justify-center lg:justify-end py-6">
    <AtomsButton variant="secondary" outline to="/" class="mr-4">
      Voltar ao início
    </AtomsButton>
    <AtomsButton variant="primary" outline @click="painelStore.logout()">
      Sair
    </AtomsButton>
  </nav>
</template>

<script setup lang="ts">
const painelStore = usePainelStore();
</script>

<style scoped></style>
