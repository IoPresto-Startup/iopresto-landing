<script setup lang="ts">
import ScrollToTop from '~/components/generic/ScrollToTop.vue';

</script>

<template>
    <LayoutHeader />
    <UMain class="relative min-h-screen overflow-x-hidden">
        <NuxtImg src="/img/pavoni_bg.jpg" class="absolute inset-0 w-full h-full object-cover -z-10" />
        <UContainer>
            <slot />
        </UContainer>
    </UMain>
    <LayoutFooter />
    <ScrollToTop />
</template>