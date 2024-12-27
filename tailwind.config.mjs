import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'inter': ['Inter Variable', 'sans-serif'],
			'onest': ['Onest Variable', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [typography],
}
