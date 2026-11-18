export interface Paper {
  year: number;
  title: string;
  authors: string; // Matt's name is bolded in the UI
  venue: string;
  blurb: string;
  links?: { label: string; href: string }[];
}

export const PAPERS: Paper[] = [
  {
    year: 2009,
    title: 'Pervasive Parallelism in Data Mining: Dataflow Solution to Co-clustering Large and Sparse Netflix Data',
    authors: 'Srivatsava Daruru, Nena Marin, Matt Walker, Joydeep Ghosh',
    venue: 'KDD \'09: 15th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining',
    blurb:
      'Co-clustering the Netflix Prize ratings matrix (users × movies, very sparse) by expressing the algorithm as a dataflow graph, so it parallelizes across cores without hand-written threading. Built on Pervasive DataRush, the Java dataflow engine I worked on.',
    links: [{ label: 'ACM', href: 'https://doi.org/10.1145/1557019.1557140' }],
  },
  {
    year: 2008,
    title: 'Four Paths to Java Parallelism',
    authors: 'Matt Walker, Kevin Irwin',
    venue: 'Java Developer\'s Journal, Vol. 13, Issue 9',
    blurb: 'A practitioner\'s tour of approaches to parallel programming on the JVM in the early multi-core era, written while building the DataRush dataflow engine.',
    links: [{ label: 'Archived', href: 'http://web.archive.org/web/20161020151658/http://java.sys-con.com/node/768830' }],
  },
  {
    year: 2007,
    title: 'It\'s a Multi-Core World: Let the Data Flow',
    authors: 'Jim Falgout, Matt Walker',
    venue: 'Java Developer\'s Journal, Vol. 12, Issue 8',
    blurb: 'The case for dataflow programming as the way to put every core to work on data-intensive Java applications.',
    links: [{ label: 'Archived', href: 'http://web.archive.org/web/20101124042206/http://java.sys-con.com:80/node/419717' }],
  },
  {
    year: 2003,
    title: 'GRIMS/RTSEQ Object-Orientation Report',
    authors: 'Matt Walker',
    venue: 'MIT Lincoln Laboratory, Project Report SS-7',
    blurb: 'Porting a real-time ionospheric monitoring system from FORTRAN and C to object-oriented C++, to correct satellite tracking for GPS signal bias.',
  },
];

export interface Code {
  name: string;
  href: string;
  blurb: string;
  /** Shown in the left gutter; defaults to "git". */
  year?: string;
}

export const CODE: Code[] = [
  {
    name: 'AOT Evals', year: '2026',
    href: 'https://github.com/Mahalanobis-Systems/aot-evals',
    blurb: 'Mahal Systems\' open-source method and Claude Code plugin for building agent evals from real traces: sampling design, calibrated graders, and decision rules with actual statistics. Apache 2.0.',
  },
  {
    name: 'AOT Kit', year: '2026',
    href: 'https://github.com/Mahalanobis-Systems/aot-kit',
    blurb: 'One Claude Code skill per researched agent optimization, plus the library of evidence behind each one.',
  },
  {
    name: 'openclaw#124317', year: '2026',
    href: 'https://github.com/openclaw/openclaw/pull/124317',
    blurb: 'Traced why OpenClaw\'s free OpenCode Zen models were getting 429s and proposed a fix. The PR was closed in favor of upstream transport changes, but the diagnosis held up. (DeepSeek wrote most of the patch.)',
  },
  {
    name: 'archive', year: '2014',
    href: 'https://github.com/mrwalker/archive',
    blurb: 'Manage a Hive warehouse in source control: tables and views as HiveQL SELECTs, wired into a Python dependency graph. Born of early-Simon frustration with copy-pasting DDL into Qubole.',
  },
  {
    name: 'Upstream fixes', year: '2013–15',
    href: 'https://github.com/pulls?q=author%3Amrwalker+is%3Amerged+-user%3Amrwalker',
    blurb: 'Merged patches to requests-oauthlib (MailChimp compliance fix), Qubole\'s qds-sdk-py, and Snowplow.',
  },
  {
    name: 'cascading.jruby', year: '2009–13',
    href: 'https://github.com/etsy/cascading.jruby',
    blurb: 'A JRuby DSL for Cascading, the Hadoop workflow library. I forked Grégoire Marabout\'s original in 2009 and became its maintainer and top committer: Cascades, composition-time validation of Janino expressions, a long tail of JRuby compatibility fixes, and eight RubyGems releases from 0.0.4 (2011) to 1.0.0 (2013), which documented the whole API and relicensed it from LGPL to Apache 2.0. It powered 300+ analytics jobs at Etsy.',
  },
  {
    name: 'jading', year: '2012',
    href: 'https://github.com/etsy/jading',
    blurb: 'Packages cascading.jruby scripts into a single jar for execution via hadoop jar.',
  },
  {
    name: 'maple LocalTap', year: '2012',
    href: 'https://github.com/Cascading/maple/pull/23',
    blurb: 'Contributed Etsy\'s LocalTap to Cascading\'s maple tap collection, so Cascading local mode works without a SequenceFile implementation.',
  },
];
