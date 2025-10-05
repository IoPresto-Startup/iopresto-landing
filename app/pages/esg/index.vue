<template>
  <div
    class="bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-green-100/80 dark:from-teal-900/40 dark:via-blue-900/40 dark:to-green-900/40 backdrop-blur-xl rounded-3xl p-4 md:p-8">
    <GenericPageHero :title="t('pageHero.pages.esg', 'ESG')" />

    <ESGIntro />
    <ESGChanges />
    <ESGObjectives />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>