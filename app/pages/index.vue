<script setup lang="ts">
defineI18nRoute({
	paths: {
		it: '/',
		en: '/'
	}
})
</script>

<template>
	<div class="flex flex-col gap-20">
		<GenericHeroSection />
		<AboutUs />
		<EsgObjectives />
	</div>
</template>
