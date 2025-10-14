<script setup lang="ts">
import ScrollToTop from "~/components/generic/ScrollToTop.vue"
</script>

<template>
    <LayoutHeader />
    <UMain>
        <UContainer>
            <slot />
        </UContainer>
    </UMain>
    <LayoutFooter />
    <ScrollToTop />
</template>
