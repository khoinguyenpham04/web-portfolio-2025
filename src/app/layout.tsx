import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";

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
  title: "Noah Pham - Portfolio",
  description: "This is the portfolio of Noah Pham, a student and builder. Explore my projects, skills, and experiences.",
  openGraph: {
    title: "Noah Pham - Portfolio",
    description: "This is the portfolio of Noah Pham, a student and builder. Explore my projects, skills, and experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me',
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} ${instrumentSerif.variable}`}>
        <Header />
          <main className="pt-20 lg:pt-24">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
