<template>
	<UHeader class="h-20">
		<template #title>
			<NuxtImg src="/img/iopresto_logo_2.png" class="h-14" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />
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
		label: "Contatti",
		to: "/contatti",
		active: route.path === "/contatti"
	}
])
</script>
