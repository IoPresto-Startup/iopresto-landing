<template>
	<Transition name="scroll-fade">
		<div v-if="show">
			<UButton
				icon="i-heroicons-arrow-up"
				size="lg"
				aria-label="Torna su"
				@click="scrollToTop"
				class="fixed bottom-20 right-6 z-50 rounded-full bg-default/75 backdrop-blur border-b border-default shadow-[0_4px_24px_0_rgba(56,189,248,0.5)] text-secondary-300 hover:bg-secondary-400/20 hover:text-secondary-500 transition-all duration-300"
			/>
		</div>
	</Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const show = ref(false)

const handleScroll = () => {
	const scrollY = window.scrollY || window.pageYOffset
	const docHeight = document.documentElement.scrollHeight - window.innerHeight
	show.value = docHeight > 0 && scrollY > docHeight / 2
}

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
	window.addEventListener("scroll", handleScroll)
	handleScroll()
})

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.scroll-fade-enter-active,
.scroll-fade-leave-active {
	transition: opacity 0.4s ease;
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
	opacity: 0;
}

.scroll-fade-enter-to,
.scroll-fade-leave-from {
	opacity: 1;
}
</style>
