module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["'Bebas Neue'", "Roboto", "sans-serif"],
				button: ["Oswald", "sans-serif"],
				card: ["Poppins", "sans-serif"],
				search: ["Montserrat", "sans-serif"],
			},
			boxShadow: {
				"3xl": "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
			},
			colors: {
				background: "#f4f8ff",
				primary: "#150052",
				primaryLight: "#210c5e",
				neutral: "#f5f5f5",
				neutralDark: "#c4c4c4",
			},
		},
	},
	plugins: [],
};
