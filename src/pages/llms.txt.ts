import type { APIContext } from 'astro';
import { getWriting, getNotes, fmtDate } from '../lib/content';
import { SITE, MAHAL } from '../data/site';

// https://llmstxt.org — a map of this site for agents. Full text lives at /llms-full.txt.
export async function GET(context: APIContext) {
  const site = context.site!;
  const abs = (p: string) => new URL(p, site).href;
  const [posts, notes] = await Promise.all([getWriting(), getNotes()]);
  const pub = posts.filter((p) => !p.data.draft);
  const pubNotes = notes.filter((n) => !n.data.draft);

  const body = `# ${SITE.name}

> ${SITE.description}

Matt is co-founder of Mahal Systems (${MAHAL.url}), which helps teams evaluate and optimize AI agents ("${MAHAL.mission}"). Contact: ${MAHAL.email}. Previously co-founder, CTO and CISO of Simon AI (formerly Simon Data, 2013–2026, acquired by Monetate); staff engineer at Etsy; first hire at Adtuitive (acquired by Etsy); MS UT Austin; BS Rice.

## Writing

${pub.map((p) => `- [${p.data.title}](${abs(`/writing/${p.id}/`)}): ${p.data.description} (${fmtDate(p.data.date, 'iso')})`).join('\n')}

## Notes

${pubNotes.map((n) => `- [${n.data.title}](${abs(`/notes/${n.id}/`)}) (${fmtDate(n.data.date, 'iso')})`).join('\n')}

## Pages

- [Talks & press](${abs('/talks/')})
- [Papers & code](${abs('/papers/')})
- [Changelog](${abs('/log/')}): career timeline
- [Now](${abs('/now/')})
- [Resume](${abs('/resume/')})

## Optional

- [Full text of all writing and notes](${abs('/llms-full.txt')})
- [RSS](${abs('/rss.xml')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
