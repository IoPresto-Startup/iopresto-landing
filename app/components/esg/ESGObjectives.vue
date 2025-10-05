<template>
  <section class="py-12 md:py-16 lg:py-20">
    <UContainer>
      <BaseCard class="max-w-full lg:max-w-7xl mx-auto p-6 md:p-10 lg:p-12">
        <div class="text-center mb-12 md:mb-16">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            {{ t('esg.sdgs.title', 'Obiettivi di sviluppo') }}
          </h2>
          <p class="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {{ t('esg.sdgs.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-12">
          <div v-for="sdg in sdgs" :key="sdg.number"
            class="group relative p-5 md:p-7 bg-gradient-to-br from-teal-50/60 via-blue-50/40 to-green-50/40 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-green-900/30 backdrop-blur-md rounded-2xl border-2 border-transparent hover:border-teal-400/60 dark:hover:border-teal-500/60 shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden">

            <!-- Gradient background on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/50 dark:group-hover:from-cyan-900/20 dark:group-hover:to-blue-900/20 transition-all duration-500 rounded-2xl">
            </div>

            <div class="flex flex-col gap-6 justify-center items-center text-center">
              <div
                class="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                <span class="text-sm md:text-base lg:text-lg">{{ sdg.number }}</span>
              </div>
              <h3
                class="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {{ sdg.title }}
              </h3>
              <p class="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {{ sdg.description }}
              </p>

            </div>
          </div>
        </div>

        <div
          class="relative p-6 md:p-10 lg:p-12 bg-gradient-to-r from-teal-50/90 via-blue-50/90 to-green-50/90 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-green-900/30 rounded-2xl border-2 border-teal-200/50 dark:border-teal-700/50 shadow-lg overflow-hidden">
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
          </div>
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2">
          </div>

          <p
            class="relative text-base md:text-lg lg:text-xl leading-relaxed text-center text-gray-800 dark:text-gray-200 font-medium max-w-4xl mx-auto">
            {{ t('esg.sdgs.conclusion') }}
          </p>
        </div>
      </BaseCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseCard from '~/components/generic/BaseCard.vue'
const { t } = useI18n()

const sdgs = computed(() => [
  {
    number: 12,
    title: t('esg.sdgs.sdg12.title', 'Consumo e produzione responsabili'),
    description: t('esg.sdgs.sdg12.description')
  },
  {
    number: 13,
    title: t('esg.sdgs.sdg13.title', 'Lotta contro il cambiamento climatico'),
    description: t('esg.sdgs.sdg13.description')
  },
  {
    number: 8,
    title: t('esg.sdgs.sdg8.title', 'Lavoro dignitoso e crescita economica'),
    description: t('esg.sdgs.sdg8.description')
  },
  {
    number: 9,
    title: t('esg.sdgs.sdg9.title', 'Industria, innovazione e infrastruttura'),
    description: t('esg.sdgs.sdg9.description')
  },
  {
    number: 11,
    title: t('esg.sdgs.sdg11.title', 'Città e comunità sostenibili'),
    description: t('esg.sdgs.sdg11.description')
  },
  {
    number: 17,
    title: t('esg.sdgs.sdg17.title', 'Partnership per gli obiettivi'),
    description: t('esg.sdgs.sdg17.description')
  }
])
</script>

<style scoped></style>