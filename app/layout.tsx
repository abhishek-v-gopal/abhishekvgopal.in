import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const SITE = "https://abhishekvgopal.in";
const DESCRIPTION =
  "Abhishek V Gopal is a full-stack developer in Kerala, India, building web products for the Kerala and NRI market with Next.js, Node and Cloudflare.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Abhishek V Gopal — Full-stack developer in Kerala",
    template: "%s | Abhishek V Gopal",
  },
  description: DESCRIPTION,
  keywords: [
    "Abhishek V Gopal",
    "full-stack developer Kerala",
    "Next.js developer India",
    "freelance web developer Kerala",
    "React developer Kochi",
  ],
  authors: [{ name: "Abhishek V Gopal", url: SITE }],
  creator: "Abhishek V Gopal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Abhishek V Gopal",
    title: "Abhishek V Gopal — Full-stack developer in Kerala",
    description: DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og.png", // 1200x630 — add this file to /public
        width: 1200,
        height: 630,
        alt: "Abhishek V Gopal, full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek V Gopal — Full-stack developer in Kerala",
    description: DESCRIPTION,
    images: ["/og.png"],
    creator: "@abhishekvgopal", // update to your handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek V Gopal",
  url: SITE,
  jobTitle: "Full-stack developer",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Hono",
    "Cloudflare Workers",
    "MongoDB",
  ],
  sameAs: [
    "https://github.com/abhishekvgopal",
    "https://www.linkedin.com/in/abhishekvgopal",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${bricolage.variable} ${newsreader.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}