<template>
	<GenericBaseCard class="relative max-h-[50vh]" :ui-class="{ body: '!p-0' }">
		<template #content>
			<div
				class="bg-[url(/img/hero/banner.jpg)] min-h-[70vh] brightness-75"
			></div>
			<!-- <NuxtImg
				src="/img/hero/banner.jpg"
				alt="hero-banner-img"
				class="object-cover"
			/> -->
			<div
				class="absolute z-10 w-full h-full flex flex-col gap-5 items-center justify-center text-primary-700"
			>
				<p class="text-6xl font-bold">
					{{ $t("heroBanner.title") }}
				</p>
				<p class="text-xl">
					{{ $t("heroBanner.description") }}
				</p>
			</div>
		</template>
	</GenericBaseCard>
</template>
