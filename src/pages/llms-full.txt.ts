import type { APIContext } from 'astro';
import { getWriting, getNotes, fmtDate } from '../lib/content';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const abs = (p: string) => new URL(p, context.site!).href;
  const [posts, notes] = await Promise.all([getWriting(), getNotes()]);
  const parts = [
    `# ${SITE.name}: full text\n\n> ${SITE.description}\n`,
    ...posts.filter((p) => !p.data.draft).map(
      (p) => `---\n\n# ${p.data.title}\n\nURL: ${abs(`/writing/${p.id}/`)}\nDate: ${fmtDate(p.data.date, 'iso')}\n\n${p.body?.trim() ?? ''}\n`,
    ),
    ...notes.filter((n) => !n.data.draft).map(
      (n) => `---\n\n# Note: ${n.data.title}\n\nURL: ${abs(`/notes/${n.id}/`)}\nDate: ${fmtDate(n.data.date, 'iso')}\n\n${n.body?.trim() ?? ''}\n`,
    ),
  ];
  return new Response(parts.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
