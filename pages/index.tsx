import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
      title: "Power & Connectivity On Demand",
      summary: "Deploy critical power and comms in hours with our scalable microgrids and satellite systems, ensuring uninterrupted operations in any environment.",
      highlights: ["Scalable Microgrids", "Starlink & Satphones", "Mobile Command Units"],
      learn: "/services#power-mobile-joc-toc-solutions",
      defaultService: "Power & Connectivity Solutions",
      icons: [
        <FaBolt key="bolt" size={24} className="text-[#00b4d8]" />,
        <FaSatellite key="sat" size={22} className="text-[#00b4d8]" />,
      ],
      bgImage: "/sprinter.png",
    },
    {
      title: "Elite Search, Rescue & Security",
      summary: "Protect and respond with precision using our expert teams, armed protection, and rapid boat rescue for critical missions in high-stakes scenarios.",
      highlights: ["Search & Recon", "Armed Protection", "Boat Rescue"],
      learn: "/services#security-escort",
      defaultService: "Emergency Response Package",
      icons: [
        <FaShieldAlt key="shield" size={24} className="text-[#00b4d8]" />,
        <FaHandsHelping key="help" size={22} className="text-[#00b4d8]" />,
      ],
      bgImage: "/guard.png",
    },
    {
      title: "AI-Driven Command & Control",
      summary: "Gain unmatched situational awareness with our unified dashboards and AI automation, streamlining decisions and optimizing mission outcomes.",
      highlights: ["Unified Dashboards", "AI Automation", "Smart Dispatch"],
      learn: "/services#software-a-i-integration",
      defaultService: "Software & AI Solutions",
      icons: [<FaCode key="code" size={24} className="text-[#00b4d8]" />],
      bgImage: "/AI.png",
    },
  ];

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      {/* HERO */}
      <section className="relative z-10 w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden pt-16">
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
            className="text-lg md:text-2xl mb-8 text-gray-200"
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
      {/* CATEGORIES (Redesigned Services Section) */}
      <section className="relative z-10 px-6 py-20 bg-black">
        <div className={CONTAINER}>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mission-Critical Solutions, Delivered
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                className="relative rounded-2xl p-6 flex flex-col border border-sky-400/20 shadow-2xl overflow-hidden"
                style={{ backgroundColor: STEEL }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,180,216,0.2)" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-20 opacity-10"
                >
                  <Image
                    src={cat.bgImage}
                    alt={`${cat.title} background`}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 to-transparent"
                />
                <div className="flex items-center gap-3 mb-4 z-10">
                  {cat.icons}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent z-10">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-sky-100/90 flex-1 z-10">
                  {cat.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 z-10">
                  {cat.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs text-sky-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 z-10">
                  <Link
                    href={cat.learn}
                    className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100"
                  >
                    Learn More
                  </Link>
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(cat.defaultService);
                      setFormOpen(true);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:brightness-110"
                  >
                    Get a Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* STATS STRIP */}
      <section className="relative z-10 text-center overflow-hidden px-6 pb-20">
        <div className={`${CONTAINER} relative rounded-2xl overflow-hidden max-h-[600px]`}>
          <img
            src="/guard.png"
            alt="Operations"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0d1b2a]/65" />
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
      {/* FORM MODAL: smaller, white card, internal scroll */}
      <AnimatePresence>
        {formOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
            onClick={() => setFormOpen(false)} // backdrop click closes
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, exit: { duration: 0.15 }, ease: "easeOut" }}
              className="w-full max-w-[600px] sm:max-w-[680px] md:max-w-[740px]"
              onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
            >
              <ServiceRequestForm
                compact
                defaultService={selectedService}
                onSubmitted={() => setFormOpen(false)}
                onClose={() => setFormOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}