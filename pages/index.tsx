// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/** ======= Constants / Styles ======= */
const CONTAINER = "max-w-7xl mx-auto";
const STEEL = "#1b263b";
const BTN_SOLID =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30";
const BTN_OUTLINE =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";

/** Your actual number */
const CALL_HREF = "tel:+18332919332";

/** ======= Dynamic Imports ======= */
const ServiceRequestForm = dynamic(() => import("../components/ServiceRequestForm"), { ssr: false });

/** ======= Types ======= */
type ServiceCard = {
  title: string;
  sub: string;
  summary: string;
  thumb: string;
  bgImage: string; // kept in data but no longer used as background
  defaultService: string;
  detail: {
    tags: string[];
    sections: { heading: string; bullets: string[] }[];
    useCases?: string[];
  };
};
type Vehicle = {
  slug: "sprinter" | "cybertruck" | "f150";
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  image: string; // kept in data but no longer used as background
};

/** ======= Content (unchanged) ======= */
const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Power & Communications",
    sub: "Restore critical power and links fast.",
    summary:
      "Micro-grids, satellite backhaul, and field networking that bring sites online when infrastructure is down.",
    thumb: "/sprinter.png",
    bgImage: "/sprinter.png",
    defaultService: "Power & Connectivity Solutions",
    detail: {
      tags: ["Diesel + Solar", "Battery stacks", "Starlink & SatCom", "Micro-grid"],
      sections: [
        {
          heading: "What we deliver",
          bullets: [
            "Generator + battery + solar stacks for clean, quiet runtime.",
            "Starlink/SatCom backhaul, mesh radios, and rapid-deploy Wi-Fi.",
            "Lighting, network gear, and power distribution for teams.",
            "Mobile command staging (Sprinter AWD / Cybertruck).",
            "Compact command workstation for planning and brief-backs.",
          ],
        },
      ],
      useCases: ["Disaster base-camp startup", "Critical-site power & comms", "Neighborhood command nodes"],
    },
  },
  {
    title: "Protective Operations & Site Security",
    sub: "Stabilize, secure, and control access.",
    summary:
      "Licensed protective teams, access control, and movement planning for people and assets in dynamic environments.",
    thumb: "/guard.png",
    bgImage: "/guard.png",
    defaultService: "Emergency Response Package",
    detail: {
      tags: ["Licensed teams", "Perimeter control", "Movement control", "Low-signature ops"],
      sections: [
        {
          heading: "Scope",
          bullets: [
            "Perimeter & access control with low-signature posture.",
            "Client/VIP movement control; secure escorts.",
            "Property checks with photo/video proofs and status reporting.",
            "Integrates with mobile command centers for real-time comms.",
            "F-150 scout trucks; Sprinter HQ for forward command.",
          ],
        },
      ],
      useCases: ["Event/VIP security", "Construction & utility site control", "Multi-site patrol"],
    },
  },
  {
    title: "Command Dashboards & AI Tools",
    sub: "See the field. Decide faster.",
    summary:
      "Live maps, tasking, and AI-assisted reporting that fuse drone, team, and sensor inputs into one operational picture.",
    thumb: "/AI.png",
    bgImage: "/AI.png",
    defaultService: "Software & AI Solutions",
    detail: {
      tags: ["Dashboards", "Ops reporting", "AI copilots", "API integrations"],
      sections: [
        {
          heading: "Ops picture",
          bullets: [
            "Real-time overlays (UAS, teams, sensors) with status trails.",
            "Ops tasking, checklists, and structured after-action reports.",
            "AI copilots for intel summaries and client-ready brief-backs.",
            "API integrations with radios, cameras, and trackers.",
            "Portable ops rack fits inside mobile command vehicles.",
          ],
        },
      ],
      useCases: ["Executive situational awareness", "Dispatch & tasking", "After-action rollups"],
    },
  },
  {
    title: "Emergency Response Solutions",
    sub: "End-to-end incident support when it matters.",
    summary:
      "From first-in assessments to sustained presence: teams, gear, and mobile command centers to keep operations moving.",
    thumb: "/cybertruck.jpg",
    bgImage: "/cybertruck.jpg",
    defaultService: "Emergency Response Package",
    detail: {
      tags: ["ICS support", "SAR & Boats", "Logistics", "Comms restoration"],
      sections: [
        {
          heading: "Capabilities",
          bullets: [
            "ICS-aligned incident command anchored by mobile command vehicles.",
            "Search & rescue with high-water/boat capability; route validation.",
            "Damage assessment, perimeter/security, and volunteer/vendor integration.",
            "Logistics & supply shuttles; client property checks with proofs.",
            "Comms restoration: satellite, mesh, and field networking.",
          ],
        },
      ],
      useCases: ["Hurricane/wildfire response", "Township support", "Private infrastructure ops"],
    },
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

/** ======= Descriptor (non-button) ======= */
const Descriptor = ({ label }: { label: string }) => (
  <span className="inline-flex items-center text-[12px] text-sky-200/85">
    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400/70" />
    {label}
  </span>
);

// Map vehicles to a sensible default service for the quote form
const VEHICLE_DEFAULT_SERVICE: Record<Vehicle["slug"], string> = {
  sprinter: "Power & Connectivity Solutions",
  cybertruck: "Power & Connectivity Solutions",
  f150: "Power & Connectivity Solutions",
};

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("");

  // Inline expand/collapse state
  const [expandedVehicles, setExpandedVehicles] = useState<Record<Vehicle["slug"], boolean>>({
    sprinter: false,
    cybertruck: false,
    f150: false,
  });
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  const serviceKeys = useMemo(() => SERVICE_CARDS.map((s) => s.title), []);
  useEffect(() => {
    setExpandedServices((prev) => {
      const next: Record<string, boolean> = { ...prev };
      for (const key of serviceKeys) if (next[key] === undefined) next[key] = false;
      return next;
    });
  }, [serviceKeys]);

  // Only lock scroll for the quote modal
  useEffect(() => {
    document.body.style.overflow = formOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  const toggleVehicle = (slug: Vehicle["slug"]) =>
    setExpandedVehicles((s) => ({ ...s, [slug]: !s[slug] }));

  const toggleService = (title: string) =>
    setExpandedServices((s) => ({ ...s, [title]: !s[title] }));

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
          html { scroll-behavior: smooth; }
        `}</style>
      </Head>

      {/* ===== HERO ===== */}
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
          <source src="/v3.mp4" type="video/mp4" />
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
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link href="/careers" className={BTN_OUTLINE}>
              Join Us
            </Link>

            {/* Primary CTA -> Call Us (only here) */}
            <motion.a
              href={CALL_HREF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={BTN_SOLID}
            >
              Call Us
            </motion.a>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 sm:px-8 py-5 border border-white/10 inline-block">
              <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">{value}</div>
                    <div className="text-xs md:text-sm font-bold text-gray-200 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLEET (INLINE EXPAND, NO BG IMAGE) ===== */}
      <section id="fleet" className="relative z-10 px-6 pt-10 pb-6 bg-black scroll-mt-28 md:scroll-mt-32">
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
            {FLEET.map((v, idx) => {
              const open = expandedVehicles[v.slug];
              return (
                <motion.div
                  key={v.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl flex flex-col text-left"
                  style={{ backgroundColor: STEEL }}
                >
                  {/* Header (solid background, small photo at top-right) */}
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => toggleVehicle(v.slug)}
                    className="w-full text-left p-6 md:p-7"
                  >
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
                    <p className="mt-4 text-sm text-sky-100/90">{v.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {v.highlights.map((h) => (
                        <Descriptor key={h} label={h} />
                      ))}
                    </div>
                  </button>

                  {/* Inline expandable details */}
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="fleet-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-6 pt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">Highlights</div>
                              <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                                {v.highlights.map((h) => (
                                  <li key={h} className="flex gap-2">
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                                    <span>{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">Summary</div>
                              <p className="text-[15px] leading-relaxed text-sky-100/90">{v.summary}</p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                              Example missions
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {VEHICLE_USECASES[v.slug].map((u) => (
                                <Descriptor key={u} label={u} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Single footer: ONE toggle + ONE Request Quote */}
                  <div className="px-6 pb-6 pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => toggleVehicle(v.slug)}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[80px] text-left"
                    >
                      {open ? "Hide" : "More Info"}
                    </button>
                    <motion.button
                      type="button"
                      onClick={() => {
                        setDefaultService(VEHICLE_DEFAULT_SERVICE[v.slug]);
                        setFormOpen(true);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 min-w-[120px] text-center"
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MISSION SOLUTIONS (INLINE EXPAND, NO BG IMAGE) ===== */}
      <section id="services" className="relative z-10 px-6 py-16 bg-black scroll-mt-28 md:scroll-mt-32">
        <div className={`${CONTAINER}`}>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-2 00 bg-clip-text text-transparent mb-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mission Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_CARDS.map((svc, idx) => {
              const open = expandedServices[svc.title];
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl flex flex-col text-left"
                  style={{ backgroundColor: STEEL }}
                  aria-label={`${svc.title} – ${svc.sub}`}
                >
                  {/* Header (solid background, small photo at top-right) */}
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => toggleService(svc.title)}
                    className="w-full text-left p-6 md:p-7"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{svc.title}</h3>
                        <p className="text-sky-200/80 text-sm">{svc.sub}</p>
                      </div>
                      <div className="ml-2 shrink-0">
                        <Image
                          src={svc.thumb}
                          alt={`${svc.title} thumbnail`}
                          width={44}
                          height={44}
                          unoptimized
                          className="h-11 w-11 rounded-2xl object-cover border border-white/10"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-sky-100/90">{svc.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {svc.detail.tags.map((t) => (
                        <Descriptor key={t} label={t} />
                      ))}
                    </div>
                  </button>

                  {/* Inline expandable details */}
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="service-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-6 pt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            {svc.detail.sections.map((sec) => (
                              <div key={sec.heading}>
                                <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                  {sec.heading}
                                </div>
                                <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                                  {sec.bullets.map((b) => (
                                    <li key={b} className="flex gap-2">
                                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                                      <span>{b}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {svc.detail.useCases && (
                            <div className="mt-6">
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                Example missions
                              </div>
                              <div className="flex flex-wrap gap-3">
                                {svc.detail.useCases.map((u) => (
                                  <Descriptor key={u} label={u} />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Single footer: ONE toggle + ONE Request Quote */}
                  <div className="px-6 pb-6 pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => toggleService(svc.title)}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[80px]"
                    >
                      {open ? "Hide" : "More Info"}
                    </button>
                    <motion.button
                      type="button"
                      onClick={() => {
                        setDefaultService(svc.defaultService);
                        setFormOpen(true);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 min-w-[120px] text-center"
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== QUOTE FORM MODAL ===== */}
      <AnimatePresence>
        {formOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[130] flex items-center justify-center bg-black/70 p-3 sm:p-6"
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
