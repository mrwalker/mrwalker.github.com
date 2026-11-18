/**
 * Career as a git log. Newest first; order here IS display order.
 * type -> colored prefix: init | ship | exit | talk | press | paper | job | edu | oss | misc
 */
export type LogType = 'init' | 'ship' | 'exit' | 'talk' | 'press' | 'paper' | 'job' | 'edu' | 'oss' | 'misc';

export interface LogEntry {
  date: string; // YYYY, YYYY-MM or YYYY-MM-DD
  type: LogType;
  msg: string;
  href?: string;
  /** Show on the home page's abridged log. */
  pin?: boolean;
}

export const LOG: LogEntry[] = [
  { date: '2026-11-04', type: 'ship', msg: 'Mahal Systems: introduce Effective Agent Evals (AOT Evals, Apache 2.0)', href: 'https://mahalsystems.ai/aot/evals/', pin: true },
  { date: '2026-11-03', type: 'misc', msg: 'Opus orchestrates a local fine-tune on my laptop', href: '/notes/opus-orchestrates-a-local-fine-tune/' },
  { date: '2026-10-31', type: 'misc', msg: 'Notes on distillation, from Nathan Lambert\'s RLHF book', href: '/notes/rlhf-book-distillation/' },
  { date: '2026-10-23', type: 'ship', msg: 'Mahal Systems: launch the AOT Optimization Library', href: 'https://mahalsystems.ai/aot/optimizations/' },
  { date: '2026', type: 'init', msg: 'Co-found Mahal Systems with Jason Davis; advise Monetate', href: 'https://mahalsystems.ai/', pin: true },
  { date: '2026-08-16', type: 'oss', msg: 'Diagnose OpenClaw\'s free-tier rate limiting (openclaw#124317)', href: 'https://github.com/openclaw/openclaw/pull/124317' },
  { date: '2026-07-30', type: 'exit', msg: 'Simon AI acquired by Monetate', href: '/notes/monetate-personal-reflection/', pin: true },
  { date: '2026-02', type: 'press', msg: 'Quoted in Snowflake BUILD London launch of Semantic View Autopilot' },
  { date: '2025-12', type: 'ship', msg: 'Publish "Agents in production" series', href: '/writing/' },
  { date: '2025-09', type: 'ship', msg: 'Simon Data becomes Simon AI', href: '/writing/composable-agents-snowflake-cortex/' },
  { date: '2025-06', type: 'ship', msg: 'Launch Composable AI Agents (Insights, Data, Automation agents)', pin: true },
  { date: '2025-05', type: 'press', msg: 'Quoted in Zencoder Zen Agents launch', href: 'https://zencoder.ai/product/zen-agents' },
  { date: '2025-03', type: 'talk', msg: 'Snowflake Data for Breakfast, Austin: first public look at our agent architecture', href: '/talks/' },
  { date: '2024-09', type: 'talk', msg: 'Webinar: mastering identity resolution in the warehouse', href: 'https://www.youtube.com/watch?v=bt_jvxU_8aI' },
  { date: '2024-08', type: 'talk', msg: 'Webinar: unlock your Snowflake data with a composable CDP', href: 'https://www.youtube.com/watch?v=6dEPzVU7lrw', pin: true },
  { date: '2023-09', type: 'press', msg: 'Named a Leader (CDP) in Snowflake\'s Modern Marketing Data Stack report', href: 'https://www.simon.ai/blog-posts/simon-data-recognized-leader-snowflake-2023-modern-marketing-data-stack-report' },
  { date: '2023-08', type: 'misc', msg: 'Raise $54M Series D (Macquarie Capital); launch the Connected CDP', href: 'https://www.simon.ai/news/simon-data-raises-54m-and-launches-the-first-connected-cdp', pin: true },
  { date: '2023-06', type: 'talk', msg: 'Snowflake Summit: Data Heroes interview', href: 'https://www.youtube.com/live/yTAdRAFRvf8' },
  { date: '2023-06', type: 'ship', msg: 'Ship IdentityQA as a Snowflake Native App; launch Connected Segmentation', href: 'https://www.simon.ai/blog-posts/powered-by-snowflake' },
  { date: '2023', type: 'press', msg: 'Snowflake Powered by Snowflake Partner of the Year' },
  { date: '2023-01', type: 'ship', msg: 'Launch Simon Activate: audiences straight from the warehouse', href: 'https://www.simon.ai/blog-posts/simon-data-launches-simon-activate' },
  { date: '2022-10', type: 'talk', msg: 'Snowflake Data Cloud World Tour panel', href: '/talks/' },
  { date: '2022-10', type: 'press', msg: 'Solutions Review byline: using in-house data for personalization', href: 'https://solutionsreview.com/marketing-automation/using-in-house-data-to-deliver-better-marketing-personalization/' },
  { date: '2022-09', type: 'talk', msg: 'Snowflake BUILD 2022', href: '/talks/' },
  { date: '2022-03', type: 'ship', msg: 'Join the Powered by Snowflake program; go Snowflake-native', href: 'https://www.cdpinstitute.org/news/simon-data-joins-powered-by-snowflake-program/', pin: true },
  { date: '2021-10', type: 'ship', msg: 'Launch Simon Journeys and Simon Mail', href: 'https://www.simon.ai/blog-posts/simon-solves-for-personalization-with-new-cdp-features-products' },
  { date: '2021-09', type: 'talk', msg: 'VentureBeat x Snowflake panel; Snowflake BUILD 2021', href: '/talks/' },
  { date: '2021-08', type: 'press', msg: 'VentureFizz video profile of Simon engineering', href: 'http://web.archive.org/web/20220816001128/https://venturefizz.com/videos/working-simon-data-unlock-power-your-customer-data' },
  { date: '2021-03-16', type: 'talk', msg: 'The MarTech Conference: "Unlocking personalization beyond recommendations"', href: 'http://web.archive.org/web/20210314195949/https://martechconf.com/spring/agenda/' },
  { date: '2020-05', type: 'press', msg: 'Gartner Cool Vendor in Multichannel Marketing', href: 'https://www.simon.ai/blog-posts/simon-named-cool-vendor' },
  { date: '2019-08', type: 'misc', msg: 'Raise $30M Series C (Polaris Partners); ~90 people', href: 'https://techcrunch.com/2019/08/19/simon-data-hauls-in-30m-series-c-to-continue-building-customer-data-platform/', pin: true },
  { date: '2019-04', type: 'talk', msg: 'Modern CTO podcast #98 with Joel Beasley', href: 'https://moderncto.io/98-matt-walker-cto-at-simondata/' },
  { date: '2019-01', type: 'talk', msg: 'Modern CTO: "Managing a Remote Culture"', href: 'https://www.youtube.com/watch?v=w-eHOamkVoQ' },
  { date: '2018-07', type: 'misc', msg: 'Raise $20M Series B (Polaris Partners)', href: 'https://www.mrweb.com/drno/news26585.htm', pin: true },
  { date: '2017-10', type: 'job', msg: 'Advise OmniBuilds (3D printing marketplace) on architecture' },
  { date: '2017-04', type: 'misc', msg: 'Open fully remote engineering roles' },
  { date: '2015-03', type: 'misc', msg: 'Start teaching kindergartners to code (five years, hardest prompt engineering job I\'ve had)' },
  { date: '2015', type: 'ship', msg: 'Simon\'s first product reaches market; raise Series A', pin: true },
  { date: '2014-02', type: 'oss', msg: 'archive: manage a Hive warehouse in source control', href: 'https://github.com/mrwalker/archive' },
  { date: '2013-11', type: 'init', msg: 'Co-found Simon Data with Jason Davis; CTO and CISO for 13 years', pin: true },
  { date: '2013-04', type: 'job', msg: 'Apple: data scientist, fraud detection at scale' },
  { date: '2013-04-26', type: 'oss', msg: 'cascading.jruby 1.0.0, relicensed from LGPL to Apache 2.0', href: 'https://github.com/etsy/cascading.jruby' },
  { date: '2013-03', type: 'talk', msg: 'Data Day Texas, Austin: "Patchwork Data at Etsy"', href: 'https://www.slideshare.net/mwalkerinfo/data-daytexas2013' },
  { date: '2013-02', type: 'talk', msg: 'Strata Santa Clara: "Funnel Analysis in Hadoop at Etsy"', href: 'https://www.slideshare.net/mwalkerinfo/funnel-analysis-in-hadoop-at-etsy', pin: true },
  { date: '2012-11', type: 'oss', msg: 'cascading.jruby 0.0.6 through 0.0.10: five releases in 2012', href: 'https://rubygems.org/gems/cascading.jruby/versions' },
  { date: '2012-09', type: 'oss', msg: 'Upstream Etsy\'s LocalTap to Cascading\'s maple, so local mode works without SequenceFiles', href: 'https://github.com/Cascading/maple/pull/23' },
  { date: '2012-06', type: 'oss', msg: 'Open-source jading: package cascading.jruby jobs for hadoop jar', href: 'https://github.com/etsy/jading' },
  { date: '2011-08', type: 'oss', msg: 'cascading.jruby 0.0.5: support newer JRuby releases', href: 'https://github.com/etsy/cascading.jruby' },
  { date: '2011-04', type: 'oss', msg: 'First RubyGems release of cascading.jruby (0.0.4), the JRuby DSL behind Etsy\'s Hadoop jobs', href: 'https://github.com/etsy/cascading.jruby', pin: true },
  { date: '2009-12', type: 'exit', msg: 'Adtuitive acquired by Etsy; join as staff engineer on analytics', pin: true },
  { date: '2009-11', type: 'oss', msg: 'Fork cascading.jruby, a JRuby DSL for Cascading on Hadoop; add Cascades', href: 'https://github.com/mrwalker/cascading.jruby' },
  { date: '2009-06', type: 'paper', msg: 'KDD \'09: dataflow co-clustering of the Netflix Prize data', href: '/papers/' },
  { date: '2009-05', type: 'job', msg: 'Adtuitive: first hire, applied research scientist' },
  { date: '2008-09', type: 'paper', msg: 'Java Developer\'s Journal: "Four Paths to Java Parallelism"', href: '/papers/' },
  { date: '2007-08', type: 'paper', msg: 'Java Developer\'s Journal: "It\'s a Multi-Core World: Let the Data Flow"', href: '/papers/' },
  { date: '2007-06', type: 'init', msg: 'Co-found Pulse Meridian, a data-mining consultancy, with grad school friends' },
  { date: '2006-11', type: 'job', msg: 'Pervasive Software: dataflow engineering on DataRush' },
  { date: '2005-05', type: 'edu', msg: 'MS Computer Sciences, UT Austin (advisor: Inderjit Dhillon)' },
  { date: '2003-05', type: 'edu', msg: 'BS Electrical & Computer Engineering, Rice University, magna cum laude' },
  { date: '2002-06', type: 'job', msg: 'MIT Lincoln Laboratory: satellite tracking intern' },
];
