<template>
	<UModal
		v-model:open="openDialog"
		title="BROOOOOO"
		:close="{
			color: 'secondary',
			variant: 'ghost',
			class: 'rounded-full'
		}"
	>
		<template #title>
			<p class="text-4xl font-bold text-orange-500">Chi siamo</p>
		</template>
		<template #body>
			<p>{{ $t("about-us.small-description") }}</p>
		</template>
	</UModal>
</template>

<script setup lang="ts">
const openDialog = defineModel<boolean>("openDialog")
</script>
