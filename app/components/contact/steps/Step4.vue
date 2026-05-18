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

    <UFormField :label="t('contactForm.fields.photo')" name="photo">
      <div class="space-y-2">
        <input type="file" accept="image/*"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
          @change="onFileChange" />
        <img v-if="photoPreview" :src="photoPreview" alt="Anteprima foto"
          class="mt-2 max-h-40 rounded-lg object-cover" />
      </div>
    </UFormField>

    <div class="space-y-3 pt-4 border-t border-default">
      <p class="text-sm font-semibold">{{ t('contactForm.fields.consentsTitle') }}</p>

      <div>
        <div class="flex items-start gap-2">
          <UCheckbox v-model="acceptTerms" name="acceptTerms" class="mt-0.5" />
          <span class="text-sm leading-snug">
            {{ t('contactForm.fields.acceptTermsPrefix') }}
            <NuxtLink to="/termini" target="_blank" class="underline text-primary hover:text-primary/80">{{
              t('contactForm.fields.acceptTermsLink') }}</NuxtLink>
            <span class="text-red-500 ml-0.5">*</span>
          </span>
        </div>
        <p v-if="errors.acceptTerms" class="text-xs text-red-500 mt-1 ml-6">{{ errors.acceptTerms }}</p>
      </div>

      <div>
        <div class="flex items-start gap-2">
          <UCheckbox v-model="acceptPrivacy" name="acceptPrivacy" class="mt-0.5" />
          <span class="text-sm leading-snug">
            {{ t('contactForm.fields.acceptPrivacyPrefix') }}
            <NuxtLink to="/privacy" target="_blank" class="underline text-primary hover:text-primary/80">{{
              t('contactForm.fields.acceptPrivacyLink') }}</NuxtLink>
            <span class="text-red-500 ml-0.5">*</span>
          </span>
        </div>
        <p v-if="errors.acceptPrivacy" class="text-xs text-red-500 mt-1 ml-6">{{ errors.acceptPrivacy }}</p>
      </div>

      <div class="flex items-start gap-2">
        <UCheckbox v-model="acceptMarketing" name="acceptMarketing" class="mt-0.5" />
        <span class="text-sm leading-snug">{{ t('contactForm.fields.acceptMarketing') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const email = defineModel<string>("email", { required: true })
const whatsapp = defineModel<string>("whatsapp", { required: true })
const contactPreference = defineModel<string>("contactPreference", { required: true })
const notes = defineModel<string>("notes", { required: true })
const acceptTerms = defineModel<boolean>("acceptTerms", { required: true })
const acceptPrivacy = defineModel<boolean>("acceptPrivacy", { required: true })
const acceptMarketing = defineModel<boolean>("acceptMarketing", { required: true })

const emit = defineEmits<{ photoSelected: [File | null] }>()

defineProps<{ errors: Record<string, string> }>()

const photoPreview = ref<string>("")

function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0] ?? null
  if (file) {
    photoPreview.value = URL.createObjectURL(file)
  } else {
    photoPreview.value = ""
  }
  emit("photoSelected", file)
}

const contactPreferenceOptions = computed(() => [
  { value: "email", label: t("contactForm.fields.preferenceEmail") },
  { value: "whatsapp", label: t("contactForm.fields.preferenceWhatsapp") },
  { value: "indifferente", label: t("contactForm.fields.preferenceIndifferent") }
])
</script>
