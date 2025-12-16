import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import Footer from "@/components/Footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me'),
  title: {
    default: "Tran Khoi Nguyen Pham | Software Developer & Builder",
    template: "%s | Tran Khoi Nguyen Pham",
  },
  description: "Portfolio of Tran Khoi Nguyen Pham (Noah Pham) - a software developer and builder. Explore my projects, hackathon wins, and technical experiences.",
  keywords: [
    "Tran Khoi Nguyen Pham",
    "Noah Pham",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Hackathon",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Tran Khoi Nguyen Pham", url: "https://noahpham.me" }],
  creator: "Tran Khoi Nguyen Pham",
  publisher: "Tran Khoi Nguyen Pham",
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
    title: "Tran Khoi Nguyen Pham | Software Developer & Builder",
    description: "Portfolio of Tran Khoi Nguyen Pham (Noah Pham) - a software developer and builder. Explore my projects, hackathon wins, and technical experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me',
    siteName: "Tran Khoi Nguyen Pham Portfolio",
    images: [
      {
        url: '/opengraph.png',
        width: 1910,
        height: 1000,
        alt: 'Tran Khoi Nguyen Pham - Portfolio',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tran Khoi Nguyen Pham | Software Developer & Builder",
    description: "Portfolio of Tran Khoi Nguyen Pham (Noah Pham) - a software developer and builder. Explore my projects, hackathon wins, and technical experiences.",
    images: ['/opengraph.png'],
    creator: "@noahpham",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSerif.variable}`} suppressHydrationWarning>
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
