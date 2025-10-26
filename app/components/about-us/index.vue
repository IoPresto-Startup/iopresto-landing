<template>
	<GenericBaseCard :title="$t('about-us.title')">
		<template #content>
			<div
				class="flex gap-3 flex-col overflow-hidden text-ellipsis md:flex-row"
			>
				<i18n-t
					keypath="about-us.real-description"
					tag="p"
					class="basis-[50%] line-clamp-5 md:line-clamp-12"
				>
					<template #space> <br /><br /> </template>
				</i18n-t>
				<NuxtImg
					src="/img/who-img.jpg"
					alt="Chi siamo"
					class="basis-[50%] rounded w-full max-h-[18rem] max-w-[30rem]"
				/>
			</div>
		</template>
		<template #actions>
			<UButton @click="open" variant="ghost" class="w-fit">
				{{ $t("about-us.cta") }}
			</UButton>
		</template>
	</GenericBaseCard>

	<BaseModal v-model:openDialog="openDialog" :title="$t('about-us.title')">
		<template #body>
			<i18n-t keypath="about-us.real-description" tag="p">
				<template #space> <br /><br /> </template>
			</i18n-t>
		</template>
	</BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "../generic/BaseModal.vue"

const openDialog = ref<boolean>(false)
const open = () => {
	openDialog.value = !openDialog.value
}
</script>
