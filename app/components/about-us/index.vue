<template>
	<section class="py-12 md:py-16 lg:py-20">
		<UContainer>
			<UCard
				class="max-w-full lg:max-w-6xl mx-auto p-6 md:p-10 lg:p-12 bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-green-100/80 dark:from-teal-900/40 dark:via-blue-900/40 dark:to-green-900/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-teal-200/30 dark:border-teal-700/30">
				<div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
					<!-- Image section (sopra su mobile, sinistra su desktop) -->
					<div class="w-full md:w-1/2">
						<NuxtImg src="/img/who-img.jpg" alt="Chi siamo"
							class="w-full rounded-2xl max-h-80 md:max-h-96 object-cover shadow-2xl" />
					</div>

					<!-- Text section -->
					<div class="w-full md:w-1/2 space-y-6 text-center md:text-left">
						<h2
							class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
							{{ t('about-us.title') }}
						</h2>
						<p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200">{{
							t("about-us.small-description") }}</p>
						<div class="md:flex md:justify-start">
							<UButton @click="open"
								class="border border-teal-400 px-8 py-3 text-lg font-semibold backdrop-blur bg-white/10 text-teal-900 dark:text-white hover:bg-teal-500/30 transition-all shadow-lg hover:shadow-xl">
								{{ t('about-us.cta') }}
							</UButton>
						</div>
					</div>
				</div>
			</UCard>
		</UContainer>
	</section>

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