<template>
	<BaseCard :title="$t('esg.intro.title', 'ESG')">
		<template #content>
			<div class="space-y-6 md:space-y-8">
				<div
					class="relative p-4 md:p-6 bg-gradient-to-br from-teal-50/60 via-blue-50/40 to-green-50/40 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-green-900/30 rounded-xl border border-teal-200/30 dark:border-teal-700/30 shadow-md backdrop-blur-sm"
				>
					<div
						class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-400 rounded-l-xl"
					></div>
					<p
						class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200 pl-4"
					>
						{{ t("esg.intro.paragraph1") }}
					</p>
				</div>

				<div
					class="relative p-4 md:p-6 bg-gradient-to-br from-green-50/60 via-teal-50/40 to-blue-50/40 dark:from-green-900/30 dark:via-teal-900/30 dark:to-blue-900/30 rounded-xl border border-green-200/30 dark:border-green-700/30 shadow-md backdrop-blur-sm"
				>
					<div
						class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-teal-400 rounded-l-xl"
					></div>
					<p
						class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200 pl-4"
					>
						{{ t("esg.intro.paragraph2") }}
					</p>
				</div>
			</div>
		</template>
	</BaseCard>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import BaseCard from "~/components/generic/BaseCard.vue"
const { t } = useI18n()
</script>

<style scoped></style>
