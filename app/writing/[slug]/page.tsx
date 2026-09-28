import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../../../lib/post";

const shell = "mx-auto w-full max-w-[78rem] px-[clamp(1.25rem,5vw,5rem)]";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: "Abhishek V Gopal" },
  };

  return (
    <main>
      <header className={`${shell} flex items-baseline justify-between py-7`}>
        <Link
          href="/"
          className="font-display text-[0.95rem] font-bold tracking-[-0.01em] no-underline"
        >
          Abhishek V Gopal
        </Link>
        <Link
          href="/writing"
          className="text-[0.95rem] text-ink-soft no-underline hover:text-brass"
        >
          All writing
        </Link>
      </header>

      <article className={`${shell} py-[clamp(3rem,8vw,6rem)]`}>
        <p className="mb-4 text-[0.85rem] text-stone">
          {formatDate(post.date)}
        </p>
        <h1 className="mb-[clamp(2rem,5vw,3.5rem)] max-w-[24ch] font-display text-[clamp(2.1rem,5.5vw,3.75rem)] font-bold tracking-[-0.03em]">
          {post.title}
        </h1>

        <div className="max-w-[90ch] space-y-5 text-[1.1rem] leading-[1.7]">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}