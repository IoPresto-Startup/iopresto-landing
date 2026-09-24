<template>
  <GenericBaseCard :title="$t('reviews.title')">
    <template #content>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <div v-for="review in reviews" :key="review.name"
          class="flex flex-col gap-2 p-4 rounded-xl bg-elevated border border-default">
          <div class="flex gap-1 text-yellow-400">
            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-4 h-4" />
          </div>
          <p class="text-sm text-muted italic">"{{ review.text }}"</p>
          <p class="text-sm font-semibold mt-auto">— {{ review.name }}</p>
        </div>
      </div>
    </template>
  </GenericBaseCard>
</template>

<script setup lang="ts">
const { t } = useI18n()

const reviews = computed(() => [
  {
    name: t("reviews.items.r1.name"),
    text: t("reviews.items.r1.text")
  },
  {
    name: t("reviews.items.r2.name"),
    text: t("reviews.items.r2.text")
  },
  {
    name: t("reviews.items.r3.name"),
    text: t("reviews.items.r3.text")
  }
])
</script>
