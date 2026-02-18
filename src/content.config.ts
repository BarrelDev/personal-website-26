import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['robotics', 'ml', 'web', 'game', 'research', 'other']),
			tags: z.array(z.string()),
			date: z.coerce.date(),
			featured: z.boolean().default(false),
			github: z.string().url().optional(),
			demo: z.string().url().optional(),
			image: image(),
			tech: z.array(z.string()),
		}),
});

const publications = defineCollection({
	loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			authors: z.array(z.string()),
			venue: z.string(),
			date: z.coerce.date(),
			abstract: z.string(),
			pdf: z.string().optional(),
			doi: z.string().optional(),
			citation: z.string(),
		}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			organization: z.string(),
			location: z.string().optional(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			current: z.boolean().default(false),
			description: z.string(),
			logo: image().optional(),
			highlights: z.array(z.string()),
			tech: z.array(z.string()).optional(),
		}),
});

const volunteering = defineCollection({
	loader: glob({ base: './src/content/volunteering', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			organization: z.string(),
			location: z.string().optional(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			current: z.boolean().default(false),
			description: z.string(),
			logo: image().optional(),
			//highlights: z.array(z.string()),
			//tech: z.array(z.string()).optional(),
		}),
});

export const collections = { blog, projects, publications, experience, volunteering };
