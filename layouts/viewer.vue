<template>
  <main class="container flex flex-col text-center">
    <div
      class="w-full py-6 lg:py-8 mb-8 text-center flex flex-col items-center justify-center"
    >
      <span class="text-2xl font-bold text-white">Mars Viewer</span>
      <p class="text-md text-gray-300 max-w-[700px] mt-2">
        Bem-vindo ao "Mars Viewer", o seu portal exclusivo para explorar
        milhares de fotos fascinantes capturadas diariamente pelo nosso
        incansável rover em solo marciano.
      </p>
    </div>
    <slot />
  </main>
</template>
