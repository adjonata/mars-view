<template>
  <OrganismsPainelLogin
    v-if="painelStore.isLoaded && !painelStore.isAuthenticated"
  />
  <OrganismsPainelDashboard
    v-else-if="painelStore.isLoaded && painelStore.isAuthenticated"
  />
  <div class="h-[100vh] w-full flex items-center justify-center" v-else>
    <AtomsSpinner />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const painelStore = usePainelStore();
painelStore.loadSession();
</script>
