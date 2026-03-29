<template>
  <div class="space-y-5">
    <UFormField :label="t('contactForm.fields.address')" :error="errors.address" name="address">
      <ContactAddressAutocomplete v-model="address" :api-key="config.public.googleMapsKey"
        :placeholder="t('contactForm.fields.addressPlaceholder')" :has-error="!!errors.address" class="w-full" />
    </UFormField>

    <UFormField :label="t('contactForm.fields.radius')" :error="errors.radius" name="radius">
      <div class="flex gap-2 flex-wrap">
        <UButton v-for="opt in radiusOptions" :key="opt.value" :variant="radius === opt.value ? 'solid' : 'outline'"
          color="primary" size="md" @click="radius = opt.value">
          {{ opt.label }}
        </UButton>
      </div>
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const config = useRuntimeConfig()

const address = defineModel<string>("address", { required: true })
const radius = defineModel<string>("radius", { required: true })

defineProps<{ errors: Record<string, string> }>()

const radiusOptions = computed(() => [
  { value: "1km_5km", label: t("contactForm.fields.radius1") },
  { value: "5km_8km", label: t("contactForm.fields.radius2") },
  { value: "8km_12km", label: t("contactForm.fields.radius3") }
])
</script>
