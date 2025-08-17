// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import { FaBolt, FaShieldAlt, FaLifeRing, FaCode } from "react-icons/fa";

/** ======= Constants / Styles ======= */
const CONTAINER = "max-w-7xl mx-auto";
const NAVY = "#0d1b2a";
const STEEL = "#1b263b";

const BTN_SOLID =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30";
const BTN_OUTLINE =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";

/** ======= Dynamic Imports ======= */
const ServiceRequestForm = dynamic(() => import("../components/ServiceRequestForm"), { ssr: false });

/** ======= Types ======= */
type Card = {
  title: string;
  sub: string;
  summary: string;
  icon: ReactNode;
  bgImage: string; // path in /public
  learn: string;
  defaultService: string;
};

type Vehicle = {
  slug: "sprinter" | "cybertruck" | "f150";
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  image: string;
};

/** ======= Content ======= */
const SERVICE_CARDS: Card[] = [
  {
    title: "Power & Communications",
    sub: "Restore critical power and links fast.",
    summary:
      "Micro-grids, satellite backhaul, and field networking that bring sites online when infrastructure is down.",
    icon: <FaBolt size={28} className="text-[#00b4d8]" />,
    bgImage: "/sprinter.png",
    learn: "/services#power-comms",
    defaultService: "Power & Connectivity Solutions",
  },
  {
    title: "Protective Operations & Site Security",
    sub: "Stabilize, secure, and control access.",
    summary:
      "Licensed protective teams, access control, and movement planning for people and assets in dynamic environments.",
    icon: <FaShieldAlt size={28} className="text-[#00b4d8]" />,
    bgImage: "/guard.png",
    learn: "/services#protective-ops",
    defaultService: "Emergency Response Package",
  },
  {
    title: "Command Dashboards & AI Tools",
    sub: "See the field. Decide faster.",
    summary:
      "Live maps, tasking, and AI-assisted reporting that fuse drone, team, and sensor inputs into one operational picture.",
    icon: <FaCode size={28} className="text-[#00b4d8]" />,
    bgImage: "/AI.png",
    learn: "/services#software-ai",
    defaultService: "Software & AI Solutions",
  },
  {
    title: "Emergency Response Solutions",
    sub: "End-to-end incident support when it matters.",
    summary:
      "From first-in assessments to sustained presence: teams, gear, and mobile command centers to keep operations moving.",
    icon: <FaLifeRing size={28} className="text-[#00b4d8]" />,
    bgImage: "/cybertruck.jpg",
    learn: "/services#emergency-response",
    defaultService: "Emergency Response Package",
  },
];

const FLEET: Vehicle[] = [
  {
    slug: "sprinter",
    name: "Mercedes Sprinter — HO Diesel, AWD",
    role: "Mobile Command Unit",
    summary:
      "AWD platform outfitted for forward command with modular power, satellite comms, and crew rest.",
    highlights: ["AWD", "Modular power", "SatCom", "Command station"],
    image: "/sprinter.png",
  },
  {
    slug: "cybertruck",
    name: "Cybertruck Platform — Power + SatCom",
    role: "Rapid Response / Modular Command & Shelter",
    summary:
      "Electric platform with onboard power, satellite comms, and fast-deploy canopy for pop-up command.",
    highlights: ["Onboard power", "SatCom", "Modular shelter", "Command workstation"],
    image: "/cybertruck.jpg",
  },
  {
    slug: "f150",
    name: "F-150 (2-Door) — Trail-Ready",
    role: "Scout / Utility Command Platform",
    summary:
      "Agile truck with power, satcom, and packable shelter to extend command into hard-to-reach zones.",
    highlights: ["All-terrain", "Field power", "SatCom", "Packable shelter"],
    image: "/truck.png",
  },
];

const VEHICLE_USECASES: Record<Vehicle["slug"], string[]> = {
  sprinter: [
    "Forward incident command & dispatch",
    "Damage assessment & situational awareness",
    "Perimeter/security coordination",
  ],
  cybertruck: [
    "Neighborhood command & client liaison",
    "Utility/critical-site check-ins",
    "Short-cycle tasking between sites",
  ],
  f150: [
    "Route clearance & access validation",
    "Perimeter checks & status sweeps",
    "Supply shuttles and spot-task response",
  ],
};

const Badge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-2.5 py-1 text-[11px] tracking-wide text-sky-200">
    {label}
  </span>
);

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("");
  const [openVehicle, setOpenVehicle] = useState<Vehicle | null>(null);

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

  const stats = [
    { value: "200K+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative font-sans">
      <Head>
        <title>Novator Group — Deploy. Protect. Command.</title>
        <meta
          name="description"
          content="Modular power, connectivity, protective operations, and AI command tools—deployed fast."
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
            background: ${NAVY} !important;
            margin-top: 0 !important;
            position: relative !important;
            z-index: 0 !important;
          }
        `}</style>
      </Head>

      {/* ===== HERO with video + CTAs + COUNTER ===== */}
      <section className="relative z-10 w-full h-[92vh] flex flex-col justify-center items-center text-center overflow-hidden pt-16">
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
            transition={{ duration: 0.8 }}
          >
            Modular Power, Connectivity, Security &amp; AI — Fast
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8 text-gray-200"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Two paths. Same outcome: uptime and control—anywhere.
          </motion.p>

          {/* CTAs */}
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link href="/careers" className={BTN_OUTLINE}>
              Careers
            </Link>
            <Link href="/contact" className={BTN_OUTLINE}>
              Contact
            </Link>
            <motion.button
              type="button"
              onClick={() => {
                setDefaultService("");
                setFormOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={BTN_SOLID}
            >
              Request a Quote
            </motion.button>
          </div>

          {/* COUNTER under CTAs */}
          <div className="mt-10 flex justify-center">
            <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 sm:px-8 py-5 border border-white/10 inline-block">
              <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                      {value}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-gray-200 mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLEET (1x3 grid) ===== */}
      <section className="relative z-10 px-6 pt-10 pb-6 bg-black">
        <div className={`${CONTAINER}`}>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Fleet
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET.map((v, idx) => (
              <motion.button
                key={v.slug}
                onClick={() => setOpenVehicle(v)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-sky-400"
                style={{ backgroundColor: STEEL }}
              >
                {/* Background texture */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.38)), url(${v.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.35,
                  }}
                />
                {/* Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(900px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(700px 260px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                  }}
                />
                <div className="p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white">{v.name}</h3>
                      <div className="mt-0.5 text-sm text-sky-200/80">{v.role}</div>
                    </div>
                    <div className="ml-2 shrink-0">
                      <Image
                        src={v.image}
                        alt={`${v.name} thumbnail`}
                        width={44}
                        height={44}
                        unoptimized
                        className="h-11 w-11 rounded-2xl object-cover border border-white/10"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-sky-100/90 flex-1">{v.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {v.highlights.map((h) => (
                      <Badge key={h} label={h} />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-sm">
                    <span className="text-sky-200/90">Open brief</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES (2x2 grid) ===== */}
      <section className="relative z-10 px-6 py-16 bg-black">
        <div className={`${CONTAINER}`}>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mission Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_CARDS.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col"
                style={{ backgroundColor: STEEL }}
              >
                {/* Background image + overlay */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.38)), url(${svc.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.35,
                  }}
                />
                {/* Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(900px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(700px 260px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                  }}
                />

                <div className="p-6 md:p-7 flex flex-col h-full">
                  {/* Icon + Titles */}
                  <div className="flex items-center gap-3">
                    {svc.icon}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{svc.title}</h3>
                      <p className="text-sky-200/80 text-sm">{svc.sub}</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-sky-100/90 flex-1">{svc.summary}</p>

                  {/* Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.title === "Power & Communications" && (
                      <>
                        <Badge label="Diesel + Solar" />
                        <Badge label="Battery stacks" />
                        <Badge label="Starlink & SatCom" />
                        <Badge label="Micro-grid" />
                      </>
                    )}
                    {svc.title === "Protective Operations & Site Security" && (
                      <>
                        <Badge label="Licensed teams" />
                        <Badge label="Perimeter control" />
                        <Badge label="Movement control" />
                        <Badge label="Low-signature ops" />
                      </>
                    )}
                    {svc.title === "Command Dashboards & AI Tools" && (
                      <>
                        <Badge label="Dashboards" />
                        <Badge label="Ops reporting" />
                        <Badge label="AI copilots" />
                        <Badge label="API integrations" />
                      </>
                    )}
                    {svc.title === "Emergency Response Solutions" && (
                      <>
                        <Badge label="ICS support" />
                        <Badge label="SAR & Boats" />
                        <Badge label="Logistics" />
                        <Badge label="Comms restoration" />
                      </>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-4">
                    <Link
                      href={svc.learn}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100"
                    >
                      Learn More
                    </Link>
                    <motion.button
                      type="button"
                      onClick={() => {
                        setDefaultService(svc.defaultService);
                        setFormOpen(true);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:brightness-110"
                    >
                      Get a Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VEHICLE BRIEF MODAL ===== */}
      <AnimatePresence>
        {openVehicle && (
          <div
            className="fixed inset-0 z-[110] grid place-items-center bg-black/70 p-4"
            onClick={() => setOpenVehicle(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0d1b2a] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenVehicle(null)}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              >
                ✕
              </button>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{openVehicle.name}</h3>
                  <div className="mt-0.5 text-sm text-sky-200/80">{openVehicle.role}</div>
                </div>
              </div>

              <div className="mt-5 relative h-40 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={openVehicle.image}
                  alt={`${openVehicle.name} banner`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/40" />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                    Highlights
                  </div>
                  <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                    {openVehicle.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                    Summary
                  </div>
                  <p className="text-[15px] leading-relaxed text-sky-100/90">{openVehicle.summary}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                  Example missions
                </div>
                <div className="flex flex-wrap gap-2">
                  {VEHICLE_USECASES[openVehicle.slug].map((u) => (
                    <span key={u} className="rounded-full bg-white/5 px-3 py-1 text-sm text-sky-100">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`/fleet`}
                  className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100"
                >
                  View full fleet
                </Link>
                <Link
                  href="/services"
                  className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100"
                >
                  See compatible services
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ===== QUOTE FORM MODAL ===== */}
      <AnimatePresence>
        {formOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 sm:p-6"
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-[600px] sm:max-w-[680px] md:max-w-[740px]"
              onClick={(e) => e.stopPropagation()}
            >
              <ServiceRequestForm
                compact
                defaultService={defaultService}
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
