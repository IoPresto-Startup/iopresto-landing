<template>
  <div class="space-y-5">
    <UFormField :label="t('contactForm.fields.email')" :error="errors.email" name="email">
      <UInput v-model="email" type="email" size="md" :placeholder="t('contactForm.fields.emailPlaceholder')"
        class="w-full" />
    </UFormField>

    <UFormField :label="t('contactForm.fields.whatsapp')" name="whatsapp">
      <UInput v-model="whatsapp" type="tel" size="md" :placeholder="t('contactForm.fields.whatsappPlaceholder')"
        class="w-full" />
    </UFormField>

    <UFormField :label="t('contactForm.fields.contactPreference')" :error="errors.contactPreference"
      name="contactPreference">
      <div class="flex gap-2 flex-wrap">
        <UButton v-for="opt in contactPreferenceOptions" :key="opt.value"
          :variant="contactPreference === opt.value ? 'solid' : 'outline'" color="primary" size="md"
          @click="contactPreference = opt.value">
          {{ opt.label }}
        </UButton>
      </div>
    </UFormField>

    <UFormField :label="t('contactForm.fields.notes')" name="notes">
      <UTextarea v-model="notes" :rows="4" :placeholder="t('contactForm.fields.notesPlaceholder')" class="w-full" />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const email = defineModel<string>("email", { required: true })
const whatsapp = defineModel<string>("whatsapp", { required: true })
const contactPreference = defineModel<string>("contactPreference", { required: true })
const notes = defineModel<string>("notes", { required: true })

defineProps<{ errors: Record<string, string> }>()

const contactPreferenceOptions = computed(() => [
  { value: "email", label: t("contactForm.fields.preferenceEmail") },
  { value: "whatsapp", label: t("contactForm.fields.preferenceWhatsapp") },
  { value: "indifferente", label: t("contactForm.fields.preferenceIndifferent") }
])
</script>
