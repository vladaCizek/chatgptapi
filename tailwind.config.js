/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		fontFamily: {
			sansSerif: ["Poppins", "Arial", "sans-serif"],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
