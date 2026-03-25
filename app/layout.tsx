import type { Metadata } from "next";
import { Roboto, Babylonica } from "next/font/google";
import localFont from "next/font/local";

import { Header, Footer } from "@/components/layout";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const babylonica = Babylonica({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const axiforma = localFont({
  src: "../public/fonts/axiforma/Axiforma-Regular.woff2",
  variable: "--font-axiforma",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Watch Brasil — Live Show Streaming",
    template: "%s | Watch Brasil",
  },
  description:
    "Watch live shows, exclusive content, and the biggest music festivals in Brazil. Premium streaming experience.",
  keywords: [
    "streaming",
    "live shows",
    "festivals",
    "music",
    "watch brasil",
    "exclusive content",
  ],
  authors: [{ name: "Watch Brasil" }],
  creator: "Watch Brasil",
  publisher: "Watch Brasil",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Watch Brasil",
    title: "Watch Brasil — Live Show Streaming",
    description:
      "Watch live shows, exclusive content, and the biggest music festivals in Brazil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch Brasil — Live Show Streaming",
    description:
      "Watch live shows, exclusive content, and the biggest music festivals in Brazil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body
        className={`${roboto.variable} ${babylonica.variable} ${axiforma.variable} antialiased`}
      >
        {/* Skip to main content - WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
