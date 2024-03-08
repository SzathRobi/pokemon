import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/src/components/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMG Pokemons!",
  description: "This is the sexiest pokemon app that has ever built",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto max-w-5xl px-4 py-16 lg:px-0`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
