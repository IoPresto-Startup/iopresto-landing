<template>
	<footer class="p-4 md:p-0 flex flex-col justify-between bg-default/75 backdrop-blur">
		<div
			class="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.7fr_0.9fr_1.05fr] gap-8 lg:gap-6 items-start"
		>
			<div class="md:col-span-2 lg:col-span-1">
				<div class="flex min-h-11 items-center gap-3 mb-5">
					<NuxtImg src="/img/iopresto_logo_2.png" alt="IoPresto" width="56" height="40" class="h-10 w-auto" />
					<h2 class="text-2xl font-bold">{{ $t("heroSection.title") }}</h2>
				</div>
				<p class="mb-2 text-sm max-w-md">{{ $t("footer.value") }}</p>
				<p class="text-xs text-muted">{{ $t("footer.vatNote") }}</p>
			</div>
			<!-- Supported by -->
			<div class="md:col-span-2 lg:col-span-1">
				<div class="flex min-h-11 items-center gap-3 mb-5">
					<span class="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
					<h3 class="text-xs font-semibold uppercase tracking-wider text-muted">
						{{ $t("footer.supportedBy") }}
					</h3>
					<span class="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
				</div>
				<div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-700">
					<a
						href="https://www.b4i.unibocconi.it/"
						target="_blank"
						rel="noopener"
						class="group flex flex-col items-center gap-3 px-2 text-center"
					>
						<div class="flex h-14 w-full items-center justify-center">
							<NuxtImg
								src="/img/partners/b4i.svg"
								alt="B4i – Bocconi for Innovation"
								width="514"
								height="121"
								class="max-h-full w-auto max-w-[180px] object-contain dark:brightness-0 dark:invert transition-opacity group-hover:opacity-80"
							/>
						</div>
						<span class="flex min-h-8 items-center text-xs text-muted">
							{{ $t("footer.incubationProgram") }}
						</span>
					</a>
					<a
						href="https://simonelligroup.com/"
						target="_blank"
						rel="noopener"
						class="group flex flex-col items-center gap-3 px-2 text-center"
					>
						<div class="flex h-14 w-full items-center justify-center">
							<NuxtImg
								src="/img/partners/simonelli.svg"
								alt="Gruppo Simonelli"
								width="262"
								height="30"
								class="max-h-full w-auto max-w-[180px] object-contain dark:invert transition-opacity group-hover:opacity-80"
							/>
						</div>
						<span class="flex min-h-8 items-center text-xs text-muted">
							{{ $t("footer.incubationProgram") }}
						</span>
					</a>
				</div>
			</div>
			<!-- Quick links -->
			<div>
				<div class="flex min-h-11 items-center mb-5">
					<h3 class="text-xl font-semibold">
						{{ $t("footer.quickLinks") }}
					</h3>
				</div>
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
				<div class="flex min-h-11 items-center mb-5">
					<h3 class="text-xl font-semibold">{{ $t("footer.contact") }}</h3>
				</div>
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
