import type { Metadata, Viewport } from "next";
import { Oxanium, Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050b12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${inter.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-dvh overflow-x-hidden bg-[#050b12] antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="site-background absolute inset-0 bg-[#050b12]" />
          <div
            className="
        absolute inset-0
        bg-black/50
      "
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <>{children}</>
      </body>
    </html>
  );
}
