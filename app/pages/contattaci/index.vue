<template>
    <div>
        <GenericPageHero :title="t('pageHero.pages.contattaci', 'Contattaci')" />

        <div class="py-8 px-4">
            <ContactForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/contact/contactForm.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>