import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glimpshot",
  description: "A short video app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
