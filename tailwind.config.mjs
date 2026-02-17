/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'brand-blue': '#1e90ff',
				'brand-blue-light': '#00bfff',
				'brand-accent': '#2337ff',
				// Claude console-inspired warm grays
				'dark-bg': '#191919',
				'dark-card': '#262626',
				'dark-border': '#333333',
				'dark-surface': '#2f2f2f',
			},
			fontFamily: {
				mono: ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
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
