import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	app: {
		baseURL: "/",
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
			icons: [
				"heroicons:star-solid",
				"heroicons:phone",
				"heroicons:envelope",
				"heroicons:arrow-up",
				"heroicons:chevron-right",
				"heroicons:check-circle",
				"lucide:map-pin",
				"lucide:user",
				"lucide:package",
				"lucide:phone",
				"lucide:languages",
				"lucide:arrow-right",
				"simple-icons:instagram",
				"simple-icons:linkedin",
				"simple-icons:whatsapp",
				"lucide:sun",
				"lucide:moon",
				"lucide:menu",
				"lucide:x",
				"lucide:check",
				"lucide:chevron-down",
				"lucide:chevron-up",
				"lucide:chevron-left",
				"lucide:chevron-right",
				"lucide:arrow-left",
				"lucide:arrow-up-right",
				"lucide:loader-circle",
				"lucide:circle-check",
				"lucide:circle-x",
				"lucide:info"
			]
		},
		serverBundle: {
			remote: "jsdelivr"
		},
		collections: ["heroicons", "lucide", "simple-icons"]
	},
	i18n: {
		defaultLocale: "it",
		baseUrl: "https://iopresto.com",
		locales: [
			{
				code: "it",
				file: "it.json",
				language: "it-IT",
				name: "Italiano"
			},
			{
				code: "en",
				file: "en.json",
				language: "en",
				name: "English"
			}
		],
		langDir: "locales/",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
			fallbackLocale: "it"
		}
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
	},
	fonts: {
		families: [
			{
				name: "Plus Jakarta Sans",
				provider: "google",
				weights: [400, 500, 600, 700, 800],
				subsets: ["latin"]
			}
		]
	},
	runtimeConfig: {
		public: {
			siteUrl: "https://iopresto.com",
			emailjsServiceId: "",
			emailjsTemplateId: "",
			emailjsPublicKey: "",
			imgbbApiKey: ""
		}
	},
	nitro: {
		prerender: {
			routes: ["/sitemap.xml"]
		}
	}
})
