<template>
  <GenericBaseCard :title="$t('faq.title')">
    <template #content>
      <UAccordion :items="faqItems" class="mt-2" />
      <div class="flex justify-center mt-6">
        <UButton as="a" href="https://wa.me/393245499866" target="_blank" rel="noopener noreferrer" color="primary"
          variant="solid" size="lg" icon="i-simple-icons-whatsapp">
          {{ $t('faq.whatsappCta') }}
        </UButton>
      </div>
    </template>
  </GenericBaseCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const faqItems = computed(() => [
  {
    label: t("faq.q1"),
    content: t("faq.a1")
  },
  {
    label: t("faq.q2"),
    content: t("faq.a2")
  },
  {
    label: t("faq.q3"),
    content: t("faq.a3")
  },
  {
    label: t("faq.q4"),
    content: t("faq.a4")
  }
])
</script>
