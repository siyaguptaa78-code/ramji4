import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RAMJI4_BLOG_POSTS, BlogPost } from '../blog-data';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RAMJI4_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = RAMJI4_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://ramji247ipl.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://ramji247ipl.com/blog/${post.slug}`,
      siteName: 'RAMJI247 IPL',
      type: 'article',
      publishedTime: '2026-11-18T00:00:00.000Z',
      authors: [post.author],
      images: [
        {
          url: `https://ramji247ipl.com${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://ramji247ipl.com${post.heroImage}`],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = RAMJI4_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: `https://ramji247ipl.com/blog/${post.slug}`,
    datePublished: '2026-11-18T00:00:00.000Z',
    dateModified: '2026-11-18T00:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ramji247ipl.com/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://ramji247ipl.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RAMJI247',
      url: 'https://ramji247ipl.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ramji247ipl.com/images/logo.png',
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `https://ramji247ipl.com${post.heroImage}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ramji247ipl.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://ramji247ipl.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.shortTitle,
        item: `https://ramji247ipl.com/blog/${post.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Nav */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-slate-200 truncate max-w-xs">{post.shortTitle}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
            <span className="px-3 py-1 rounded bg-sky-950 text-sky-400 font-bold border border-sky-800">
              {post.category}
            </span>
            <span className="text-slate-400">{post.readTime}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Published {post.publishedDate}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal border-l-4 border-sky-500 pl-4 py-1 italic bg-slate-900/40 rounded-r-xl">
            {post.summary}
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
            <span>By <strong className="text-slate-200">{post.author}</strong></span>
            <span>•</span>
            <span>Verified Editorial Standard</span>
          </div>
        </header>

        {/* Hero Graphic Container */}
        <div className="relative w-full aspect-[16/9] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-12 shadow-2xl p-4">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-contain p-2"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-sky-400 mb-4 uppercase tracking-wider text-xs">
            Contents & Key Sections
          </h2>
          <ul className="space-y-2">
            {post.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-slate-300 hover:text-sky-400 text-sm md:text-base transition-colors flex items-center gap-2"
                >
                  <span className="text-sky-500">&rarr;</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* FAQ Section */}
        <section id="faqs" className="mb-16 border-t border-slate-800 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2.5 h-8 bg-sky-500 rounded-full inline-block"></span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {post.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-sky-300 mb-2">{faq.q}</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Gaming Notice */}
        <footer className="border-t border-slate-800 pt-8 mt-12">
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl text-center">
            <p className="text-sm font-semibold text-slate-300 mb-1">RAMJI247 Responsible Platform Guidelines</p>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              Sports analysis and data insights are for information purposes. Participate responsibly. 18+ only.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-sky-400 font-semibold border border-sky-800/60 transition-colors text-sm"
            >
              &larr; Return to IPL Blog Hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
