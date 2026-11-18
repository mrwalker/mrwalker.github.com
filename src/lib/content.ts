import { getCollection, type CollectionEntry } from 'astro:content';

const showDrafts = import.meta.env.DEV;

export type Post = CollectionEntry<'writing'>;
export type Note = CollectionEntry<'notes'>;

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getWriting(): Promise<Post[]> {
  const all = await getCollection('writing', ({ data }) => showDrafts || !data.draft);
  return all.sort(byDateDesc);
}

export async function getNotes(): Promise<Note[]> {
  const all = await getCollection('notes', ({ data }) => showDrafts || !data.draft);
  return all.sort(byDateDesc);
}

export function readingTime(body: string | undefined): string {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export function fmtDate(d: Date, style: 'long' | 'short' | 'iso' = 'long'): string {
  if (style === 'iso') return d.toISOString().slice(0, 10);
  return d.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}

/** Deterministic 7-char hex "commit hash" for the git-log timeline. */
export function shortHash(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
}
