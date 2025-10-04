<script setup lang="ts">
import ScrollToTop from '~/components/generic/ScrollToTop.vue';

</script>

<template>
    <LayoutHeader />
    <UMain class="relative min-h-screen overflow-x-hidden">
        <NuxtImg src="/img/bg/pavoni_bg.jpg" alt=""
            class="fixed top-0 left-0 w-full h-screen -z-10 object-cover object-center" />

        <UContainer>
            <slot />
        </UContainer>
    </UMain>
    <LayoutFooter />
    <ScrollToTop />
</template>