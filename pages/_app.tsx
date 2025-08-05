import type { AppProps } from "next/app";
import "../globals.css";
// Import landing CSS globally. Next.js only allows global CSS to be imported
// in this custom App component. This file defines styles used by the home
// page (index.tsx), such as the fade‑out overlay and scroll animation. See
// https://nextjs.org/docs/messages/css-global for details.
import "../styles/landing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Custom App component for the pages router. This wraps all pages with
 * the global Navbar and Footer and imports the global styles. Using
 * this file ensures consistent layout and styles across the site when
 * deploying to platforms like Netlify.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}