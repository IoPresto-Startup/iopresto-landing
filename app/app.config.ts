export default defineAppConfig({
	ui: {
		colors: {
			primary: "primary",
			secondary: "secondary",
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
