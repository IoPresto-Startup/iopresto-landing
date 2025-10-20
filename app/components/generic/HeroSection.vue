<script setup lang="ts">
import BaseCard from "./BaseCard.vue"

const { $viewport } = useNuxtApp()

const buttonSize = computed(() => {
	if ($viewport.isGreaterOrEquals("xl")) return "xl"
	if ($viewport.isGreaterOrEquals("lg")) return "lg"
	if ($viewport.isGreaterOrEquals("md")) return "md"
	if ($viewport.isGreaterOrEquals("sm")) return "sm"
	return "xs"
})
</script>

<template>
	<section>
		<p v-if="$viewport.match('sm')">CIAO</p>
		<BaseCard class="relative" :ui-class="{ body: '!p-0' }">
			<template #content>
				<NuxtImg
					src="/img/hero/hero-sfondo.jpg"
					class="brightness-75 min-h-[20vh] max-h-[80vh]"
				/>
				<div
					class="absolute flex flex-col gap-3 md:gap-5 xl:gap-7 w-full h-full items-center justify-center text-white"
				>
					<p
						class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
					>
						{{ $t("heroSection.title") }}
					</p>
					<p
						class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-[30vw]"
					>
						{{ $t("heroSection.description") }}
					</p>
					<UButton
						variant="solid"
						color="primary"
						class="text-white"
						:size="buttonSize"
					>
						{{ $t("heroSection.cta") }}
					</UButton>
				</div>
			</template>
		</BaseCard>
	</section>
</template>
