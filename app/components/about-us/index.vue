<template>
	<UCard class="p-4 sm:p-6">
		<div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
			<!-- Image section (sopra su mobile, sinistra su desktop) -->
			<NuxtImg src="/img/who-img.jpg"
				class="w-full md:w-1/2 rounded-lg max-h-64 md:max-h-96 object-cover mb-4 md:mb-0" />

			<!-- Text section -->
			<div class="w-full md:w-1/2 space-y-4 text-center md:text-left">
				<p class="text-3xl sm:text-4xl font-bold text-orange-500">
					{{ t('about-us.title') }}
				</p>
				<p>{{ t("about-us.small-description") }}</p>
				<div class="md:flex md:justify-start">
					<UButton @click="open"
						class="border border-cyan-400 px-8 py-3 text-lg font-semibold backdrop-blur bg-white/10 text-black dark:text-white hover:bg-cyan-500/30 transition-all">
						{{ t('about-us.cta') }}</UButton>
				</div>
			</div>
		</div>
	</UCard>

	<AboutUsDialogDescription v-model:openDialog="openDialog" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const openDialog = ref<boolean>(false)
const open = () => {
	openDialog.value = !openDialog.value
}
</script>