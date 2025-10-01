<template>
  <section class="py-12">
    <UContainer>
      <UCard class="max-w-4xl mx-auto p-8 bg-default/75 backdrop-blur rounded-2xl shadow-lg">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
          {{ t('esg.changes.title', 'Cambiamenti che vorremmo apportare con la community IOPRESTO') }}
        </h2>

        <UAccordion :items="accordionItems" variant="soft" size="lg" class="space-y-4 mb-8">
          <template #environmental>
            <ul class="space-y-2 text-lg">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                {{ t('esg.changes.environmental.item1', 'Diminuzione dei rifiuti') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                {{ t('esg.changes.environmental.item2', 'Riduzione dell\'impronta ecologica') }}
              </li>
            </ul>
          </template>

          <template #social>
            <ul class="space-y-2 text-lg">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                {{ t('esg.changes.social.item1', 'Cultura del riuso') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                {{ t('esg.changes.social.item2', 'Integrazione sociale') }}
              </li>
            </ul>
          </template>

          <template #economic>
            <ul class="space-y-2 text-lg">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                {{ t('esg.changes.economic.item1', 'Nuovi modelli di consumo') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                {{ t('esg.changes.economic.item2', 'Posizionamento competitivo') }}
              </li>
            </ul>
          </template>
        </UAccordion>

        <div
          class="p-6 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200/30 dark:border-cyan-700/30">
          <p class="text-lg leading-relaxed text-center">
            {{ t('esg.changes.conclusion') }}
          </p>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const accordionItems = computed(() => [
  {
    label: t('esg.changes.environmental.title', 'Cambiamenti ambientali'),
    icon: 'i-heroicons-globe-alt',
    slot: 'environmental'
  },
  {
    label: t('esg.changes.social.title', 'Cambiamenti sociali'),
    icon: 'i-heroicons-users',
    slot: 'social'
  },
  {
    label: t('esg.changes.economic.title', 'Cambiamenti economici'),
    icon: 'i-heroicons-chart-bar',
    slot: 'economic'
  }
])
</script>

<style scoped></style>