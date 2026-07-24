import type { Metadata } from "next";
import { Cormorant_Garamond, Ma_Shan_Zheng, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const script = Ma_Shan_Zheng({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const body = Noto_Serif_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "惠宝，生日快乐",
  description: "写给王夕惠的生日祝福 · 惠惠 / 惠宝",
  openGraph: {
    title: "惠宝，生日快乐",
    description: "写给王夕惠的生日祝福",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${display.variable} ${script.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
