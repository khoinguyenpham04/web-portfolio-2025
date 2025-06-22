import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { Header } from "@/components/header";
import SmoothScroll from "@/components/SmoothScroll";

const sfPro = localFont({
  src: "../fonts/SF-Pro.ttf",
  display: "swap",
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.vercel.app'),
  title: "Noah Pham - Portfolio",
  description: "This is the portfolio of Noah Pham, a student and builder. Explore my projects, skills, and experiences.",
  openGraph: {
    title: "Noah Pham - Portfolio",
    description: "This is the portfolio of Noah Pham, a student and builder. Explore my projects, skills, and experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.vercel.app',
    siteName: "Noah Pham Portfolio",
    images: [
      {
        url: '/opengraph.png',
        width: 1910,
        height: 1000,
        alt: 'Noah Pham - Portfolio',
      },
    ],
    locale: 'en_UK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Noah Pham - Portfolio",
    description: "This is the portfolio of Noah Pham, a student and builder. Explore my projects, skills, and experiences.",
    images: ['/opengraph.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfPro.className}>
        <Header />
        <SmoothScroll>
          <main className="pt-20 lg:pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
