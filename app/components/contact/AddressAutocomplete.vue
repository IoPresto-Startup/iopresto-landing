<template>
  <div class="relative w-full">
    <input ref="inputRef" :value="modelValue" :placeholder="placeholder" autocomplete="off"
      class="w-full rounded-md border border-[var(--ui-border)] bg-[var(--ui-bg)] px-3 py-2 text-sm text-[var(--ui-text)] placeholder:text-[var(--ui-text-dimmed)] focus:outline-none focus:ring-2 focus:ring-[var(--ui-primary)] disabled:opacity-50"
      :class="{ 'ring-2 ring-[var(--ui-error)]': hasError }" @input="onInput" />
    <div v-if="!isLoaded && modelValue === ''" class="absolute right-3 top-1/2 -translate-y-1/2">
      <UIcon name="i-lucide-loader-circle" class="w-4 h-4 animate-spin text-muted" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue"
import { setOptions, importLibrary } from "@googlemaps/js-api-loader"

const props = defineProps<{
  modelValue: string
  placeholder?: string
  hasError?: boolean
  apiKey: string
}>()

const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isLoaded = ref(false)
let autocomplete: google.maps.places.Autocomplete | null = null
let listener: google.maps.MapsEventListener | null = null

onMounted(async () => {
  if (!props.apiKey) {
    isLoaded.value = true
    return
  }
  try {
    setOptions({ apiKey: props.apiKey, version: "weekly" })
    await importLibrary("places")
    isLoaded.value = true

    if (!inputRef.value) return
    autocomplete = new google.maps.places.Autocomplete(inputRef.value, {
      componentRestrictions: { country: "it" },
      fields: ["formatted_address"],
      types: ["address"]
    })
    listener = autocomplete.addListener("place_changed", () => {
      const place = autocomplete!.getPlace()
      if (place.formatted_address) {
        emit("update:modelValue", place.formatted_address)
      }
    })
  } catch (e) {
    console.warn("[AddressAutocomplete] Google Maps failed to load:", e)
    isLoaded.value = true
  }
})

onUnmounted(() => {
  if (listener) google.maps.event.removeListener(listener)
})

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value)
}

// keep input in sync when parent resets the form
watch(() => props.modelValue, (val) => {
  if (inputRef.value && inputRef.value.value !== val) {
    inputRef.value.value = val
  }
})
</script>
