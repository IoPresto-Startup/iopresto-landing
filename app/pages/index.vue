<script setup lang="ts">
defineI18nRoute({
	paths: {
		it: '/',
		en: '/'
	}
})

const { t } = useI18n()

useSeoMeta({
	title: () => t("seo.home.title"),
	description: () => t("seo.home.description"),
	ogTitle: () => t("seo.home.title"),
	ogDescription: () => t("seo.home.description")
})

const faqLd = computed(() => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [1, 2, 3, 4].map((i) => ({
		"@type": "Question",
		name: t(`faq.q${i}`),
		acceptedAnswer: {
			"@type": "Answer",
			text: t(`faq.a${i}`)
		}
	}))
}))

useHead(() => ({
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify(faqLd.value)
		}
	]
}))
</script>

<template>
	<div class="flex flex-col gap-20">
		<GenericHeroSection />
		<AboutUs />
		<HowItWorks />
		<EsgObjectives />
		<Reviews />
		<Faq />
	</div>
</template>
