export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  body: string[]; // paragraphs — replace with your own writing
};

export const posts: Post[] = [
  {
    slug: "building-gigwork",
    title: "Why I'm building Gigwork",
    date: "2025-08-01",
    excerpt:
      "Notes on why a hyperlocal directory made sense for Kerala, and what I got wrong in the first version.",
    body: [
      "Replace this with your own notes on building Gigwork — what problem you noticed, why existing options (WhatsApp groups, Google Maps listings) weren't enough, and what the first version actually looked like.",
      "A good second paragraph covers a specific decision: a schema choice, a UX tradeoff, something you'd do differently now.",
      "End with where the project is headed next.",
    ],
  },
  {
    slug: "devmorphix-workshop-notes",
    title: "What I learned running college workshops",
    date: "2025-06-15",
    excerpt:
      "A few patterns from running Devmorphix sessions across Kerala colleges — what students actually get stuck on.",
    body: [
      "Replace this with a real recap from a specific workshop — the college, the topic, and one thing that surprised you about how students approached it.",
      "Specifics travel better than generalities: a question you didn't expect, a demo that broke live and what you did about it.",
    ],
  },
  {
    slug: "nextjs-hono-cloudflare-notes",
    title: "Deploying Next.js with a Hono backend on Cloudflare",
    date: "2025-05-02",
    excerpt:
      "A few things that weren't obvious the first time I wired this stack together.",
    body: [
      "Replace this with your actual deployment notes — the specific error you hit, the config that fixed it, and any gotchas with edge runtime constraints.",
      "Code snippets work well here once you're editing this for real.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}