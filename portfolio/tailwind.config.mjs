/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
		  {
			mytheme: {
				"primary": "#7dd3fc",
							
				"secondary": "#86efac",
							
				"accent": "#fef08a",
							
				"neutral": "#ffffff",
							
				"base-100": "#ffffff",
							
				"info": "#ffffff",
							
				"success": "#bef264",
							
				"warning": "#facc15",
							
				"error": "#fb7185",
			},
		  },
		],
	  },
	plugins: [require("daisyui")],
}
