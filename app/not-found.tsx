import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-[0.85rem] text-stone">404</p>
      <h1 className="mb-4 font-display text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-[-0.03em]">
        This page doesn&apos;t exist
      </h1>
      <p className="mb-8 max-w-[42ch] text-stone">
        The link might be old, or the page moved. Here&apos;s where you can go
        instead.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="border border-ink bg-ink px-6 py-3 font-display text-[0.95rem] font-semibold text-paper no-underline transition-colors hover:border-brass hover:bg-brass"
        >
          Go home
        </Link>
        <Link
          href="/writing"
          className="border border-ink px-6 py-3 font-display text-[0.95rem] font-semibold no-underline transition-colors hover:bg-ink hover:text-paper"
        >
          Read the writing
        </Link>
      </div>
    </main>
  );
}