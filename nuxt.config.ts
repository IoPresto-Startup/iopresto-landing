import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()]
	},
	modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],
	i18n: {
		defaultLocale: "it",
		locales: [
			{
				code: "it",
				name: "Italiano",
				file: "it.json"
			}
		]
	},
	imports: {
		autoImport: true
	}
})
