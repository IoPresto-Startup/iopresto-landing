import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	// Configurazione per GitHub Pages
	app: {
		baseURL: process.env?.NUXT_APP_BASE_URL || "/"
	},
	vite: {
		plugins: [tailwindcss()]
	},
	modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],
	// Configurazione per le icone
	icon: {
		serverBundle: {
			collections: ["heroicons", "lucide", "simple-icons"]
		}
	},
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
