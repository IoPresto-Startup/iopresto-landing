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
</script>
