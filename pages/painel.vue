<template>
  <OrganismsPainelLogin v-if="!painelStore.isAuthenticated" />
  <OrganismsPainelDashboard v-else />
</template>

<script setup lang="ts">
const painelStore = usePainelStore();
painelStore.loadSession();
</script>

<style scoped></style>
