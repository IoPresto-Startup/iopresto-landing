<template>
  <div class="flex flex-col gap-32 py-12">
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