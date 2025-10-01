<template>
  <section class="relative flex flex-col items-center justify-center min-h-[40vh] w-full overflow-hidden rounded-xl"
    role="region" aria-label="Hero Iopresto">
    <NuxtImg src="/img/hero/banner.jpg" alt="" class="absolute inset-0 w-full h-full object-cover pointer-events-none"
      draggable="false" />
    <div class="absolute inset-0 bg-black/55"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 sm:py-12 min-h-[40vh] sm:min-h-[50vh]">
      <p class="text-sm sm:text-md tracking-widest text-cyan-300 mb-2 sm:mb-4">
        {{ t('heroBanner.startAdventure') }}
      </p>
      <h1 class="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-2 sm:mb-4">
        {{ t('heroBanner.title') }}
      </h1>
      <p class="max-w-xs sm:max-w-2xl text-base sm:text-lg text-white/80 mb-4 sm:mb-8">
        {{ t('heroBanner.description') }}
      </p>

      <UButton size="xl" color="primary" variant="soft"
        class="border border-cyan-400 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold backdrop-blur bg-white/10 text-white hover:bg-cyan-500/30 transition-all"
        @click="$emit('cta')">
        {{ t('heroBanner.cta') }}
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>