import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ntung Ngela Landon | Cybersecurity Researcher",
  description:
    "Academic portfolio of Ntung Ngela Landon, a cybersecurity researcher working at the intersection of AI security, biometric security, trustworthy AI, and cybersecurity.",
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
    title: "Ntung Ngela Landon | Cybersecurity Researcher",
    description:
      "Cybersecurity researcher working at the intersection of AI security, biometric security, and trustworthy AI.",
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