<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const allLocales = computed(() => locales.value as { code: string; language: string }[])

const currentLanguage = computed(
	() => allLocales.value.find((l) => l.code === locale.value)?.language || locale.value
)

const canonical = computed(() => `${siteUrl}${route.path === "" ? "/" : route.path}`)

const alternateLinks = computed(() => [
	...allLocales.value.map((l) => ({
		rel: "alternate",
		hreflang: l.language,
		href: `${siteUrl}${switchLocalePath(l.code)}`
	})),
	{
		rel: "alternate",
		hreflang: "x-default",
		href: `${siteUrl}${switchLocalePath("it")}`
	}
])

useHead(() => ({
	htmlAttrs: { lang: currentLanguage.value },
	titleTemplate: (title?: string) => (title ? `${title} | IoPresto` : "IoPresto"),
	link: [{ rel: "canonical", href: canonical.value }, ...alternateLinks.value]
}))

useSeoMeta({
	ogSiteName: "IoPresto",
	ogType: "website",
	twitterCard: "summary_large_image",
	ogImage: `${siteUrl}/img/hero/banner.jpg`,
	ogImageAlt: "IoPresto — prestito di oggetti tra privati",
	description: () => t("seo.home.description"),
	ogDescription: () => t("seo.home.description"),
	ogUrl: () => canonical.value,
	ogLocale: () => (locale.value === "it" ? "it_IT" : "en_US")
})

const organizationLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "IoPresto",
	url: siteUrl,
	logo: `${siteUrl}/img/iopresto_logo_2.png`,
	email: "infoiopresto@gmail.com",
	sameAs: [
		"https://www.instagram.com/ioprestoitalia/",
		"https://www.linkedin.com/company/iopresto"
	]
}

useHead({
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify(organizationLd)
		}
	]
})
</script>

<template>
	<UApp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
