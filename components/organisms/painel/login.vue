<template>
  <div class="w-full min-h-[100vh] flex justify-center items-center">
    <form
      @submit.prevent="handleLogin"
      class="w-full max-w-[300px] flex flex-col gap-4"
    >
      <AtomsInput v-model="email" name="email" title="E-mail" />
      <AtomsInput
        v-model="password"
        name="password"
        type="password"
        title="Senha"
      />
      <AtomsButton type="submit">Entrar</AtomsButton>
    </form>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: `Login - Mars View`,
});
const painelStore = usePainelStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    await painelStore.handleLogin({
      email: email.value,
      password: password.value,
    });
    useNuxtApp().$toast("Sucesso ao entrar", {
      theme: "auto",
      type: "success",
      position: "bottom-center",
    });
  } catch (error) {
    useNuxtApp().$toast("Login inválido!", {
      theme: "auto",
      type: "error",
      position: "bottom-center",
    });
  }
};
</script>

<style scoped></style>
