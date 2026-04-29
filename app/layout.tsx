"use client";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Head from "next/head";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./components/Splashscreen";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  variable: "--font-inter",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [targetPage, setTargetPage] = useState<string>(""); // Store the next route here
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    setTargetPage(pathname); // Set the current route as the target page
    setLoading(true);

    // Optional delay for splash screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Controls how long splash screen is visible (1 second)

    // Cleanup timeout on unmount or on route change
    return () => clearTimeout(timeout);
  }, [pathname]); // Runs every time the pathname changes

  return (
    <>
      <Head>
        <title>Oluwatimilehin Rotimi</title>
        <meta
          name="description"
          content="Oluwatimilehin Rotimi is a full-stack developer with a unique talent for creating innovative, aesthetic solutions in a short amount of time."
        />
        <meta
          name="keywords"
          content="Oluwatimilehin, Rotimi, full-stack developer, portfolio"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Oluwatimilehin Rotimi" />
        <meta
          property="og:description"
          content="Work with Oluwatimilehin Rotimi, a trusted full-stack developer with an obsession for perfection and functionality."
        />
        <meta
          property="og:image"
          content="https://oluwatimilehin-eportfolio.vercel.app/favicon.ico" // Absolute URL
        />
        <meta
          property="og:url"
          content="https://oluwatimilehin-eportfolio.vercel.app"
        />
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/favicon.ico" />{" "}
        {/* Updated path */}
      </Head>
      <html lang="en">
        <head>
          <title>Oluwatimilehin Rotimi</title>
          <meta
            name="description"
            content="Oluwatimilehin Rotimi is a full-stack developer with a unique talent for creating innovative, aesthetic solutions in a short amount of time."
          />
          <meta
            name="keywords"
            content="Oluwatimilehin, Rotimi, full-stack developer, portfolio"
          />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Oluwatimilehin Rotimi" />
          <meta
            property="og:description"
            content="Work with Oluwatimilehin Rotimi, a trusted full-stack developer with an obsession for perfection and functionality."
          />
          <meta
            property="og:image"
            content="https://oluwatimilehin-eportfolio.vercel.app/favicon.ico" // Absolute URL
          />
          <meta
            property="og:url"
            content="https://oluwatimilehin-eportfolio.vercel.app"
          />

          {/* Favicon */}
          <link rel="icon" type="image/jpeg" href="/favicon.ico" />
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" /> */}
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${jakarta.className} antialiased scroll-smooth bg-[#0f1115]`}
        >
          {/* <SplashScreen loading={loading} targetPage={targetPage} /> */}
          <Sidebar />
          <main> {children}</main>
        </body>
      </html>
    </>
  );
}
