import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	app: {
		baseURL: process.env?.NUXT_APP_BASE_URL || "/"
	},
	vite: {
		plugins: [tailwindcss()]
	},
	modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],
	icon: {
		mode: "css",
		serverBundle: "local",
		clientBundle: {
			scan: true,
			sizeLimitKb: 256,
			icons: [
				"heroicons:chevron-right",
				"heroicons:phone",
				"heroicons:envelope",
				"heroicons:document-text",
				"heroicons:arrow-up",
				"heroicons:globe-alt",
				"heroicons:users",
				"heroicons:chart-bar"
			]
		},
		collections: ["heroicons"]
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

// import tailwindcss from "@tailwindcss/vite"

// export default defineNuxtConfig({
//     compatibilityDate: "2025-07-15",
//     devtools: { enabled: true },
//     css: ["~/assets/css/main.css"],
//     vite: {
//         plugins: [tailwindcss()]
//     },
//     modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],
//     i18n: {
//         defaultLocale: "it",
//         locales: [
//             {
//                 code: "it",
//                 name: "Italiano",
//                 file: "it.json"
//             }
//         ]
//     },
//     imports: {
//         autoImport: true
//     }
// })
