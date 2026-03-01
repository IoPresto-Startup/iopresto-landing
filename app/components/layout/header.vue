<template>
	<UHeader>
		<template #title>
			<NuxtImg
				src="/img/iopresto_logo_2.png"
				alt="IoPresto Logo"
				class="h-12"
			/>
		</template>

		<UNavigationMenu :items="items" :highlight="true" />

		<template #right>
			<UColorModeButton color="primary" />
			<UDropdownMenu :items="dropDownItems">
				<UButton icon="lucide:languages" variant="ghost" />
			</UDropdownMenu>
		</template>

		<!-- Responsive menu -->
		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				:highlight="true"
			/>
		</template>
	</UHeader>
</template>

<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from "@nuxt/ui"

const route = useRoute()
const {locale, locales, setLocale} = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const dropDownItems = computed(() => {
	return availableLocales.value.map((l) => ({
		label: l.name,
		onSelect: () => {
			setLocale(l.code)
		}
	}))
})

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: "Home",
		to: localePath('/'),
		active: route.path === localePath("/")
	},
	{
		label: $t('contactForm.title'),
		to: localePath("/contattaci"),
		active: route.path === localePath("/contattaci")
	}
])
</script>
