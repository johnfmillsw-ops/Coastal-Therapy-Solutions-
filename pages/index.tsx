import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  FaBolt,
  FaShieldAlt,
  FaSatellite,
  FaCode,
  FaHandsHelping,
} from "react-icons/fa";

const ServiceRequestForm = dynamic(() => import("../components/ServiceRequestForm"), { ssr: false });

const STEEL = "#1b263b";
const CONTAINER = "max-w-7xl mx-auto";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const BTN_PRIMARY =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-[#00b4d8] text-black hover:bg-white transition";
  const BTN_OUTLINE =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";
  const BTN_GHOST =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-black hover:bg-[#00b4d8] hover:text-black transition";

  const stats = [
    { value: "200K+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  const categories = [
    {
      title: "Rapid Power & Comms Kits",
      sub: "Stackable energy & connectivity for any mission",
      tags: [
        "Scalable microgrids",
        "Diesel & solar generators",
        "Starlink & satphones",
        "Mobile command vehicles",
      ],
      learn: [
        { href: "/services#power-mobile-joc-toc-solutions", label: "Open brief" },
      ],
      icons: [
        <FaBolt key="bolt" size={20} className="text-[#00b4d8]" />,
        <FaSatellite key="sat" size={18} className="text-[#00b4d8]" />,
      ],
      defaultService: "Power & Connectivity Solutions",
    },
    {
      title: "Search & Rescue + Security",
      sub: "Search, rescue & armed protection",
      tags: ["Search & recon", "Boat rescue", "Armed guards", "Government liaison"],
      learn: [
        { href: "/services#security-escort", label: "Open brief" },
        { href: "/services#emergency-response-solutions", label: "Open brief" },
      ],
      icons: [
        <FaShieldAlt key="shield" size={20} className="text-[#00b4d8]" />,
        <FaHandsHelping key="help" size={18} className="text-[#00b4d8]" />,
      ],
      defaultService: "Emergency Response Package",
    },
    {
      title: "Command Dashboards & AI Tools",
      sub: "Situational awareness & smart automation",
      tags: [
        "Unified dashboards",
        "Smart dispatch",
        "Data analytics",
        "Workflow automation",
      ],
      learn: [{ href: "/services#software-a-i-integration", label: "Open brief" }],
      icons: [<FaCode key="code" size={20} className="text-[#00b4d8]" />],
      defaultService: "Software & AI Solutions",
    },
  ] as const;

  useEffect(() => {
    if (!formOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFormOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  return (
    <div className="bg-black text-white min-h-screen relative font-sans">
      <Head>
        <title>Novator Group – Modular, Fast</title>
        <meta
          name="description"
          content="Modular power, connectivity, security and software—deployed fast."
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
      <section className="relative z-10 w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center 15%" }}
        >
          <source src="/testv.webm" type="video/webm" />
          <source src="/testv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black"></div>
        <div className={`${CONTAINER} relative z-10 px-6`}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Modular Power, Connectivity &amp; Security — Deployed Fast
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-6 text-gray-200"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Stackable kits and software that turn on capability in hours—not days.
          </motion.p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/careers" className={BTN_PRIMARY}>
              Careers
            </Link>
            <Link href="/contact" className={BTN_OUTLINE}>
              Contact Us
            </Link>
            <motion.button
              type="button"
              onClick={() => {
                setSelectedService("");
                setFormOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={BTN_GHOST}
            >
              Request a Quote
            </motion.button>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 pb-20 pt-10 md:pt-14 bg-black">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full rounded-3xl p-5 text-left shadow-xl card cursor-pointer"
                style={{ backgroundColor: STEEL }}
                onClick={() => {
                  window.location.href = cat.learn[0].href;
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                  }}
                ></div>
                <div className="flex items-center justify-center gap-2 mb-2 text-white">
                  {cat.icons.map((n) => n)}
                </div>
                <h3 className="text-lg font-semibold text-white text-center">
                  {cat.title}
                </h3>
                <p className="mt-0.5 text-sm text-white/85 text-center">{cat.sub}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-2 py-0.5 text-[11px] tracking-wide text-sky-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3 text-sm">
                    {cat.learn.map((l) => (
                      <span key={l.href} className="text-sky-200/90">
                        {l.label}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedService(cat.defaultService);
                      setFormOpen(true);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative z-10 text-center overflow-hidden px-6">
        <div
          className={`${CONTAINER} relative rounded-2xl overflow-hidden`}
          style={{ aspectRatio: "16 / 9" }}
        >
          <img
            src="/guard.png"
            alt="Operations"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1b2a]/85"></div>
          <div className="relative h-full w-full flex items-center justify-center px-3 sm:px-6">
            <div className="w-full">
              <div className="backdrop-blur-sm bg-black/25 rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="px-1 sm:px-2">
                      <div className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                        {value}
                      </div>
                      <div className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-200 mt-1 leading-snug">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {formOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 overflow-hidden"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setFormOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, exit: { duration: 0.15 }, ease: "easeOut" }}
              className="relative w-full max-w-[90vw] sm:max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d1b2a] p-4 sm:p-6 shadow-2xl"
            >
              <button
                aria-label="Close form"
                onClick={() => setFormOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20 z-10"
              >
                ✕
              </button>
              <ServiceRequestForm
                compact
                defaultService={selectedService}
                onSubmitted={() => setFormOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}