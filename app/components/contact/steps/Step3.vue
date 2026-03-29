<template>
  <div class="space-y-5">
    <UFormField :label="t('contactForm.fields.street')" :error="errors.street" name="street">
      <UInput v-model="street" size="md" :placeholder="t('contactForm.fields.streetPlaceholder')" class="w-full" />
    </UFormField>

    <div class="grid grid-cols-2 gap-3">
      <UFormField :label="t('contactForm.fields.postalCode')" :error="errors.postalCode" name="postalCode">
        <UInput v-model="postalCode" size="md" :placeholder="t('contactForm.fields.postalCodePlaceholder')"
          maxlength="5" inputmode="numeric" class="w-full"
          @input="postalCode = ($event.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 5)" />
      </UFormField>
      <UFormField :label="t('contactForm.fields.addressCity')" :error="errors.addressCity" name="addressCity">
        <UInput v-model="addressCity" size="md" :placeholder="t('contactForm.fields.addressCityPlaceholder')"
          class="w-full" />
      </UFormField>
    </div>

    <UFormField :label="t('contactForm.fields.province')" :error="errors.province" name="province">
      <UInput v-model="province" size="md" :placeholder="t('contactForm.fields.provincePlaceholder')" maxlength="2"
        class="w-full uppercase"
        @input="province = ($event.target as HTMLInputElement).value.toUpperCase().replace(/[^A-Za-z]/g, '').slice(0, 2)" />
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

const street = defineModel<string>("street", { required: true })
const addressCity = defineModel<string>("addressCity", { required: true })
const province = defineModel<string>("province", { required: true })
const postalCode = defineModel<string>("postalCode", { required: true })
const radius = defineModel<string>("radius", { required: true })

defineProps<{ errors: Record<string, string> }>()

const radiusOptions = computed(() => [
  { value: "1km_5km", label: t("contactForm.fields.radius1") },
  { value: "5km_8km", label: t("contactForm.fields.radius2") },
  { value: "8km_12km", label: t("contactForm.fields.radius3") }
])
</script>
