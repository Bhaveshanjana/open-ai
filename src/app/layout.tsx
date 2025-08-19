import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteconfig";
import Img from "@/app/image.png";

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
  },
  keywords: siteConfig.keywords,
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  authors: [{ name: siteConfig.authors }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: Img.src,
        width: Img.width,
        height: Img.height,
        alt: siteConfig.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    images: [
      {
        url: Img.src,
        width: Img.width,
        height: Img.height,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
