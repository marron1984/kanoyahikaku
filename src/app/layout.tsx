import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Nara Stays — Premium Luxury Stays in Nara, Japan",
    template: "%s | Nara Stays",
  },
  description: siteConfig.siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: "Nara Stays — Premium Luxury Stays in Nara, Japan",
    description: siteConfig.siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nara Stays — Premium Luxury Stays in Nara, Japan",
    description: siteConfig.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFJZ64FXBZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GFJZ64FXBZ');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
