<script setup lang="ts">
import BaseCard from "./BaseCard.vue"

const { $viewport } = useNuxtApp()

const heroImg = {
	mobile: "/img/hero/hero-sfondo-mobile.webp",
	desktop: "/img/hero/hero-sfondo.webp",
	desktopSm: "/img/hero/hero-sfondo-1280.webp"
}

const desktopSrcset = `${heroImg.desktopSm} 1280w, ${heroImg.desktop} 1920w`

useHead({
	link: [
		{ rel: "preload", as: "image", href: heroImg.mobile, media: "(max-width: 767px)", fetchpriority: "high" },
		{
			rel: "preload",
			as: "image",
			imagesrcset: desktopSrcset,
			imagesizes: "100vw",
			media: "(min-width: 768px)",
			fetchpriority: "high"
		}
	]
})

const mapUrl = "https://paa.ge/iopresto/it/map?previous=/"

const buttonSize = computed(() => {
	if ($viewport.isGreaterOrEquals("xl")) return "xl"
	if ($viewport.isGreaterOrEquals("lg")) return "xl"
	if ($viewport.isGreaterOrEquals("md")) return "xl"
	if ($viewport.isGreaterOrEquals("sm")) return "lg"
	return "lg"
})
</script>

<template>
	<section>
		<BaseCard class="relative overflow-hidden" :ui-class="{ body: '!p-0' }">
			<template #content>
				<div class="relative min-h-[26rem] md:min-h-[32rem] lg:min-h-[36rem]">
					<picture>
						<source media="(max-width: 767px)" :srcset="heroImg.mobile" type="image/webp" />
						<img
							:src="heroImg.desktop"
							:srcset="desktopSrcset"
							sizes="100vw"
							alt=""
							width="1920"
							height="1280"
							fetchpriority="high"
							class="absolute inset-0 h-full w-full object-cover"
						/>
					</picture>
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
