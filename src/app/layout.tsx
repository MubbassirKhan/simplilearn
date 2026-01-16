import type { Metadata } from "next";
import "./globals.css";
import { Source_Serif_4 } from "next/font/google";

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif",
});


export const metadata: Metadata = {
  title: "The Skills That Matter Next | Simplilearn Dallas Round Table",
  description: "Join CHROs, CLOs, and enterprise workforce leaders for an invite-only executive roundtable on preparing your workforce and leaders for the AI era. February 20, 2026 at Chamberlain's Steak & Fish House, Dallas.",
  keywords: ["AI workforce", "leadership skills", "enterprise learning", "executive roundtable", "Simplilearn", "Dallas event"],
  openGraph: {
    title: "The Skills That Matter Next | Simplilearn Dallas Round Table",
    description: "An exclusive executive roundtable on preparing your workforce and leaders for the AI era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
