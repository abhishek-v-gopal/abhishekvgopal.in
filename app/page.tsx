import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { posts } from "../lib/post";
import { featuredProjects } from "../lib/projects";

const shell = "mx-auto w-full max-w-[78rem] px-[clamp(1.25rem,5vw,5rem)]";
const band = "py-[clamp(4.5rem,10vw,9rem)]";

const recentPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const practice = [
  {
    title: "Product builds",
    body: "An idea taken from a rough sketch to something live. Database, backend, interface and deployment, handled by one person who has done it before.",
  },
  {
    title: "Business websites",
    body: "Fast, well-structured sites for businesses in Kerala, built so that people searching for you actually find you and get in touch.",
  },
  {
    title: "Workshops for colleges",
    body: "Hands-on sessions on web development and modern tooling, delivered on campus with Devmorphix. Students leave having built something.",
  },
];

const elsewhere = [
  { label: "GitHub", href: "https://github.com/abhishek-v-gopal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishekvgopal" },
  { label: "X", href: "https://x.com/abhishek_vgopal" },
];

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-10 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to work
      </a>

      <header
        className={`${shell} flex flex-wrap items-baseline justify-between gap-6 py-7`}
      >
        <Link
          href="/"
          className="font-display text-[0.95rem] font-bold tracking-[-0.01em] no-underline"
        >
          Abhishek V Gopal
        </Link>
        <nav
          aria-label="Sections"
          className="flex gap-[clamp(1rem,3vw,2.25rem)] text-[0.95rem] text-ink-soft"
        >
          <a href="#work" className="no-underline hover:text-brass">
            Work
          </a>
          <a href="#practice" className="no-underline hover:text-brass">
            What I do
          </a>
          <Link href="/writing" className="no-underline hover:text-brass">
            Writing
          </Link>
          <a href="#about" className="no-underline hover:text-brass">
            About
          </a>
          <a href="#contact" className="no-underline hover:text-brass">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* hero */}
        <section
          className={`${shell} pb-[clamp(4.5rem,10vw,9rem)] pt-[clamp(2.5rem,7vw,5rem)]`}
        >
          <div className="mb-[clamp(1.75rem,4vw,2.75rem)] flex animate-rise items-center gap-4 [animation-delay:20ms]">
            {/* Add a real headshot at /public/photo.jpg — square crop works best here */}
            <Image
              src="/photo.png"
              alt="Abhishek V Gopal"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full border border-line object-cover"
              priority
            />
            <p className="max-w-[30ch] text-[0.95rem] text-stone">
              Based in Kerala, India. Open to freelance projects and full-time
              roles.
            </p>
          </div>

          <h1 className="mb-[clamp(1.75rem,4vw,3rem)] animate-rise font-display text-[clamp(3.1rem,13.5vw,11rem)] font-bold tracking-[-0.045em] [animation-delay:180ms]">
            <span className="block">Abhishek</span>
            <span className="block">V Gopal</span>
          </h1>

          <div className="grid animate-rise gap-[clamp(2rem,5vw,4rem)] border-t border-line pt-[clamp(1.75rem,4vw,2.75rem)] lg:grid-cols-[1.55fr_1fr] [animation-delay:300ms]">
            <div>
              <p className="max-w-[34ch] text-[clamp(1.2rem,2.2vw,1.55rem)] leading-[1.5]">
                I build full-stack web products for Kerala and the NRI market.
                Directories, finance tools and client sites that ship, and then
                keep running.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="border border-ink bg-ink px-6 py-3 font-display text-[0.95rem] font-semibold text-paper no-underline transition-colors hover:border-brass hover:bg-brass"
                >
                  See the work
                </a>
                <a
                  href="#contact"
                  className="border border-ink px-6 py-3 font-display text-[0.95rem] font-semibold no-underline transition-colors hover:bg-ink hover:text-paper"
                >
                  Start a project
                </a>
                {/* Add your PDF at /public/Abhishek_V_Gopal_Resume.pdf */}
                <a
                  href="/Abhishek_V_Gopal_Resume.pdf"
                  download
                  className="border border-line px-6 py-3 font-display text-[0.95rem] font-semibold text-ink-soft no-underline transition-colors hover:border-brass hover:text-brass"
                >
                  Download resume
                </a>
              </div>
            </div>

            <dl className="grid content-start gap-6 text-[0.95rem]">
              <div className="grid gap-1.5">
                <dt className="text-[0.85rem] text-stone">Building with</dt>
                <dd className="m-0">Next.js, TypeScript, Node, Hono</dd>
              </div>
              <div className="grid gap-1.5">
                <dt className="text-[0.85rem] text-stone">Shipping on</dt>
                <dd className="m-0">Cloudflare and Vercel</dd>
              </div>
              <div className="grid gap-1.5">
                <dt className="text-[0.85rem] text-stone">Also</dt>
                <dd className="m-0">MCA student, teaching with Devmorphix</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* work */}
        <section id="work" className={`${shell} ${band} border-t border-line`}>
          <div className="mb-[clamp(2.5rem,6vw,4rem)] flex flex-wrap items-end justify-between gap-4">
            <div className="grid max-w-[62ch] gap-3.5">
              <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] font-semibold">
                Things I have shipped
              </h2>
              <p className="max-w-[52ch] text-stone">
                A mix of my own products and client work across Kerala. Every
                one of them is live and used by real people.
              </p>
            </div>
            <Link
              href="/work"
              className="whitespace-nowrap text-[0.95rem] text-ink-soft no-underline hover:text-brass"
            >
              See more works
            </Link>
          </div>

          <div className="grid">
            {featuredProjects.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noreferrer noopener"
                    : undefined
                }
                className={`group grid gap-3.5 border-t border-line py-[clamp(1.75rem,4vw,2.5rem)] no-underline transition-colors hover:bg-paper-warm sm:grid-cols-[15rem_1fr_auto] sm:items-start sm:gap-8 ${
                  i === featuredProjects.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <h3 className="text-[clamp(1.4rem,3vw,1.95rem)] font-semibold transition-colors group-hover:text-brass">
                    {item.name}
                  </h3>
                  <ul className="mt-3 flex list-none flex-wrap gap-x-3.5 gap-y-1.5 p-0 text-[0.82rem] text-stone">
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

        {/* what I do */}
        <section
          id="practice"
          className={`${shell} ${band} border-t border-line`}
        >
          <h2 className="mb-[clamp(2.5rem,6vw,4rem)] text-[clamp(1.9rem,4.2vw,3rem)] font-semibold">
            How I can help
          </h2>

          <div className="grid gap-[clamp(2rem,4vw,3rem)] sm:grid-cols-3">
            {practice.map((item) => (
              <article
                key={item.title}
                className="grid gap-2.5 border-t-2 border-brass pt-4"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* testimonials */}
        <section className={`${shell} ${band} border-t border-line`}>
          <h2 className="mb-[clamp(2.5rem,6vw,4rem)] text-[clamp(1.9rem,4.2vw,3rem)] font-semibold">
            What people say
          </h2>

          <div className="grid gap-[clamp(2rem,4vw,3rem)] sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.id}
                className="grid gap-4 border-t-2 border-brass pt-4"
              >
                <blockquote className="text-ink-soft">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="text-[0.9rem] text-stone">
                  {t.name}, {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* about */}
        <section id="about" className={`${shell} ${band} border-t border-line`}>
          <h2 className="mb-[clamp(2.5rem,6vw,4rem)] text-[clamp(1.9rem,4.2vw,3rem)] font-semibold">
            About
          </h2>

          <div className="grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2">
            <div className="max-w-[54ch] space-y-4 text-[1.1rem]">
              <p>
                I am a full-stack developer and an MCA student in Kerala. Most
                of my time goes into building products that solve problems I can
                see around me, which is how Gigwork and MoneyVault started.
              </p>
              <p>
                I prefer finishing things over collecting side projects. A
                product is only interesting to me once someone outside my laptop
                is using it.
              </p>
            </div>
            <div className="max-w-[54ch] space-y-4 text-[1.1rem]">
              <p>
                Alongside client work I run tech workshops at colleges across
                Kerala with Devmorphix, and I am part of the Inovus Labs IEDC
                ecosystem.
              </p>
              <p>
                If you are building something for Kerala, for the Indian market,
                or for NRI users, that is the space I know best.
              </p>
            </div>
          </div>
        </section>

        {/* writing preview */}
        <section className={`${shell} ${band} border-t border-line`}>
          <div className="mb-[clamp(2.5rem,6vw,4rem)] flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] font-semibold">
              Writing
            </h2>
            <Link
              href="/writing"
              className="text-[0.95rem] text-ink-soft no-underline hover:text-brass"
            >
              All posts
            </Link>
          </div>

          <div className="grid">
            {recentPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className={`group grid gap-2 border-t border-line py-[clamp(1.5rem,3.5vw,2rem)] no-underline transition-colors hover:bg-paper-warm sm:grid-cols-[10rem_1fr] sm:gap-8 ${
                  i === recentPosts.length - 1 ? "border-b" : ""
                }`}
              >
                <p className="text-[0.85rem] text-stone">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div>
                  <h3 className="text-[1.25rem] font-semibold transition-colors group-hover:text-brass">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 max-w-[60ch] text-ink-soft">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="bg-ink text-paper-warm">
          <div className={`${shell} ${band}`}>
            <div className="mb-[clamp(2.5rem,6vw,4rem)] grid max-w-[62ch] gap-3.5">
              <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] font-semibold">
                Have something to build?
              </h2>
              <p className="max-w-[52ch] text-[#b9c9c3]">
                Tell me what you are working on. I reply to every message,
                usually within a day.
              </p>
            </div>

            <a
              href="mailto:mail@abhishekvgopal.in"
              className="inline-block break-words border-b-2 border-white/20 pb-1 font-display text-[clamp(1.6rem,6vw,4rem)] font-semibold tracking-[-0.035em] no-underline transition-colors hover:border-brass-light hover:text-brass-light"
            >
              mail@abhishekvgopal.in
            </a>

            <ul className="mt-[clamp(2.5rem,6vw,4rem)] flex list-none flex-wrap gap-6 p-0 text-[0.95rem]">
              {elsewhere.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-brass-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-[clamp(3rem,8vw,5rem)] flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-[0.85rem] text-[#9fb2ac]">
              <p>Abhishek V Gopal, Kerala, India</p>
              <p>Built with Next.js</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}