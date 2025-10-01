<template>
  <section class="py-12">
    <UContainer>
      <UCard class="max-w-6xl mx-auto p-8 bg-default/75 backdrop-blur rounded-2xl shadow-lg">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            {{ t('esg.sdgs.title', 'Obiettivi di sviluppo') }}
          </h2>
          <p class="text-lg">
            {{ t('esg.sdgs.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div v-for="sdg in sdgs" :key="sdg.number"
            class="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-xl border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-lg hover:border-cyan-300/50 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div
                  class="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  SDG {{ sdg.number }}
                </div>
              </div>

              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">
                  {{ sdg.title }}
                </h3>
                <p class="text-sm leading-relaxed">
                  {{ sdg.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="p-8 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200/30 dark:border-cyan-700/30">
          <p class="text-lg leading-relaxed text-center">
            {{ t('esg.sdgs.conclusion') }}
          </p>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
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