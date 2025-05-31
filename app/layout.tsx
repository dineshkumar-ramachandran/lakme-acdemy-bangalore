import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Lakmé Academy Bangalore courses in cosmetology, makeup, hair-care, nail art & more",
  description:
    "Leading beauty academy in Bangalore offering professional courses in cosmetology, makeup artistry, hair care, nail art and more. Join Lakmé Academy for world-class beauty education.",
  generator: "v0.dev",
  icons: {
    icon: "https://lakmeacademybangalore.in/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
