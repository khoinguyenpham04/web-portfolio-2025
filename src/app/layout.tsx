import type { Metadata } from "next";
import { Inter, Instrument_Serif, Space_Grotesk, Caveat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import Footer from "@/components/Footer";
import { Header } from "@/components/header";
import SnowfallEffect from "@/components/Snowfall";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif"
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-space-grotesk",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me'),
  title: {
    default: "Noah Pham's Portfolio",
    template: "%s | Noah Pham",
  },
  description: "Noah Pham (Nguyen Pham). Computer Science at the University of Manchester, product at Byteful, incoming at Cloudflare.",
  keywords: [
    "Noah Pham",
    "Nguyen Pham",
    "Tran Khoi Nguyen Pham",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Hackathon",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Noah Pham", url: "https://noahpham.me" }],
  creator: "Noah Pham",
  publisher: "Noah Pham",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Noah Pham's Portfolio",
    description: "Noah Pham (Nguyen Pham). Computer Science at the University of Manchester, product at Byteful, incoming at Cloudflare.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me',
    siteName: "Noah Pham's Portfolio",
    images: [
      {
        url: '/opengraph.jpg',
        width: 3820,
        height: 2000,
        alt: 'Noah Pham - Portfolio',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Noah Pham's Portfolio",
    description: "Noah Pham (Nguyen Pham). Computer Science at the University of Manchester, product at Byteful, incoming at Cloudflare.",
    images: ['/opengraph.jpg'],
    creator: "@noahpham",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me',
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${instrumentSerif.variable} ${spaceGrotesk.variable} ${caveat.variable}`} suppressHydrationWarning>
        {/* Person schema: tells search engines all these names are the same person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Noah Pham",
              alternateName: ["Nguyen Pham", "Tran Khoi Nguyen Pham"],
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://noahpham.me",
              alumniOf: { "@type": "CollegeOrUniversity", name: "University of Manchester" },
              worksFor: { "@type": "Organization", name: "Byteful" },
            }),
          }}
        />
        <SnowfallEffect />
        <Header />
        <main className="pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5D1SX1LVEY" />
    </html>
  );
}
