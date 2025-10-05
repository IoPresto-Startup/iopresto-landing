export default defineAppConfig({
	ui: {
		colors: {
			primary: "blue",
			secondary: "orange",
			neutral: "zinc"
		},
		button: {
			slots: {
				base: "cursor-pointer"
			}
		},
		main: {
			base: "p-8"
		},
		navigationMenu: {
			slots: {
				link: "text-base md:text-lg font-medium px-4 py-2.5",
				linkLabel: "text-base md:text-lg"
			}
		}
	}
})
