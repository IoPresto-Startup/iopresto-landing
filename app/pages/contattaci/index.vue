<template>
	<ContactForm />
</template>

<script setup lang="ts">
import ContactForm from "~/components/contact/contactForm.vue"

defineI18nRoute({
	paths: {
		it: '/contattaci',
		en: '/contact-us'
	}
})

const { t } = useI18n()

useSeoMeta({
	title: () => t("seo.contact.title"),
	description: () => t("seo.contact.description"),
	ogTitle: () => t("seo.contact.title"),
	ogDescription: () => t("seo.contact.description")
})
</script>
