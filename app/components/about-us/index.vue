<template>
	<GenericBaseCard :title="$t('about-us.title')">
		<template #content>
			<div class="flex gap-6 flex-col md:h-[18rem] md:flex-row">
				<div class="basis-[55%] md:h-full md:overflow-y-auto md:pr-3">
					<i18n-t
						keypath="about-us.real-description"
						tag="p"
					>
						<template #space> <br /><br /> </template>
					</i18n-t>
				</div>
				<NuxtImg
					src="/img/who-img.webp"
					alt="Chi siamo"
					width="626"
					height="418"
					class="basis-[45%] w-full max-h-[18rem] rounded object-cover md:h-full"
				/>
			</div>
		</template>
	</GenericBaseCard>
</template>
