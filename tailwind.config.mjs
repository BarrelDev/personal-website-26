/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Enable class-based dark mode
	theme: {
		extend: {
			colors: {
				// Preserve old site colors
				'brand-blue': '#1e90ff', // dodger blue
				'brand-blue-light': '#00bfff', // deep sky blue
				'brand-accent': '#2337ff', // Current Astro accent
				'dark-bg': '#0f1419', // Dark background
				'dark-card': '#1a1f2e', // Card background
			},
			fontFamily: {
				atkinson: ['Atkinson', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in',
				'fade-up': 'fadeUp 0.6s ease-out',
				'slide-in': 'slideIn 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideIn: {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
			backdropBlur: {
				glass: '10px',
			},
		},
	},
	plugins: [],
};
