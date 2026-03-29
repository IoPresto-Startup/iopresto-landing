<template>
  <div class="space-y-5">
    <UFormField :label="t('contactForm.fields.fullName')" :error="errors.fullName" name="fullName">
      <UInput v-model="fullName" size="md" :placeholder="t('contactForm.fields.fullNamePlaceholder')" class="w-full" />
    </UFormField>

    <UFormField :label="t('contactForm.fields.document')" :error="errors.document"
      :hint="t('contactForm.fields.documentHelp')" name="document">
      <UInput v-model="documentNumber" size="md" :placeholder="t('contactForm.fields.documentPlaceholder')"
        class="w-full" />
    </UFormField>

    <UFormField :label="t('contactForm.fields.city')" :error="errors.city" name="city">
      <div class="flex gap-3 flex-wrap">
        <UButton v-for="c in ['Firenze', 'Trento']" :key="c" :variant="city === c ? 'solid' : 'outline'" color="primary"
          size="md" @click="city = c">
          {{ c }}
        </UButton>
      </div>
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const fullName = defineModel<string>("fullName", { required: true })
const documentNumber = defineModel<string>("document", { required: true })
const city = defineModel<string>("city", { required: true })

defineProps<{ errors: Record<string, string> }>()
</script>
