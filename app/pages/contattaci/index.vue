<template>
    <div class="flex flex-col gap-32 py-12">
        <GenericPageHero :title="t('pageHero.pages.contattaci', 'Contattaci')" />
        <ContactForm />
    </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/contact/contactForm.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>