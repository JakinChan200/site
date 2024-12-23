import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Providers } from './providers'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Jakin Chan",
  description: "A portfolio website and playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}>{children}</body>*/}
      <body className={outfit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
