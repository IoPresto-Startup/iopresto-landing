<template>
  <section class="py-12 md:py-16 lg:py-20">
    <UContainer>
      <UCard
        class="max-w-full lg:max-w-5xl mx-auto p-6 md:p-10 lg:p-12 bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-green-100/80 dark:from-teal-900/40 dark:via-blue-900/40 dark:to-green-900/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-teal-200/30 dark:border-teal-700/30">
        <div class="text-center mb-10 md:mb-12">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            {{ t('esg.intro.title', 'ESG') }}
          </h2>
        </div>

        <div class="space-y-6 md:space-y-8">
          <div
            class="relative p-6 md:p-8 bg-gradient-to-br from-teal-50/60 via-blue-50/40 to-green-50/40 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-green-900/30 rounded-2xl border border-teal-200/30 dark:border-teal-700/30 shadow-md backdrop-blur-sm">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-400 rounded-l-2xl">
            </div>
            <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200 pl-4">
              {{ t('esg.intro.paragraph1') }}
            </p>
          </div>

          <div
            class="relative p-6 md:p-8 bg-gradient-to-br from-green-50/60 via-teal-50/40 to-blue-50/40 dark:from-green-900/30 dark:via-teal-900/30 dark:to-blue-900/30 rounded-2xl border border-green-200/30 dark:border-green-700/30 shadow-md backdrop-blur-sm">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-teal-400 rounded-l-2xl">
            </div>
            <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200 pl-4">
              {{ t('esg.intro.paragraph2') }}
            </p>
          </div>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>