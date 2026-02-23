import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Edwin Anderson | Frontend Developer Portfolio",
    template: "%s | Edwin Anderson",
  },
  description:
    "Portfolio resmi Edwin Anderson, Frontend Developer yang berfokus pada website cepat, interaktif, dan user-friendly.",
  keywords: [
    "Edwin Anderson",
    "Frontend Developer",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
  ],
  authors: [{ name: "Edwin Anderson" }],
  creator: "Edwin Anderson",
  openGraph: {
    title: "Edwin Anderson | Frontend Developer Portfolio",
    description:
      "Eksplorasi proyek, pengalaman kerja, dan skill frontend web development milik Edwin Anderson.",
    type: "website",
    siteName: "Edwin Anderson Portfolio",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Anderson | Frontend Developer Portfolio",
    description:
      "Frontend Developer portfolio dengan fokus performa, interaksi, dan pengalaman pengguna.",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black ">
      <body
        className={`${redHatDisplay.variable} antialiased bg-black
         text-white`}
      >
        {children}
      </body>
    </html>
  );
}
