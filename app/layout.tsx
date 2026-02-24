import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Governed Enterprises",
  description:
    "A federation of purpose-built divisions, each engineered for dominance in its domain.",
  keywords: ["governance", "enterprise", "divisions", "structure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-ge-background text-ge-primary font-body">
        {children}
      </body>
    </html>
  );
}
