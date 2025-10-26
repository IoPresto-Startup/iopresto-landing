<script setup lang="ts">
const { t } = useI18n()
const items = computed(() => [
	{
		number: 12,
		title: t("esg.sdgs.sdg12.title"),
		description: t("esg.sdgs.sdg12.description")
	},
	{
		number: 13,
		title: t("esg.sdgs.sdg13.title"),
		description: t("esg.sdgs.sdg13.description")
	},
	{
		number: 8,
		title: t("esg.sdgs.sdg8.title"),
		description: t("esg.sdgs.sdg8.description")
	},
	{
		number: 9,
		title: t("esg.sdgs.sdg9.title"),
		description: t("esg.sdgs.sdg9.description")
	},
	{
		number: 11,
		title: t("esg.sdgs.sdg11.title"),
		description: t("esg.sdgs.sdg11.description")
	},
	{
		number: 17,
		title: t("esg.sdgs.sdg17.title"),
		description: t("esg.sdgs.sdg17.description")
	}
])
</script>

<template>
	<GenericBaseCard :title="t('objectives.title')" :ui-class="{ root: 'pb-7' }">
		<template #content>
			<p>
				{{ t("objectives.subtitle") }}
			</p>
			<UCarousel
				v-slot="{ item }"
				:items="items"
				:ui="{
					item: 'sm:basis-1/2 lg:basis-1/3'
				}"
				dots
			>
				<div
					class="flex flex-col h-full gap-5 border text-center border-primary-100 dark:border-primary-800 rounded-lg p-3 bg-primary-100/20 dark:bg-primary-800/20 max-h-full"
				>
					<UBadge size="xl" color="primary" class="w-fit self-center">{{
						item.number
					}}</UBadge>
					<p class="text-2xl font-semibold basis-[30%]">
						{{ item.title }}
					</p>
					<p class="basis-[65%]">{{ item.description }}</p>
				</div>
			</UCarousel>
		</template>
	</GenericBaseCard>
</template>
