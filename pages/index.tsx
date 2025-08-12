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

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  // Design tokens
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

  // Impact counter
  const stats = [
    { value: "200K+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  // CONDENSED: 3 categories with ultra-brief copy
  const categories = [
    {
      title: "Power & Connectivity Kits",
      sub: "Electricity • Satellite Internet",
      tags: ["Micro-grids", "Starlink/VSAT", "Mesh/IoT"],
      learn: [
        { href: "/services#power-mobile-joc-toc-solutions", label: "Power" },
        { href: "/services#satellite-infrastructure-connectivity", label: "Connectivity" },
      ],
      icons: [
        <FaBolt key="bolt" size={20} className="text-[#00b4d8]" />,
        <FaSatellite key="sat" size={18} className="text-[#00b4d8]" />,
      ],
      defaultService: "Power & Command Solutions",
    },
    {
      title: "Protective Ops & Response",
      sub: "Armed Guard • Emergencies",
      tags: ["Exec/Site Security", "Maritime/Heli/UAS", "Rapid Mobilization"],
      learn: [
        { href: "/services#security-escort", label: "Security" },
        { href: "/services#emergency-response-solutions", label: "Emergency" },
      ],
      icons: [
        <FaShieldAlt key="shield" size={20} className="text-[#00b4d8]" />,
        <FaHandsHelping key="help" size={18} className="text-[#00b4d8]" />,
      ],
      defaultService: "Security & Escort",
    },
    {
      title: "Software & A.I. Modules",
      sub: "C2 • Automation • Analytics",
      tags: ["C2 Dashboards", "Telemetry/Maps", "APIs/Agents"],
      learn: [{ href: "/services#software-a-i-integration", label: "Software & AI" }],
      icons: [<FaCode key="code" size={20} className="text-[#00b4d8]" />],
      defaultService: "Software & A.I. Integration",
    },
  ] as const;

  // ESC close & lock scroll when modal open
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
    <div className="bg-[#0d1b2a] text-white min-h-screen relative font-sans">
      <Head>
        <title>Novator Group – Modular, Fast</title>
        <meta name="description" content="Modular power, connectivity, security and software—deployed fast." />
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0d1b2a]" />

        <div className={`${CONTAINER} relative z-10 px-6`}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Modular Power, Connectivity & Security — Deployed Fast
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
              onClick={() => { setSelectedService(""); setFormOpen(true); }}
              className={BTN_GHOST}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* 3 Condensed Categories */}
      <section className="relative z-10 px-6 pb-20 pt-10 md:pt-14">
        <div className={CONTAINER}>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What We Do</h2>
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
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition
                                bg-[radial-gradient(120px_60px_at_100%_0%,rgba(0,180,216,0.20),transparent_60%)]" />
                <div className="flex items-center justify-center gap-2 mb-2">
                  {cat.icons.map((n) => n)}
                </div>
                <h3 className="text-xl font-semibold text-[#00b4d8] text-center">{cat.title}</h3>
                <p className="text-xs text-gray-400 italic mt-1 text-center">{cat.sub}</p>

                {/* CHIPS instead of paragraphs/bullets */}
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
                    onClick={() => { setSelectedService(cat.defaultService); setFormOpen(true); }}
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

      {/* Impact Numbers (unchanged) */}
      <section className="relative z-10 text-center overflow-hidden px-6">
        <div className={`${CONTAINER} relative rounded-2xl overflow-hidden`} style={{ aspectRatio: "16 / 9" }}>
          <img src="/guard.png" alt="Operations" className="absolute inset-0 w-full h-full object-cover opacity-70" />
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

      {/* Founder (unchanged) */}
      <section className="relative z-10 px-6 py-16">
        <div className={CONTAINER + " flex flex-col md:flex-row items-center gap-8"}>
          <div className="flex-shrink-0 w-[90%] md:w-1/3 flex justify-start">
            <img src="/founder.png" alt="Founder headshot" className="w-full h-60 md:h-72 object-contain rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.35)]" />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-4">A Message from Our Founder</h2>
            <p className="text-gray-300 leading-relaxed">
              As founder and director of operations, I built Novator Group to deliver modular capabilities fast.
            </p>
            <p className="mt-4 text-[#00b4d8] font-semibold">– John Mills, Founder & Director of Operations</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {formOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setFormOpen(false); }}
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
