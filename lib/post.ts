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
    title: "Building Gigwork: a hyperlocal platform for Kerala",
    date: "2026-09-28",
    excerpt:
      "How I built a hyperlocal services platform with its own user system, payments and a WhatsApp bot, and what it taught me about SEO, edge deployment and building for real users.",
    body: [
      "Gigwork is one of the biggest and most rewarding projects I've worked on. It's a hyperlocal business directory and services platform for Kerala, built to help people find local businesses and services near them, and to help those businesses get found online.",

      "When I started, I knew it would be more than a listing site. Users get their own system on the platform, payments run through a gateway, and a WhatsApp bot lets people find services in their own locality just by chatting. No app to install, no website to dig through. It gave me the chance to learn far more than I expected.",

      "What I built",

      "A user system. Businesses and users each have their own space on the platform, not just a static listing page.",

      "Payment gateway integration. Real payments run through PhonePe, which meant handling the whole flow properly: initiating, confirming and reconciling transactions.",

      "A WhatsApp bot for local discovery. Using Interakt's WhatsApp API, users can chat with the Gigwork bot to find services in their locality. Someone looking for a service nearby can just ask on WhatsApp, the app most people in Kerala already use every day, and get what they need right there.",

      "Hyperlocal SEO. I built category and locality pages designed to rank for searches like 'cafe in Changanassery', because local search is where this kind of platform lives or dies.",

      "The stack",

      "The frontend is Next.js (App Router) deployed on Cloudflare's Edge Runtime, with a Hono.js backend. It's fast, cheap to run and easy to scale.",

      "A bug that taught me a lot",

      "Some pages weren't getting indexed by Google. After digging in, I found the cause: html2canvas was crashing on Cloudflare's Edge Runtime, and Next.js was silently injecting noindex tags into the affected pages. Nothing looked broken on the surface, but the pages were invisible to search engines.",

      "Fixing it, along with caching issues, a missing sitemap and schema errors, taught me that SEO on a modern framework is as much an engineering problem as a content one.",

      "What I took away",

      "Gigwork pushed me well past the tutorial level. Payments, WhatsApp automation, edge deployment and technical SEO are things you only really learn by shipping them for real users.",

      "The WhatsApp bot also changed how I think about product design: meet people where they already are, instead of asking them to come to you. It reinforced something I care about, which is building complete, real products for the Kerala market rather than toy projects.",

      "You can see it live at gigwork.co.in.",
    ],
  },
  {
    slug: "devmorphix-workshop-notes",
    title: "Teaching by building: notes from Devmorphix workshops",
    date: "2025-06-15",
    excerpt:
      "What running workshops across Kerala colleges has taught me about getting students to build something real, and where we want to take it next.",
    body: [
      "Devmorphix delivers tech education and workshops to colleges across Kerala, covering areas like AI, robotics and web development. I'm one of the co-founders and I look after operations, which means I spend a lot of time both planning sessions and standing in front of a room of students.",

      "Workshops have been the strongest part of what we do. The feedback has been consistently good, and students stay engaged from start to finish. So far, all of our growth has come by word of mouth: one college tells another.",

      "Get something working early",

      "The most important thing I've learned about teaching is to get students to a working result as fast as possible. When I teach Arduino, the first exercise is making an LED blink in the Tinkercad Circuits simulator. There's no board to buy, nothing to wire up wrong and nothing to break. The moment a student changes a line of code and sees the LED respond, the subject stops being abstract.",

      "That small first win goes a long way. A student I'm mentoring started with exactly that blinking LED and is now building a remote-controlled bed-convertible wheelchair for Sasthramela. Nobody starts a project like that on day one, but everyone can start with a blink.",

      "Beyond one-off sessions",

      "A workshop is a great introduction, but a few hours only go so far. That's why we're talking to colleges about add-on courses. One example is an 80-hour certificate in full-stack web development covering HTML, CSS and JavaScript, Tailwind, React or Vue, Node.js with Express, and deployment. The aim is for students to finish with real projects they can show, not just certificates.",

      "Where we're headed",

      "Our long-term goal is to become a product company, building tools people genuinely want. Workshops, courses and client work are how we learn, earn and stay close to students while we get there.",

      "Since we've grown only through word of mouth, writing about what we do is a way to reach more colleges and more students. If you're part of a college in Kerala and want a workshop or course for your students, I'd love to hear from you.",
    ],
  },
  {
    slug: "nextjs-hono-cloudflare-notes",
    title: "Deploying Next.js with a Hono backend on Cloudflare",
    date: "2025-05-02",
    excerpt:
      "What I learned running Next.js on Cloudflare's Edge Runtime for Gigwork, including a silent bug that kept pages out of Google.",
    body: [
      "Gigwork runs on Next.js (App Router) deployed to Cloudflare's Edge Runtime, with a Hono.js backend handling the API. The setup is fast and cheap to run, but the edge is not Node, and I learned that the hard way.",

      "The edge is not Node",

      "Code that works perfectly on your machine can fail once it's deployed to the edge. The Edge Runtime supports a smaller set of APIs than Node, and many libraries quietly assume a full Node or browser environment. You often don't find out until the code runs in production.",

      "The bug that failed silently",

      "The worst example was html2canvas, a browser-only library. On Cloudflare's Edge Runtime it crashed, which caused server errors on the affected pages. Next.js then silently injected noindex tags into them. The site looked fine to me, but Google was being told not to index those pages. Nothing in the UI hinted at it.",

      "The lesson is to keep browser-only libraries out of anything that runs on the server or at the edge. Load them only in the browser, and only when the user actually needs them.",

      "What I check before shipping now",

      "After that experience I stopped trusting a page just because it renders. Now I look at the deployed page, not the local one. I view the page source and search for noindex or robots tags, check the status codes on key pages, and confirm the sitemap exists and includes every page that should rank, including the locality pages. I also validate the structured data schema, because errors there are easy to miss.",

      "Caching needs the same attention. Incremental static regeneration and caching behave differently at the edge, so I check what is actually being served rather than assuming it matches what I just deployed.",

      "Why a separate Hono backend",

      "Keeping the API in a separate Hono.js backend keeps server logic away from the frontend's edge constraints. Hono is small, fast and easy to work with, which suits an API that has to talk to payments and WhatsApp integrations.",

      "The takeaway",

      "Edge deployment is worth it for the speed and cost, but it changes what can go wrong, and the failures are often silent. The habit that has paid off most is verifying what search engines and users actually receive, not what I think I shipped.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}