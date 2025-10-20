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
			base: "py-10 sm:px-5 md:px-7 lg:px-10 2x:px-15"
		},
		navigationMenu: {
			slots: {
				link: "text-base md:text-lg font-medium px-4 py-2.5",
				linkLabel: "text-base md:text-lg"
			}
		},
		card: {
			// box-shadow: offset-x offset-y blur-radius spread-radius color;
			slots: {
				root: "shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-lg"
			}
		}
	}
})
