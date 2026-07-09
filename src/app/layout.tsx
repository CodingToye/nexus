import type { Metadata } from "next";
import { Oxanium, Inter } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Toye | Senior Frontend Engineer",
  description: "Cyberpunk-inspired portfolio for Nick Toye.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden flex flex-col">
        <div className="fixed inset-0 -z-10">
          <div
            className="
        absolute inset-0
        bg-[url('/images/city-background.png')]
        bg-cover
        bg-center
      "
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
