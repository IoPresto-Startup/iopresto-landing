<template>
  <UCard variant="soft">
    <div class="flex flex-col gap-5">
      <h3 class="text-4xl text-primary-500 font-bold">{{ title }}</h3>
      <slot name="content" />
      <slot name="actions" />
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>
