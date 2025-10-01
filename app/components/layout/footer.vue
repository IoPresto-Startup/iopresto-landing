<template>
    <footer class="p-4 md:p-0 min-h-[400px] flex flex-col justify-between">
        <div class="container mx-auto py-12 flex flex-col md:flex-row gap-6 justify-center items-start">
            <div class="md:w-1/3">
                <h2 class="text-2xl font-bold mb-4">iopresto</h2>
                <p class="mb-2 text-sm md:w-3/4">{{ t('footer.value') }}</p>
                <p class="mb-6 text-sm md:w-3/4">{{ t('footer.innovative') }}</p>
                <UButton icon="i-simple-icons-instagram" variant="ghost" aria-label="instagram"
                    to="https://www.instagram.com/ioprestoitalia/" target="_blank" class="mt-2" />
            </div>

            <div class="md:w-1/5">
                <h3 class="text-xl font-semibold mb-4">{{ t('footer.quickLinks') }}</h3>
                <ul class="space-y-2">
                    <li>
                        <NuxtLink to="/contatti" class="hover:underline">{{ t('footer.contattaci') }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="md:w-1/5">
                <h3 class="text-xl font-semibold mb-4">{{ t('footer.contact') }}</h3>
                <ul class="space-y-4">
                    <li class="flex items-center gap-2">
                        <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary" />
                        <span>{{ t('footer.phone') }}</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary" />
                        <span>{{ t('footer.email', { email: 'support@iopresto.com' }) }}</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-primary" />
                        <NuxtLink to="/privacy" class="hover:underline">{{ t('footer.privacy') }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-neutral-700 py-4 flex justify-center items-center px-4 text-xs">
            <span>{{ t('footer.copyright') }}</span>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped></style>