// pages/service-request.tsx
import Head from "next/head";
import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import ServiceRequestForm from "../components/ServiceRequestForm";

const mapInterestToService = (interest?: string): string => {
  if (!interest) return "";
  const key = String(interest).toLowerCase();

  // Vehicle slugs → sensible defaults
  if (["sprinter", "cybertruck"].includes(key)) return "Power & Connectivity Solutions";
  if (["f150", "f-150"].includes(key)) return "Emergency Response Package";

  // Service-ish slugs → map to options
  if (["power", "comms", "connectivity"].includes(key)) return "Power & Connectivity Solutions";
  if (["software", "ai"].includes(key)) return "Software & AI Solutions";
  if (["emergency", "response", "emergency-response"].includes(key)) return "Emergency Response Package";

  return "";
};

export default function ServiceRequestPage() {
  const router = useRouter();
  const { service, interest } = router.query;

  const defaultService = useMemo(() => {
    if (typeof service === "string" && service.trim()) return service;
    if (typeof interest === "string" && interest.trim()) return mapInterestToService(interest);
    return "";
  }, [service, interest]);

  // Close on ESC for a true "popup" feel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <>
      <Head>
        <title>Request a Quote — Novator Group</title>
        <meta
          name="description"
          content="Tell us about your mission. Request a quote for power, connectivity, protective operations, software & AI, or mobile command support."
        />
        <style>{`
          html, body, #__next, #__next > div, #__next > div > div {
            margin: 0 !important;
            padding: 0 !important;
            background: black !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-x: hidden !important;
          }
          footer, .footer {
            background: #0d1b2a !important;
            margin-top: 0 !important;
            position: relative !important;
            z-index: 0 !important;
          }
        `}</style>
      </Head>

      {/* Fullscreen overlay + centered, RESPONSIVE WHITE form */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
        onClick={() => router.back()} // click backdrop to close
      >
        {/* Wrapper sets a comfortable max width on desktop and keeps mobile friendly */}
        <div
          className="w-full max-w-[600px] sm:max-w-[680px] md:max-w-[740px]"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* ServiceRequestForm already limits height to 90vh and scrolls internally */}
          <ServiceRequestForm defaultService={defaultService} compact onClose={() => router.back()} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
