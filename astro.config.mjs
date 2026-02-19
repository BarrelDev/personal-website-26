// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'http://barreldev.github.io',
	base: '/personal-website-26/',
	integrations: [
		mdx(),
		sitemap(),
		tailwind({
			applyBaseStyles: false, // Preserve custom Atkinson font
		}),
	],
	vite: {
		ssr: {
			noExternal: ['gsap', 'typed.js'], // Bundle for SSR compatibility
		},
	},
});
