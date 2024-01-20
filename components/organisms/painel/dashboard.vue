<template>
  <main class="w-full min-h-[100vh] pb-20">
    <MoleculesPainelDashboardHead />
    <MoleculesPainelDashboardManifests />
    <MoleculesPainelDashboardPhotos />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: `Dashboard - Mars View`,
});
</script>

<style scoped></style>
