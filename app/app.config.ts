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
			base: "min-h-[calc(100vh-var(--ui-header-height))]"
		}
	}
})
