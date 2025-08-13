import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ServiceRequestForm from "../components/ServiceRequestForm";
import {
  FaBolt,
  FaShieldAlt,
  FaSatellite,
  FaCode,
  FaHandsHelping,
} from "react-icons/fa";

/**
 * Home page preserving the original layout and styling from the NGWS site,
 * but including the founder's photo and message within the page.
 */
export default function Home() {
  // Modal state for the request form
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  // Design tokens reused throughout the page for consistency
  const CONTAINER = "max-w-7xl mx-auto";
  const CARD =
    "relative overflow-hidden rounded-2xl p-6 bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#00b4d8]/30 shadow-[0_0_30px_rgba(0,180,216,0.12)]";
  const CARD_HOVER =
    "hover:border-[#00b4d8]/60 hover:shadow-[0_0_40px_rgba(0,180,216,0.25)]";
  const BADGE =
    "inline-flex items-center rounded-full border border-[#00b4d8]/40 px-3 py-1 text-xs text-[#cdeffd] bg-[#0d1b2a]/60";
  const BTN_PRIMARY =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-[#00b4d8] text-black hover:bg-white transition";
  const BTN_OUTLINE =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";
  const BTN_GHOST =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-black hover:bg-[#00b4d8] hover:text-black transition";

  // Impact counter data displayed below the categories
  const stats = [
    { value: "200K+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  // Service categories summarised on the home page
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
        { href: "/services#power-mobile-joc-toc-solutions", label: "Power & Connectivity" },
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
        { href: "/services#security-escort", label: "Security" },
        { href: "/services#emergency-response-solutions", label: "Emergency" },
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
      learn: [
        { href: "/services#software-a-i-integration", label: "Software & AI" },
      ],
      icons: [
        <FaCode key="code" size={20} className="text-[#00b4d8]" />,
      ],
      defaultService: "Software & AI Solutions",
    },
  ] as const;

  // Close modal on ESC and lock scroll when open
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
      </Head>

      {/* Hero */}
      <section className="relative z-10 w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center 15%" }}
        >
          <source src="/testv.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />

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
            <Link href="/careers" className={BTN_PRIMARY}>Careers</Link>
            <Link href="/contact" className={BTN_OUTLINE}>Contact Us</Link>
            <button
              type="button"
              onClick={() => {
                setSelectedService("");
                setFormOpen(true);
              }}
              className={BTN_GHOST}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="relative z-10 px-6 pb-20 pt-10 md:pt-14 bg-black">
        <div className={CONTAINER}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                className={`${CARD} ${CARD_HOVER} group`}
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(120px_60px_at_100%_0%,rgba(0,180,216,0.20),transparent_60%)]" />
                <div className="flex items-center justify-center gap-2 mb-2">
                  {cat.icons.map((n) => n)}
                </div>
                <h3 className="text-xl font-semibold text-[#00b4d8] text-center">{cat.title}</h3>
                <p className="text-xs text-gray-400 italic mt-1 text-center">{cat.sub}</p>
                {/* Chips */}
                <div className="mt-5 flex flex-wrap gap-2 justify-center">
                  {cat.tags.map((t) => (
                    <span key={t} className={BADGE}>{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3 text-sm">
                    {cat.learn.map((l) => (
                      <Link key={l.href} href={l.href} className="text-white hover:text-[#00b4d8] font-medium">
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(cat.defaultService);
                      setFormOpen(true);
                    }}
                    className="rounded-full px-4 py-2 text-sm font-semibold bg-[#00b4d8] text-black hover:bg-white transition"
                  >
                    Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="relative z-10 text-center overflow-hidden px-6">
        <div
          className={`${CONTAINER} relative rounded-2xl overflow-hidden`}
          style={{ aspectRatio: "16 / 9" }}
        >
          <img
            src="/guard.png"
            alt="Operations"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1b2a]/85" />
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

      {/* Modal with ServiceRequestForm */}
      {formOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setFormOpen(false);
          }}
        >
          <div className="relative w-full max-w-3xl">
            <button
              aria-label="Close form"
              onClick={() => setFormOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            >
              ✕
            </button>
            <ServiceRequestForm
              compact
              defaultService={selectedService}
              onSubmitted={() => setFormOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
