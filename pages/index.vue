<template>
  <OrganismsViewer />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "viewer",
});
useHead({
  title: "Mars View",
});

const title = "Mars Viewer";
const description =
  'Bem-vindo ao "Mars Viewer", o seu portal exclusivo para explorar milhares de fotos fascinantes capturadas diariamente pelo nosso incansável rover em solo marciano.';
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>

<style scoped></style>
