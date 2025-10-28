import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	app: {
		baseURL: "/iopresto-landing/",
		pageTransition: {
			name: "page",
			mode: "out-in"
		}
	},
	vite: {
		plugins: [tailwindcss()]
	},
	modules: [
		"@nuxt/ui",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxtjs/i18n",
		"nuxt-viewport"
	],
	icon: {
		mode: "component",
		clientBundle: {
			scan: true,
			sizeLimitKb: 256
		},
		collections: ["heroicons", "lucide", "simple-icons"]
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
	},
	viewport: {
		breakpoints: {
			xs: 480,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1536
		}
	}
})
