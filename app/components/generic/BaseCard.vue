<template>
	<UCard variant="soft" :ui="uiClass">
		<div class="flex flex-col gap-5">
			<h3 v-if="title" class="simple-title">{{ title }}</h3>
			<slot name="content" />
			<slot name="actions" />
		</div>
	</UCard>
</template>

<script setup lang="ts">
const { title, uiClass } = defineProps<{
	title?: string
	uiClass?: { root?: string; header?: string; body?: string; footer?: string }
}>()
</script>
