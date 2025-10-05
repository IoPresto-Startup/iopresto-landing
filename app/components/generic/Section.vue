<template>
  <section :class="sectionClass">
    <slot />
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  spacing: {
    type: String as () => 'none' | 'sm' | 'md' | 'lg',
    default: 'md'
  }
})

const spacingClasses = {
  none: '',
  sm: 'py-4 md:py-6',
  md: 'py-8 md:py-12 lg:py-16',
  lg: 'py-12 md:py-16 lg:py-20'
}

const sectionClass = [
  spacingClasses[props.spacing],
  props.class
].join(' ')
</script>

<style scoped></style>
