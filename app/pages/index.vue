<script setup lang="ts">
import HeroBanner from '~/components/generic/HeroBanner.vue';


</script>

<template>
	<div
		class="flex flex-col gap-10 bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-green-100/80 dark:from-teal-900/40 dark:via-blue-900/40 dark:to-green-900/40 backdrop-blur-xl rounded-3xl p-4 md:p-8">
		<GenericHeroSection />
		<AboutUs />
		<HeroBanner />
	</div>
</template>
