<template>
	<UModal
		v-model:open="openDialog"
		:close="{
			color: 'primary',
			variant: 'ghost',
			class: 'rounded-full'
		}"
	>
		<template #title>
			<p class="simple-title">{{ title }}</p>
		</template>
		<template #body>
			<slot name="body" />
		</template>
	</UModal>
</template>

<script setup lang="ts">
const openDialog = defineModel<boolean>("openDialog")
const { title } = defineProps<{ title: string }>()
</script>
