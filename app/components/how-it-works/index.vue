<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
	{
		number: "01",
		label: t("howItWorks.steps.search.label"),
		description: t("howItWorks.steps.search.description")
	},
	{
		number: "02",
		label: t("howItWorks.steps.request.label"),
		description: t("howItWorks.steps.request.description")
	},
	{
		number: "03",
		label: t("howItWorks.steps.share.label"),
		description: t("howItWorks.steps.share.description")
	}
])
</script>

<template>
	<GenericBaseCard :title="t('howItWorks.title')">
		<template #content>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
				<div
					v-for="step in steps"
					:key="step.number"
					class="flex flex-col gap-3 border border-primary-100 dark:border-primary-800 rounded-lg p-5 bg-primary-100/20 dark:bg-primary-800/20"
				>
					<span class="text-4xl font-bold text-primary">{{ step.number }}</span>
					<p class="text-xl font-semibold">{{ step.label }}</p>
					<p class="text-sm text-muted">{{ step.description }}</p>
				</div>
			</div>
		</template>
	</GenericBaseCard>
</template>
