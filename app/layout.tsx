import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site, structuredData } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  creator: site.name,
  publisher: site.name,
  category: "research",
  classification: "Academic research portfolio",
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "Ntung Ngela Landon",
    "AI/ML security researcher",
    "machine learning security",
    "biometric security",
    "face presentation attack detection",
    "algorithmic fairness",
    "model robustness",
    "malware analysis",
    "trustworthy AI evaluation",
    "Carnegie Mellon University",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Ntung Ngela",
    lastName: "Landon",
    title: site.title,
    description: site.socialDescription,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    images: [{
      url: "/og-image.png",
      secureUrl: `${site.url}/og-image.png`,
      width: 1200,
      height: 630,
      type: "image/png",
      alt: site.title,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.socialDescription,
    images: [{ url: "/og-image.png", alt: site.title }],
  },
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1318" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
