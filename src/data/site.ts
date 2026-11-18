export const SITE = {
  name: 'Matt Walker',
  url: 'https://mwalker.info',
  title: 'Matt Walker',
  role: 'Co-founder, Mahal Systems',
  tagline: 'Building agents, and the evals that prove they got better',
  description:
    'Matt Walker is co-founder of Mahal Systems, an agent evaluation and optimization company, and previously co-founder and CTO of Simon AI (acquired by Monetate). Writing on AI agents, evals, and data systems at scale.',
};

export const MAHAL = {
  name: 'Mahal Systems',
  url: 'https://mahalsystems.ai/',
  email: 'hello@mahalsystems.ai',
  mission: 'Great agents are built on great evals.',
  pitch: 'Make your agents 1% better every day. Upgrade models, avoid regressions, optimize maximally.',
  evals: 'https://mahalsystems.ai/aot/evals/',
  library: 'https://mahalsystems.ai/aot/optimizations/',
  research: 'https://mahalsystems.ai/research/',
  github: 'https://github.com/Mahalanobis-Systems/aot-evals',
  install: 'claude plugin marketplace add Mahalanobis-Systems/aot-evals',
};

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mwalker', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/mrwalker', icon: 'github' },
  { label: 'Medium', href: 'https://medium.com/@data_daddy', icon: 'medium' },
  { label: 'Twitter / X', href: 'https://twitter.com/data_daddy', icon: 'twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com/mwalker.info', icon: 'facebook' },
] as const;

export const NAV = [
  { href: '/', label: '~' },
  { href: '/writing/', label: 'writing' },
  { href: '/notes/', label: 'notes' },
  { href: '/talks/', label: 'talks' },
  { href: '/papers/', label: 'papers' },
  { href: '/log/', label: 'log' },
  { href: '/now/', label: 'now' },
];
