/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
      
			animation: {
			  fade: 'fadeOut 5s ease-in-out',
			},
	  
			keyframes: theme => ({
			  fadeOut: {
				'0%': { backgroundColor: theme('colors.red.300') },
				'100%': { backgroundColor: theme('colors.transparent') },
			  },
			}),
		  },
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
		  {
			mytheme: {
          
				"primary": "#292524",
						 
				"secondary": "#c4b5fd",
						 
				"accent": "#fecaca",
						 
				"neutral": "#111827",
						 
				"base-100": "#F5F5F5",
						 
				"info": "#7dd3fc",
						 
				"success": "#4ade80",
						 
				"warning": "#fde047",
						 
				"error": "#e90046",
			},
		  },
		],
	  },
	plugins: [require("daisyui")],
}
