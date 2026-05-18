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
const reviews = [
  {
    name: "Marco R.",
    text: "Ho trovato esattamente quello che cercavo in pochi minuti. Servizio fantastico!"
  },
  {
    name: "Giulia M.",
    text: "Finalmente un modo intelligente per condividere oggetti con i vicini. Lo consiglio!"
  },
  {
    name: "Luca B.",
    text: "Ho prestato il mio trapano tre volte in un mese. Ottima community e persone gentili."
  }
]
</script>
