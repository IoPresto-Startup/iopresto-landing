<template>
	<UHeader>
		<template #title>
			<NuxtImg src="/img/iopresto_logo_2.png" alt="IoPresto Logo" class="h-12" />
		</template>

		<UNavigationMenu :items="items" :highlight="true" />

		<template #right>
			<UColorModeButton color="primary" />
		</template>

		<!-- Responsive menu -->
		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" :highlight="true" />
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
