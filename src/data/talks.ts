export interface Appearance {
  date: string; // YYYY-MM
  kind: 'talk' | 'panel' | 'interview' | 'video' | 'press' | 'byline';
  title?: string;
  venue: string;
  blurb?: string;
  links?: { label: string; href: string }[];
}

export const APPEARANCES: Appearance[] = [
  {
    date: '2026-02', kind: 'press', venue: 'Snowflake BUILD London',
    title: 'Semantic View Autopilot launch',
    blurb: 'Quoted in Snowflake\'s launch on why a governed, shared understanding of business metrics matters for AI systems.',
  },
  {
    date: '2025-05', kind: 'press', venue: 'Zencoder',
    title: 'Zen Agents launch',
    blurb: 'Quoted on custom agents + MCP as "ninja Cyborgs" for engineering teams.',
    links: [{ label: 'Product', href: 'https://zencoder.ai/product/zen-agents' }],
  },
  {
    date: '2025-03', kind: 'talk', venue: 'Snowflake Data for Breakfast, Austin',
    blurb: 'A client keynote feature on application development with Cortex. The first place our agent architecture diagram was shown publicly.',
  },
  {
    date: '2024-09', kind: 'talk', venue: 'Simon Data webinar',
    title: 'Convert more, spend less: mastering identity resolution',
    blurb: 'With Emily Dennis. The technical nitty-gritty of identity resolution inside the warehouse, and why it moves conversion and ad spend.',
    links: [{ label: 'Watch', href: 'https://www.youtube.com/watch?v=bt_jvxU_8aI' }],
  },
  {
    date: '2024-08', kind: 'talk', venue: 'Simon Data webinar',
    title: 'Unlock your Snowflake data with a composable CDP',
    blurb: 'Data composability beyond marketing: unifying contact and non-contact data, entity resolution, and direct SQL access instead of rETL. Includes my "Inside Out" demo of composable data apps running in Snowflake.',
    links: [
      { label: 'Watch', href: 'https://www.youtube.com/watch?v=6dEPzVU7lrw' },
      { label: 'Demo only', href: 'https://www.youtube.com/watch?v=mXbNPfZq6o0' },
      { label: 'Event page', href: 'https://www.simon.ai/webinars/unlock-the-full-potential-of-your-snowflake-data-with-a-composable-cdp' },
    ],
  },
  {
    date: '2023-06', kind: 'interview', venue: 'Snowflake Summit 2023',
    title: 'Data Heroes: how Simon Data built its CDP on Snowflake',
    blurb: 'Interviewed by Sohail Zafar.',
    links: [{ label: 'Watch', href: 'https://www.youtube.com/live/yTAdRAFRvf8' }],
  },
  {
    date: '2022-10', kind: 'panel', venue: 'Snowflake Data Cloud World Tour',
    blurb: 'Data sharing as the antidote to marketing-data lock-in.',
  },
  {
    date: '2022-10', kind: 'byline', venue: 'Solutions Review',
    title: 'Using in-house data to deliver better marketing personalization',
    links: [{ label: 'Read', href: 'https://solutionsreview.com/marketing-automation/using-in-house-data-to-deliver-better-marketing-personalization/' }],
  },
  {
    date: '2022-09', kind: 'panel', venue: 'Snowflake BUILD 2022',
    blurb: 'Re-platforming onto Snowflake, scale, and Simon\'s first Native App, the Schematizer.',
  },
  {
    date: '2021-09', kind: 'panel', venue: 'VentureBeat x Snowflake',
    blurb: 'Agility of workload (large-scale ELT down to real-time triggers) and agility of time to value, e.g. one micro-partition per contact query.',
  },
  {
    date: '2021-09', kind: 'panel', venue: 'Snowflake BUILD 2021',
    blurb: 'Data shares back into clients\' Snowflake accounts, and database triggers that fire real-time messaging off Snowflake queries.',
  },
  {
    date: '2021-03', kind: 'talk', venue: 'The MarTech Conference (Spring 2021, online)',
    title: 'Unlocking personalization beyond recommendations',
    blurb: 'Personalization is a pipeline, not a recommender: the four categories of personalization tactics (behavioral triggers, dynamic segments, experimentation and channel coordination, templating with live non-contact data) and the tooling each one needs. Later expanded into a blog post.',
    links: [{ label: 'Agenda (archived)', href: 'http://web.archive.org/web/20210314195949/https://martechconf.com/spring/agenda/' }],
  },
  {
    date: '2021-08', kind: 'video', venue: 'VentureFizz',
    title: 'Working at Simon Data: unlock the power of your customer data',
    links: [{ label: 'Watch (archived)', href: 'http://web.archive.org/web/20220816001128/https://venturefizz.com/videos/working-simon-data-unlock-power-your-customer-data' }],
  },
  {
    date: '2019-04', kind: 'interview', venue: 'Modern CTO podcast #98',
    title: 'Matt Walker, CTO at Simon Data',
    blurb: 'With Joel Beasley: building Simon\'s engineering team (26 engineers at the time) and running it remotely from Austin.',
    links: [{ label: 'Listen', href: 'https://moderncto.io/98-matt-walker-cto-at-simondata/' }],
  },
  {
    date: '2019-01', kind: 'video', venue: 'Modern CTO',
    title: 'Managing a Remote Culture',
    links: [{ label: 'Watch', href: 'https://www.youtube.com/watch?v=w-eHOamkVoQ' }],
  },
  {
    date: '2013-03', kind: 'talk', venue: 'Data Day Texas 2013, AT&T Conference Center, Austin',
    title: 'Patchwork Data at Etsy',
    blurb: 'A history of Etsy\'s big data stack: the A/B framework, Vertica, cascading.jruby vs. Scalding, and streaming.',
    links: [{ label: 'Slides', href: 'https://www.slideshare.net/mwalkerinfo/data-daytexas2013' }],
  },
  {
    date: '2013-02', kind: 'talk', venue: 'O\'Reilly Strata 2013, Santa Clara',
    title: 'Funnel Analysis in Hadoop at Etsy',
    blurb: 'With Wil Stuckey and Steve Mardenfeld: Etsy\'s event-sequence matching tool, run over hundreds of millions of visits in a single Hadoop job.',
    links: [
      { label: 'Slides', href: 'https://www.slideshare.net/mwalkerinfo/funnel-analysis-in-hadoop-at-etsy' },
      { label: 'Session', href: 'http://web.archive.org/web/20191216125942/https://conferences.oreilly.com/strata/strata2013/public/schedule/detail/27395' },
    ],
  },
];
