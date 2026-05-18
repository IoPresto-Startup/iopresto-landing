<script setup lang="ts">
defineI18nRoute({
  paths: {
    it: '/privacy',
    en: '/privacy'
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-2xl">
    <h1 class="text-3xl font-bold mb-6">{{ $t('footer.privacy') }}</h1>
    <p class="text-muted mb-8">
      {{ $t('privacy.intro') }}
    </p>
    <UButton as="a" href="/docs/privacy-policy.pdf" target="_blank" download color="primary" variant="solid"
      icon="i-heroicons-arrow-down-tray">
      {{ $t('privacy.download') }}
    </UButton>
  </div>
</template>
