import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ServiceRequestForm from "../components/ServiceRequestForm";
import {
  FaBolt,
  FaShieldAlt,
  FaSatellite,
  FaPeopleCarry,
  FaCode,
  FaHandsHelping,
} from "react-icons/fa";

export default function Home() {
  // Modal state
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  // Impact counter
  const stats = [
    { value: "200K+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  // MODULAR + FAST: 3 condensed categories
  const categories = [
    {
      title: "Modular Power & Connectivity Kits",
      sublabel: "Electricity • Satellite Internet • Mesh Networking",
      description:
        "Stackable, plug-and-play kits that bring power and broadband online fast. Palletized, hot-swappable and field-serviceable for austere or mobile ops.",
      bullets: [
        "Mobile JOC/TOC power blocks, micro-grids, modular battery banks",
        "Starlink / VSAT broadband, handheld satcom, multi-orbit voice/data",
        "Mesh networking & remote IoT gateways with 24/7 monitoring",
      ],
      learn: [
        { href: "/services#power-mobile-joc-toc-solutions", label: "Power" },
        { href: "/services#satellite-infrastructure-connectivity", label: "Connectivity" },
      ],
      defaultService: "Power & Command Solutions",
      icons: [
        <FaBolt key="bolt" size={22} className="text-[#00b4d8]" />,
        <FaSatellite key="sat" size={20} className="text-[#00b4d8]" />,
      ],
    },
    {
      title: "Protective Ops & Rapid Response",
      sublabel: "Armed Guard • Escorts • Emergency Response",
      description:
        "Licensed protective teams with modular packages that scale. Spin-up in hours with integrated power, comms and logistics for incident response.",
      bullets: [
        "Armed escorts, site security, perimeter defense & close protection",
        "Rapid emergency mobilization across power, comms & logistics",
        "Evacuation planning, base defense, continuous operations support",
      ],
      learn: [
        { href: "/services#security-escort", label: "Security" },
        { href: "/services#emergency-response-solutions", label: "Emergency Response" },
      ],
      defaultService: "Security & Escort",
      icons: [
        <FaShieldAlt key="shield" size={22} className="text-[#00b4d8]" />,
        <FaHandsHelping key="help" size={20} className="text-[#00b4d8]" />,
      ],
    },
    {
      title: "Software & A.I. Modules",
      sublabel: "Command & Control • Automation • Analytics",
      description:
        "Composable software blocks that unify sensors, satellites and field data. Deploy to edge or cloud for real-time C2, automation and decision support.",
      bullets: [
        "Custom C2 dashboards; integrations with sensors, sat feeds & robotics",
        "Real-time mapping, telemetry and analytics for situational awareness",
        "APIs, agents & automations; edge/cloud deploys for austere ops",
      ],
      learn: [{ href: "/services#software-a-i-integration", label: "Software & AI" }],
      defaultService: "Software & A.I. Integration",
      icons: [<FaCode key="code" size={22} className="text-[#00b4d8]" />],
    },
  ] as const;

  // Close on ESC + lock scroll
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
        <title>Novator Group – Modular Solutions, Deployed Fast</title>
        <meta
          name="description"
          content="Modular power, connectivity, security and software—deployed fast for emergency and routine operations."
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
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Modular Power, Connectivity & Security — Deployed Fast
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-6 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Veteran-owned experts delivering stackable kits and software modules
            that turn on capabilities in hours—not days.
          </motion.p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/careers"
              className="px-6 py-3 bg-[#00b4d8] text-black font-semibold rounded-lg hover:bg-white transition"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#00b4d8] text-[#00b4d8] font-semibold rounded-lg hover:bg-[#00b4d8] hover:text-black transition"
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={() => {
                setSelectedService(""); // let the user choose
                setFormOpen(true);
              }}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#00b4d8] hover:text-black transition"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* 3 Modular Categories */}
      <section className="relative z-10 px-6 pb-20 pt-8 md:pt-12 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#00b4d8]/60 rounded-2xl p-6 shadow-lg transition hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                {cat.icons.map((IconEl) => IconEl)}
              </div>
              <h3 className="text-xl font-semibold text-[#00b4d8]">{cat.title}</h3>
              <p className="text-xs text-gray-400 italic mt-1">{cat.sublabel}</p>

              <p className="text-gray-300 text-sm mt-4">{cat.description}</p>
              <ul className="text-left list-disc list-inside space-y-2 text-[#adb5bd] mt-4">
                {cat.bullets.map((b) => (
                  <li key={b} className="text-sm">{b}</li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
                <div className="flex flex-wrap gap-3 text-sm">
                  {cat.learn.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-white hover:text-[#00b4d8] font-medium"
                    >
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
                  className="px-4 py-2 bg-[#00b4d8] text-black font-semibold rounded-full hover:bg-white transition"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="relative z-10 text-center overflow-hidden px-6 bg-black">
        <div
          className="relative mx-auto w-full max-w-7xl rounded-2xl overflow-hidden bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/guard.png')", aspectRatio: "16 / 9" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1b2a]/80" />
          <div className="relative h-full w-full flex items-center justify-center px-3 sm:px-6">
            <div className="max-w-7xl w-full">
              <div className="backdrop-blur-sm bg-black/25 rounded-2xl p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="px-1 sm:px-2">
                      <div className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
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

      {/* Founder */}
      <section className="relative z-10 px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-[90%] md:w-1/3 flex justify-start">
            <img
              src="/founder.png"
              alt="Founder headshot"
              className="w-full h-60 md:h-72 object-contain rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">A Message from Our Founder</h2>
            <p className="text-gray-300 leading-relaxed">
              As founder and director of operations, I built Novator Group to deliver modular
              capabilities—power, connectivity, security and software—fast. When time is critical,
              our kits and code turn on mission-ready capacity in hours.
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
