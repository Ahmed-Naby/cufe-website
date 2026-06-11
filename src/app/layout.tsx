import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Faculty of Engineering — Cairo University",
    template: "%s | Faculty of Engineering — Cairo University",
  },
  description:
    "The Faculty of Engineering at Cairo University is Egypt's premier engineering institution, shaping the nation's engineers since 1816 across 16 specialized departments.",
  metadataBase: new URL("https://eng.cu.edu.eg"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-white focus:rounded-button focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
