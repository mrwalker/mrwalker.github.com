import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Long-form writing hosted on mwalker.info (the canonical home).
 * Medium and other venues are mirrors, recorded in mirrorName/mirrorUrl.
 * `draft: true` posts render only in `pnpm dev`, never in a build.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    cover: z.string().optional(),
    /** Set only when another venue should be the canonical URL (e.g. a partner's blog). */
    canonical: z.string().url().optional(),
    mirrorName: z.string().optional(),
    mirrorUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

/** Short-form posts, mostly republished from LinkedIn. */
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    linkedin: z.string().url().optional(),
    /** Small badge, e.g. "Reposted by the author". */
    highlight: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, notes };
