<template>
  <div class="space-y-5">
    <UFormField :label="t('contactForm.fields.requestType')" :error="errors.requestType" name="requestType">
      <div class="flex gap-3 flex-wrap">
        <UButton v-for="opt in requestTypeOptions" :key="opt.value"
          :variant="requestType === opt.value ? 'solid' : 'outline'" color="primary" size="md"
          @click="requestType = opt.value">
          {{ opt.label }}
        </UButton>
      </div>
    </UFormField>

    <UFormField :label="t('contactForm.fields.object')" :error="errors.object" name="object">
      <UInput v-model="objectItem" size="md" :placeholder="t('contactForm.fields.objectPlaceholder')" class="w-full" />
    </UFormField>

    <UFormField :label="t('contactForm.fields.category')" :error="errors.category" name="category">
      <div class="flex gap-2 flex-wrap">
        <UButton v-for="opt in categoryOptions" :key="opt.value" :variant="category === opt.value ? 'solid' : 'outline'"
          color="primary" size="md" @click="category = opt.value">
          {{ opt.label }}
        </UButton>
      </div>
    </UFormField>

    <UFormField :label="t('contactForm.fields.duration')" :error="errors.duration" name="duration">
      <div class="flex gap-2 flex-wrap">
        <UButton v-for="opt in durationOptions" :key="opt.value" :variant="duration === opt.value ? 'solid' : 'outline'"
          color="primary" size="md" @click="duration = opt.value">
          {{ opt.label }}
        </UButton>
      </div>
    </UFormField>

    <UFormField v-if="duration === 'altro'" :label="t('contactForm.fields.durationOther')" :error="errors.durationOther"
      name="durationOther">
      <UInput v-model="durationOther" size="md" :placeholder="t('contactForm.fields.durationOtherPlaceholder')"
        class="w-full" />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const requestType = defineModel<string>("requestType", { required: true })
const objectItem = defineModel<string>("object", { required: true })
const category = defineModel<string>("category", { required: true })
const duration = defineModel<string>("duration", { required: true })
const durationOther = defineModel<string>("durationOther", { required: true })

defineProps<{ errors: Record<string, string> }>()

const requestTypeOptions = computed(() => [
  { value: "prendo_in_prestito", label: t("contactForm.fields.requestTypeBorrow") },
  { value: "presto", label: t("contactForm.fields.requestTypeLend") }
])

const categoryOptions = computed(() => [
  { value: "bricolage", label: t("contactForm.fields.categoryBricolage") },
  { value: "libri_riviste", label: t("contactForm.fields.categoryBooks") },
  { value: "sport", label: t("contactForm.fields.categorySport") },
  { value: "altro", label: t("contactForm.fields.categoryOther") }
])

const durationOptions = computed(() => [
  { value: "1_giorno", label: t("contactForm.fields.duration1Day") },
  { value: "3_giorni", label: t("contactForm.fields.duration3Days") },
  { value: "1_settimana", label: t("contactForm.fields.duration1Week") },
  { value: "altro", label: t("contactForm.fields.durationOther") }
])
</script>
