<template>
  <section class="py-12">
    <UContainer>
      <UCard class="max-w-full o p-4 md:p-8 bg-default/75 backdrop-blur rounded-2xl shadow-lg">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
          {{ t('esg.intro.title', 'ESG') }}
        </h2>

        <div class="space-y-6">
          <p class="text-base md:text-lg leading-relaxed text-justify">
            {{ t('esg.intro.paragraph1') }}
          </p>

          <p class="text-base md:text-lg leading-relaxed text-justify">
            {{ t('esg.intro.paragraph2') }}
          </p>
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