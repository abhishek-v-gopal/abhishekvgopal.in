import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../lib/post";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building products, workshops with Devmorphix, and the tools I use — from Abhishek V Gopal.",
  alternates: { canonical: "/writing" },
};

const shell = "mx-auto w-full max-w-[78rem] px-[clamp(1.25rem,5vw,5rem)]";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingIndex() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <header className={`${shell} flex items-baseline justify-between py-7`}>
        <Link
          href="/"
          className="font-display text-[0.95rem] font-bold tracking-[-0.01em] no-underline"
        >
          Abhishek V Gopal
        </Link>
        <Link href="/#contact" className="text-[0.95rem] text-ink-soft no-underline hover:text-brass">
          Contact
        </Link>
      </header>

      <section className={`${shell} py-[clamp(3rem,8vw,6rem)]`}>
        <h1 className="mb-4 font-display text-[clamp(2.4rem,7vw,4.5rem)] font-bold tracking-[-0.03em]">
          Writing
        </h1>
        <p className="mb-[clamp(2.5rem,6vw,4rem)] max-w-[52ch] text-stone">
          Notes on building products, running workshops, and the tools I use
          day to day.
        </p>

        <div className="grid">
          {sorted.map((post, i) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className={`group grid gap-2 border-t border-line py-[clamp(1.75rem,4vw,2.25rem)] no-underline transition-colors hover:bg-paper-warm sm:grid-cols-[10rem_1fr] sm:gap-8 ${
                i === sorted.length - 1 ? "border-b" : ""
              }`}
            >
              <p className="text-[0.85rem] text-stone">
                {formatDate(post.date)}
              </p>
              <div>
                <h2 className="text-[1.4rem] font-semibold transition-colors group-hover:text-brass">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-[60ch] text-ink-soft">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}