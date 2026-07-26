import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IndiAssure — Insurance for India's Small Shops",
  description:
    "Simple fire, theft, and disaster protection for small Indian shop owners. No tax papers needed.",
  openGraph: {
    title: "IndiAssure — Insurance for India's Small Shops",
    description:
      "Simple fire, theft, and disaster protection for small Indian shop owners. No tax papers needed.",
    url: "https://indiassure.com",
    siteName: "IndiAssure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
