import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ntungngelalandon.com"),
  title: "Ntung Ngela Landon | AI / ML Security Researcher",
  description:
    "Research portfolio of Ntung Ngela Landon, working across AI/ML security, biometric security, fairness, robustness, and trustworthy AI.",
  keywords: [
    "Ntung Ngela Landon",
    "Cybersecurity Researcher",
    "AI Security",
    "Biometric Security",
    "Face Presentation Attack Detection",
    "Trustworthy AI",
    "Carnegie Mellon University",
  ],
  authors: [
    {
      name: "Ntung Ngela Landon",
    },
  ],
  openGraph: {
    title: "Ntung Ngela Landon | AI / ML Security Researcher",
    description:
      "Research across AI/ML security, biometric security, fairness, robustness, and trustworthy AI.",
    url: "https://ntungngelalandon.com",
    images: [{ url: "/Landon.jpg", alt: "Ntung Ngela Landon" }],
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
      <body>{children}</body>
    </html>
  );
}
