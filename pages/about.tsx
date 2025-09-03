// ============================
// File: pages/maintenance.tsx
// Purpose: Full-screen Maintenance page (no nav, no footer)
// ============================
import Head from "next/head";

const NAVY = "#0d1b2a";
const STEEL = "#1b263b";
const ACCENT = "#00b4d8";

export default function MaintenancePage() {
  const end = new Date(Date.now() + 2 * 60 * 60 * 1000); // optional: +2h placeholder
  const endIso = end.toISOString();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <Head>
        <title>Novator Group — Maintenance</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div
        className="w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 text-white border border-white/10"
        style={{ background: `linear-gradient(180deg, ${NAVY}, ${STEEL})` }}
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <div className="rounded-xl p-2.5" style={{ backgroundColor: `${ACCENT}22` }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 9v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Scheduled Maintenance</h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-200">
              We&rsquo;re upgrading systems to keep Novator fast, secure, and reliable. Some features are temporarily
              unavailable. Thank you for your patience.
            </p>
          </div>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 font-mono text-sm" aria-label="estimated time">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          ETA: <time dateTime={endIso}>{end.toLocaleString()}</time>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="tel:+18332919332" className="rounded-2xl px-4 py-3 bg-white/10 hover:bg-white/20 transition inline-flex items-center gap-2">
            Call Us
          </a>
          <a href="mailto:ngr@novatorgroupllc.com" className="rounded-2xl px-4 py-3 bg-white/10 hover:bg-white/20 transition inline-flex items-center gap-2">
            Email Support
          </a>
          <a href="/status" className="rounded-2xl px-4 py-3 bg-white/10 hover:bg-white/20 transition inline-flex items-center gap-2">
            Status Page
          </a>
        </div>

        <div className="px-1 sm:px-0 mt-6 text-xs text-zinc-300">
          Novator Group — Keeping communities powered, connected, and protected.
        </div>
      </div>

      <div aria-hidden className="pointer-events-none fixed inset-0" style={{
        background: `radial-gradient(800px 400px at 20% 20%, ${ACCENT}22, transparent)`
      }} />
    </div>
  );
}

// ============================
// File: middleware.ts
// Purpose: HARD maintenance — block all pages, even client-side navigations
// ============================
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isMaintenance = process.env.MAINTENANCE_MODE === "1";
  if (!isMaintenance) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // EXACT paths we still allow (no index)
  const allowedExact = new Set<string>([
    "/maintenance",
    "/robots.txt",
    "/sitemap.xml",
    "/manifest.webmanifest",
  ]);

  // Only allow specific Next internals for static assets (NOT /_next/data)
  const allowedPrefix = [
    "/_next/static", // JS/CSS chunks
    "/_next/image",  // next/image optimizer
    "/favicon", 
    "/logo",
    "/images",
    "/icons",
    "/fonts",
  ];

  // Disallow Next.js data requests explicitly (prevents client-side nav rendering other pages)
  if (pathname.startsWith("/_next/data")) {
    const url = req.nextUrl.clone();
    url.pathname = "/maintenance";
    const res = NextResponse.rewrite(url);
    res.headers.set("x-novator-maintenance", "on");
    res.headers.set("x-robots-tag", "noindex, nofollow");
    return res;
  }

  // Common public-file extensions (allow files, but exclude .json to avoid data routes)
  const fileExt = /\.(?:png|jpg|jpeg|gif|svg|ico|webp|mp4|webm|ogg|css|js|map|txt|xml|woff2?)$/i;

  const isAllowed =
    allowedExact.has(pathname) ||
    allowedPrefix.some((p) => pathname.startsWith(p)) ||
    fileExt.test(pathname);

  if (!isAllowed) {
    const url = req.nextUrl.clone();
    url.pathname = "/maintenance";
    const res = NextResponse.rewrite(url);
    res.headers.set("x-novator-maintenance", "on");
    res.headers.set("x-robots-tag", "noindex, nofollow");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

// ============================
// File: .env.local  (example)
// ============================
// MAINTENANCE_MODE=1   # redirect EVERYTHING (except maintenance + assets) to /maintenance
// MAINTENANCE_MODE=0   # normal site
