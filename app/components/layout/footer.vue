<template>
	<footer class="p-4 md:p-0 min-h-[400px] flex flex-col justify-between bg-default/75 backdrop-blur">
		<div
			class="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start"
		>
			<div class="md:col-span-2">
				<div class="flex items-center gap-3 mb-4">
					<NuxtImg src="/img/iopresto_logo_2.png" alt="IoPresto" class="h-10" />
					<h2 class="text-2xl font-bold">{{ $t("heroSection.title") }}</h2>
				</div>
				<p class="mb-2 text-sm max-w-md">{{ $t("footer.value") }}</p>
				<p class="text-xs text-muted">{{ $t("footer.vatNote") }}</p>
			</div>
			<!-- Quick links -->
			<div>
				<h3 class="text-xl font-semibold mb-4">
					{{ $t("footer.quickLinks") }}
				</h3>
				<ul class="space-y-2">
					<li>
						<NuxtLink to="/contattaci" class="hover:underline">{{
							$t("footer.contattaci")
						}}</NuxtLink>
					</li>
					<li>
						<a href="/docs/informativa-privacy-iopresto.docx" target="_blank" class="hover:underline">{{
							$t("footer.privacy")
						}}</a>
					</li>
					<li>
						<a href="/docs/Termini-e-condizioni-iopresto.docx" target="_blank" class="hover:underline">{{
							$t("footer.termini")
						}}</a>
					</li>
				</ul>
			</div>
			<!-- Contacts -->
			<div class="min-w-0">
				<h3 class="text-xl font-semibold mb-4">{{ $t("footer.contact") }}</h3>
				<ul class="space-y-4">
					<li class="flex items-center gap-2">
						<UIcon name="i-heroicons-phone" class="w-5 h-5 shrink-0 text-primary" />
						<span class="break-words">{{ $t("footer.phone") }}</span>
					</li>
					<li class="flex items-center gap-2">
						<UIcon name="i-heroicons-envelope" class="w-5 h-5 shrink-0 text-primary" />
						<a href="mailto:support@iopresto.com" class="hover:underline break-all">support@iopresto.com</a>
					</li>
					<li class="flex items-center gap-2">
						<UIcon name="i-heroicons-envelope" class="w-5 h-5 shrink-0 text-primary" />
						<a href="mailto:infoiopresto@gmail.com" class="hover:underline break-all">infoiopresto@gmail.com</a>
					</li>
					<li class="flex items-center gap-2">
						<UIcon name="i-simple-icons-instagram" class="w-5 h-5 shrink-0 text-primary" />
						<NuxtLink to="https://www.instagram.com/ioprestoitalia/" target="_blank" class="hover:underline break-words">{{
							$t("about-us.instagram") }}</NuxtLink>
					</li>
					<li class="flex items-center gap-2">
						<UIcon name="i-simple-icons-linkedin" class="w-5 h-5 shrink-0 text-primary" />
						<NuxtLink to="https://www.linkedin.com/company/iopresto" target="_blank" class="hover:underline break-words">{{
							$t("footer.linkedin") }}</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t border-neutral-700 py-4 flex justify-center items-center px-4 text-xs">
			<span>{{ $t("footer.copyright") }}</span>
		</div>
	</footer>
</template>
