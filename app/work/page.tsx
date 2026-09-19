import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Every project Abhishek V Gopal has shipped — products, client sites, and community builds.",
  alternates: { canonical: "/work" },
};

const shell = "mx-auto w-full max-w-[78rem] px-[clamp(1.25rem,5vw,5rem)]";

export default function WorkArchive() {
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
          href="/#contact"
          className="text-[0.95rem] text-ink-soft no-underline hover:text-brass"
        >
          Contact
        </Link>
      </header>

      <section className={`${shell} py-[clamp(3rem,8vw,6rem)]`}>
        <h1 className="mb-4 font-display text-[clamp(2.4rem,7vw,4.5rem)] font-bold tracking-[-0.03em]">
          All work
        </h1>
        <p className="mb-[clamp(2.5rem,6vw,4rem)] max-w-[52ch] text-stone">
          Every project I have shipped, products and client work alike.
        </p>

        <div className="grid">
          {projects.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noreferrer noopener"
                  : undefined
              }
              className={`group grid gap-3.5 border-t border-line py-[clamp(1.5rem,3.5vw,2.25rem)] no-underline transition-colors hover:bg-paper-warm sm:grid-cols-[15rem_1fr_auto] sm:items-start sm:gap-8 ${
                i === projects.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <h2 className="text-[1.4rem] font-semibold transition-colors group-hover:text-brass">
                  {item.name}
                </h2>
                <ul className="mt-2 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 text-[0.8rem] text-stone">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <p className="max-w-[48ch] text-ink-soft">{item.note}</p>
              <p className="whitespace-nowrap text-[0.85rem] text-stone">
                {item.role}, {item.year}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}