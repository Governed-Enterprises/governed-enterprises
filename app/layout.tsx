import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://governedenterprises.com"),
  title: "Governed Enterprises | Reclaim Authority Over Your Life",
  description:
    "Governed Enterprises builds tools, services, and systems that serve people instead of exploiting them — starting with legal, expanding as the mission demands.",
  keywords:
    "Governed Enterprises, Plumbline Legal, Terry Taylor, holding company, legal services",
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Governed Enterprises | Reclaim Authority Over Your Life",
    description:
      "Governed Enterprises builds tools, services, and systems that serve people instead of exploiting them — starting with legal, expanding as the mission demands.",
    siteName: "Governed Enterprises",
    type: "website",
    url: "https://governedenterprises.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governed Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governed Enterprises",
    description:
      "Helping people reclaim governance over their own lives.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Governed Enterprises",
  url: "https://governedenterprises.com",
  description:
    "Governed Enterprises builds tools, services, and systems that serve people instead of exploiting them — starting with legal, expanding as the mission demands.",
  founder: {
    "@type": "Person",
    name: "Terry Taylor",
  },
  foundingDate: "2026",
  foundingLocation: {
    "@type": "Place",
    address: "Eau Claire, Wisconsin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-ge-background text-ge-primary font-body">
        {children}
      </body>
    </html>
  );
}
