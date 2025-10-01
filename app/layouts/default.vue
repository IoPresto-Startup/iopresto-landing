<script setup lang="ts">
import ScrollToTop from '~/components/generic/ScrollToTop.vue';

</script>

<template>
    <LayoutHeader />
    <UMain class="relative min-h-screen overflow-x-hidden">
        <div class="fixed top-0 left-0 w-full h-screen -z-10 bg-cover bg-center bg-no-repeat"
            style="background-image: url('/img/bg/pavoni_bg.jpg');"></div>

        <UContainer>
            <slot />
        </UContainer>
    </UMain>
    <LayoutFooter />
    <ScrollToTop />
</template>