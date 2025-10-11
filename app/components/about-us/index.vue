<template>
	<GenericBaseCard :title="$t('about-us.title')">
		<template #content>
			<div class="flex gap-3 flex-col lg:flex-row">
				<p class="basis-[50%] line-clamp-5">
					{{ $t("about-us.small-description") }}
				</p>
				<div class="basis-[50%] flex items-center justify-center">
					<NuxtImg
						src="/img/who-img.jpg"
						alt="Chi siamo"
						class="w-full max-h-65 max-w-120 object-cover rounded"
					/>
				</div>
			</div>
		</template>
		<template #actions>
			<UButton @click="open" variant="ghost" class="w-fit">
				{{ $t("about-us.cta") }}
			</UButton>
		</template>
	</GenericBaseCard>

	<AboutUsDialogDescription v-model:openDialog="openDialog" />
</template>

<script setup lang="ts">
const openDialog = ref<boolean>(false)
const open = () => {
	openDialog.value = !openDialog.value
}
</script>
