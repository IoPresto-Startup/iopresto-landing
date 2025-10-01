<template>
	<div class="flex items-center gap-20">
		<UCard variant="soft" class="basis-1/2">
			<template #header>
				<p class="text-4xl font-bold text-orange-500">Chi siamo</p>
			</template>
			<template #default>
				<p>
					{{ $t("about-us.small-description") }}
				</p>
			</template>
			<template #footer>
				<UButton @click="open">Scopri di più</UButton>
			</template>
		</UCard>
		<NuxtImg src="/img/who-img.jpg" class="basis-1/2 rounded-lg max-h-96" />
	</div>
	<AboutUsDialogDescription v-model:openDialog="openDialog" />
</template>

<script setup lang="ts">
const openDialog = ref<boolean>(false)

const open = () => {
	openDialog.value = !openDialog.value
}
</script>
