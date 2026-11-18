import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getWriting, getNotes } from '../lib/content';

export async function GET(context: APIContext) {
  const [posts, notes] = await Promise.all([getWriting(), getNotes()]);
  const items = [
    ...posts.filter((p) => !p.data.draft).map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/writing/${p.id}/`,
      categories: ['writing', ...p.data.tags],
    })),
    ...notes.filter((n) => !n.data.draft).map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: (n.body ?? '').replace(/\s+/g, ' ').trim().slice(0, 280),
      link: `/notes/${n.id}/`,
      categories: ['notes', ...n.data.tags],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Matt Walker: writing & notes',
    description: 'AI agents, evals, and data systems at scale.',
    site: context.site!,
    items,
  });
}
