import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    heading: z.string().optional(),
    summary: z.string().optional(),
    description: z.string(),
    updated: z.union([z.string(), z.date()]).transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v)).optional(),
    toc: z.boolean().default(true),
    autoDownload: z.boolean().default(false),
  }),
});

export const collections = { docs };
