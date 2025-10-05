<template>
  <section class="relative flex flex-col items-center justify-center min-h-[70vh] w-full overflow-hidden rounded-xl">
    <NuxtImg src="/img/hero/hero-sfondo.jpg" alt="Sfondo hero" class="absolute inset-0 w-full h-full object-cover -z-10"
      draggable="false" />
    <div class="absolute inset-0 bg-black/20 -z-10"></div>
    <div
      class="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2">
    </div>
    <div
      class="absolute bottom-0 right-1/4 w-72 h-72 bg-green-400/30 rounded-full blur-2xl translate-x-1/2 translate-y-1/2">
    </div>
    <div class="flex flex-col items-center justify-center w-full h-full px-4 py-16 relative z-10">
      <h2 class="text-4xl md:text-5xl text-teal-200 mb-2 ">{{ t('heroSection.followUs') }}</h2>
      <h1 class="text-6xl md:text-8xl font-extrabold text-white mb-4">{{ t('heroSection.title') }}</h1>
      <p class="text-lg md:text-xl text-white mb-8 text-center max-w-xl">{{ t('heroSection.description') }}</p>
      <UButton size="xl" color="primary" variant="soft"
        class="border border-teal-400 px-8 py-3 text-lg font-semibold backdrop-blur bg-white/10 text-white hover:bg-teal-500/30 transition-all">
        {{ t('heroSection.cta') }}
      </UButton>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>