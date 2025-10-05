<template>
  <div :class="gradientClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const gradientClass = [
  'bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-green-100/80',
  'dark:from-teal-900/40 dark:via-blue-900/40 dark:to-green-900/40',
  'backdrop-blur-xl',
  props.class
].join(' ')
</script>

<style scoped></style>
