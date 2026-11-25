import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { RAMJI4_BLOG_POSTS } from './blog-data';

export const metadata: Metadata = {
  title: 'IPL Insights, Match Tactics & Squad Analytics | RAMJI247 Blog',
  description: 'Explore deep analytical research, tactical guides, auction dynamics, and tournament intelligence from the RAMJI247 IPL strategy team.',
  alternates: {
    canonical: 'https://ramji247ipl.com/blog',
  },
  openGraph: {
    title: 'IPL Insights, Match Tactics & Squad Analytics | RAMJI247 Blog',
    description: 'Explore deep analytical research, tactical guides, auction dynamics, and tournament intelligence from the RAMJI247 IPL strategy team.',
    url: 'https://ramji247ipl.com/blog',
    siteName: 'RAMJI247 IPL',
    type: 'website',
  },
};

export default function BlogHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'RAMJI247 IPL Strategy & Analytics Blog',
    description: 'Expert research, tactical breakdowns, rule guides, and squad construction analytics for the Indian Premier League.',
    url: 'https://ramji247ipl.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'RAMJI247',
      url: 'https://ramji247ipl.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ramji247ipl.com/images/logo.png',
      },
    },
    blogPost: RAMJI4_BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      url: `https://ramji247ipl.com/blog/${post.slug}`,
      datePublished: post.isoDate ? post.isoDate.slice(0, 10) : '2026-11-18',
      author: {
        '@type': 'Organization',
        name: post.author,
      },
      image: `https://ramji247ipl.com${post.heroImage}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Official Research & Analysis
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            RAMJI247 <span className="text-sky-400">IPL Insights & Analytics</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Data-backed tactical breakdowns, tournament rule evolutions, auction economics, and strategic match intelligence curated by senior sports analysts.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {RAMJI4_BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-slate-900/60 rounded-2xl border border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 overflow-hidden group shadow-xl"
            >
              <div className="relative w-full aspect-[16/9] bg-slate-950 border-b border-slate-800/80 p-4">
                <Image
                  src={post.heroImage}
                  alt={post.heroImageAlt || post.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="px-2.5 py-1 rounded bg-sky-950 text-sky-400 font-semibold border border-sky-800/50">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.readTime}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{post.publishedDate}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.summary}
                </p>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
                  >
                    Read Analysis &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Responsible Gaming Banner */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 text-center text-xs text-slate-400 max-w-4xl mx-auto">
          <p className="font-semibold text-slate-300 mb-1">RAMJI247 Editorial & Responsible Sports Information</p>
          <p>
            All articles, tactical breakdowns, and statistics published on RAMJI247 IPL are provided strictly for educational, research, and sports analytical purposes. 18+ only.
          </p>
        </div>
      </div>
    </div>
  );
}
