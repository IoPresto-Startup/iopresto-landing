<script setup lang="ts">
import ScrollToTop from '~/components/generic/ScrollToTop.vue';

</script>

<template>
    <LayoutHeader />
    <UMain class="relative min-h-screen overflow-x-hidden">
        <div
            class="fixed inset-0 -z-10 bg-gradient-to-br from-teal-100/60 via-blue-100/60 to-green-100/60 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-green-900/30 backdrop-blur-xl border border-teal-200/20 dark:border-teal-700/20">
            <!-- Cerchi più delicati e dispersi -->
            <div class="absolute top-1/6 left-1/6 w-60 h-60 bg-blue-300/15 rounded-full blur-3xl">
            </div>
            <div class="absolute bottom-1/6 right-1/6 w-72 h-72 bg-green-300/15 rounded-full blur-3xl">
            </div>
            <div class="absolute top-2/3 right-1/12 w-48 h-48 bg-teal-200/15 rounded-full blur-3xl">
            </div>
            <div class="absolute bottom-2/3 left-1/12 w-40 h-40 bg-yellow-200/10 rounded-full blur-3xl">
            </div>
            <div class="absolute top-1/2 left-3/4 w-56 h-56 bg-cyan-200/12 rounded-full blur-3xl">
            </div>
        </div>
        <UContainer>
            <slot />
        </UContainer>
    </UMain>
    <LayoutFooter />
    <ScrollToTop />
</template>