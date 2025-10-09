<template>
	<BaseCard
		:title="
			$t(
				'esg.changes.title',
				'Cambiamenti che vorremmo apportare con la community IOPRESTO'
			)
		"
	>
		<template #content>
			<UAccordion
				v-model="activeAccordion"
				:items="accordionItems"
				variant="soft"
				size="lg"
				class="space-y-4 md:space-y-5 mb-10 md:mb-12"
			>
				<template #environmental>
					<ul class="space-y-3 md:space-y-4 py-4">
						<li
							v-for="(item, index) in environmentalItems"
							:key="index"
							class="flex items-start gap-3 md:gap-4 text-base md:text-lg group"
						>
							<span
								class="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
							></span>
							<span class="text-gray-700 dark:text-gray-200 leading-relaxed">{{
								item
							}}</span>
						</li>
					</ul>
				</template>

				<template #social>
					<ul class="space-y-3 md:space-y-4 py-4">
						<li
							v-for="(item, index) in socialItems"
							:key="index"
							class="flex items-start gap-3 md:gap-4 text-base md:text-lg group"
						>
							<span
								class="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
							></span>
							<span class="text-gray-700 dark:text-gray-200 leading-relaxed">{{
								item
							}}</span>
						</li>
					</ul>
				</template>

				<template #economic>
					<ul class="space-y-3 md:space-y-4 py-4">
						<li
							v-for="(item, index) in economicItems"
							:key="index"
							class="flex items-start gap-3 md:gap-4 text-base md:text-lg group"
						>
							<span
								class="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
							></span>
							<span class="text-gray-700 dark:text-gray-200 leading-relaxed">{{
								item
							}}</span>
						</li>
					</ul>
				</template>
			</UAccordion>
			<div
				class="relative p-4 md:p-6 lg:p-8 bg-gradient-to-r from-teal-50/90 via-blue-50/90 to-green-50/90 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-green-900/30 rounded-xl border-2 border-teal-200/50 dark:border-teal-700/50 shadow-lg overflow-hidden"
			>
				<div
					class="absolute top-0 right-0 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
				></div>
				<div
					class="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
				></div>

				<p
					class="relative text-base md:text-lg lg:text-xl leading-relaxed text-center text-gray-800 dark:text-gray-200 font-medium max-w-4xl mx-auto"
				>
					{{ t("esg.changes.conclusion") }}
				</p>
			</div>
		</template>
	</BaseCard>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import BaseCard from "~/components/generic/BaseCard.vue"
const { t } = useI18n()

const activeAccordion = ref("0")

// Rotazione automatica dell'accordion ogni 5 secondi
onMounted(() => {
	const interval = setInterval(() => {
		const currentIndex = Number(activeAccordion.value)
		activeAccordion.value = String((currentIndex + 1) % 3)
	}, 5000)

	onUnmounted(() => clearInterval(interval))
})

const accordionItems = computed(() => [
	{
		label: t("esg.changes.environmental.title", "Cambiamenti ambientali"),
		icon: "i-heroicons-globe-alt",
		slot: "environmental",
		defaultOpen: false
	},
	{
		label: t("esg.changes.social.title", "Cambiamenti sociali"),
		icon: "i-heroicons-users",
		slot: "social",
		defaultOpen: false
	},
	{
		label: t("esg.changes.economic.title", "Cambiamenti economici"),
		icon: "i-heroicons-chart-bar",
		slot: "economic",
		defaultOpen: false
	}
])

const environmentalItems = computed(() => [
	t("esg.changes.environmental.item1", "Diminuzione dei rifiuti"),
	t("esg.changes.environmental.item2", "Riduzione dell'impronta ecologica")
])

const socialItems = computed(() => [
	t("esg.changes.social.item1", "Cultura del riuso"),
	t("esg.changes.social.item2", "Integrazione sociale")
])

const economicItems = computed(() => [
	t("esg.changes.economic.item1", "Nuovi modelli di consumo"),
	t("esg.changes.economic.item2", "Posizionamento competitivo")
])
</script>

<style scoped>
.u-accordion-header {
	cursor: pointer;
}
</style>
