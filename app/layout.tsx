// "use client";
// import localFont from "next/font/local";
// import "./globals.css";
// import Sidebar from "./components/Sidebar";
// import Head from 'next/head';
// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import SplashScreen from "./components/Splashscreen";
// import timi from './assets/oluwatimilehin.jpg'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [targetPage, setTargetPage] = useState<string>(""); // Store the next route here
//   const pathname = usePathname(); // Get current pathname

//   useEffect(() => {
//     // Whenever the pathname changes, set the loading state and targetPage
//     setTargetPage(pathname); // Set the current route as the target page
//     setLoading(true);

//     // You can simulate a delay for the splash screen (optional)
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // This controls how long the splash screen stays visible (1 second)

//     // Cleanup the timeout on unmount or on route change
//     return () => clearTimeout(timeout);
//   }, [pathname]); // Runs every time the pathname changes

//   return (
//     <>
//       <Head>
//         {/* <!-- Title --> */}
//         <title>Oluwatimilehin Rotimi</title>
//         <meta name="description" content="Oluwatimilehin Rotimi is a frontend developer with a unique talent of creating innovative, aesthetic solutions in a short amount of time." />
//         <meta name="keywords" content="Oluwatimilehin, Rotimi, oluwatimilehin, rotimi" />

//         {/* <!-- Meta Tags for SEO --> */}
//         <meta name="description" content="Oluwatimilehin Rotimi is a frontend developer with a unique talent of creating innovative, aesthetic solutions in a short amount of time." />
//         <meta property="og:title" content="Oluwatimilehin Rotimi | Frontend Developer" />
//         <meta property="og:description" content="Work with Oluwatimilehin Rotimi, a trusted frontend developer with an obsession with perfection and functionality." />
//         <meta property="og:image" content="./assets/oluwatimilehin.jpg" />
//         <meta property="og:url" content="https://oluwatimilehin-eportfolio.vercel.app" />

//         {/* <!-- Favicon --> */}
//         <link rel="icon" type="image/svg+xml" href="./assets/oluwatimilehin.jpg" />
//       </Head>
//       <html lang="en">
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth bg-[#0e090d]`}
//         >
//           <SplashScreen loading={loading} targetPage={targetPage} />
//           <Sidebar />
//           <main> {children}</main>
//         </body>
//       </html>
//     </>
//   );
// }




"use client";

import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Head from "next/head";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./components/Splashscreen";

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
          content="Oluwatimilehin Rotimi is a frontend developer with a unique talent for creating innovative, aesthetic solutions in a short amount of time."
        />
        <meta
          name="keywords"
          content="Oluwatimilehin, Rotimi, frontend developer, portfolio"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Oluwatimilehin Rotimi"
        />
        <meta
          property="og:description"
          content="Work with Oluwatimilehin Rotimi, a trusted frontend developer with an obsession for perfection and functionality."
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
        <link rel="icon" type="image/jpeg" href="/favicon.ico" /> {/* Updated path */}
      </Head>
      <html lang="en">
        <head>
          <title>Oluwatimilehin Rotimi</title>
          <meta
            name="description"
            content="Oluwatimilehin Rotimi is a frontend developer with a unique talent for creating innovative, aesthetic solutions in a short amount of time."
          />
          <meta
            name="keywords"
            content="Oluwatimilehin, Rotimi, frontend developer, portfolio"
          />

          {/* Open Graph Meta Tags */}
          <meta
            property="og:title"
            content="Oluwatimilehin Rotimi"
          />
          <meta
            property="og:description"
            content="Work with Oluwatimilehin Rotimi, a trusted frontend developer with an obsession for perfection and functionality."
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
          <link rel="icon" type="image/jpeg" href="/favicon.ico" /> {/* Updated path */}
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth bg-[#0e090d]`}
        >
          <SplashScreen loading={loading} targetPage={targetPage} />
          <Sidebar />
          <main> {children}</main>
        </body>
      </html >
    </>
  );
}
