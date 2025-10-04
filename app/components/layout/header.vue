<template>
	<UHeader class="h-20">
		<template #title>
			<NuxtImg src="/img/iopresto_logo_2.png" alt="IoPresto Logo" class="h-14" />
		</template>

		<UNavigationMenu :items="items" color="neutral" variant="link" :highlight="true" />

		<template #right>
			<UColorModeButton color="neutral" />
		</template>

		<!-- Responsive menu -->
		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" color="neutral" variant="link" :highlight="true" />
		</template>
	</UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: "Home",
		to: "/",
		active: route.path === "/"
	},
	{
		label: "ESG",
		to: "/esg",
		active: route.path === "/esg"
	},
	{
		label: "Contattaci",
		to: "/contattaci",
		active: route.path === "/contattaci"
	}
])
</script>
