<script setup lang="ts">
import BaseCard from "./BaseCard.vue"

const { $viewport } = useNuxtApp()

const mapUrl = "https://paa.ge/iopresto/it/map?previous=/"

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
		<BaseCard class="relative overflow-hidden" :ui-class="{ body: '!p-0' }">
			<template #content>
				<div class="relative min-h-[26rem] md:min-h-[32rem] lg:min-h-[36rem]">
					<NuxtImg
						src="/img/hero/hero-sfondo.jpg"
						alt=""
						class="absolute inset-0 h-full w-full object-cover"
					/>
					<div
						class="absolute inset-0"
						style="
							background: linear-gradient(
								to top right,
								rgba(10, 29, 37, 0.9),
								rgba(21, 58, 73, 0.55) 55%,
								rgba(0, 0, 0, 0.25)
							);
						"
					/>
					<div
						class="relative flex min-h-[26rem] flex-col items-center justify-center gap-4 px-6 text-center text-white md:min-h-[32rem] md:gap-5 lg:min-h-[36rem]"
					>
						<p
							class="text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-6xl xl:text-7xl"
						>
							{{ $t("heroSection.title") }}
						</p>
						<p
							class="max-w-3xl text-xl font-semibold drop-shadow md:text-2xl lg:text-3xl"
						>
							{{ $t("heroSection.tagline") }}
						</p>
						<p class="max-w-2xl text-base text-white/85 md:text-lg lg:text-xl">
							{{ $t("heroSection.description") }}
						</p>
						<UButton
							variant="solid"
							color="primary"
							class="mt-2 text-white shadow-lg"
							:size="buttonSize"
							:to="mapUrl"
							target="_blank"
							rel="noopener noreferrer"
							trailing-icon="i-lucide-arrow-right"
						>
							{{ $t("heroSection.cta") }}
						</UButton>
					</div>
				</div>
			</template>
		</BaseCard>
	</section>
</template>
