<template>
  <section class="relative flex flex-col items-center justify-center min-h-[50vh] w-full overflow-hidden rounded-xl">
    <NuxtImg :src="backgroundImage" :alt="title" class="absolute inset-0 w-full h-full object-cover -z-10"
      draggable="false" />
    <div class="absolute inset-0 bg-black/50 -z-10"></div>
    <UContainer>
      <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          {{ title }}
        </h1>
        <!-- Breadcrumb navigation -->
        <nav class="flex items-center space-x-2 text-white/80 text-sm" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-white transition-colors">
            {{ t('pageHero.home', 'Casa') }}
          </NuxtLink>
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4" />
          <span class="text-white">{{ title }}</span>
        </nav>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  title: string
  backgroundImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  backgroundImage: '/img/hero/hero-sfondo.jpg'
})

const { t } = useI18n()
</script>

<style scoped></style>