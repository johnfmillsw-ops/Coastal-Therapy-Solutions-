// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/** ======= Constants / Styles ======= */
const CONTAINER = "max-w-7xl mx-auto";
const STEEL = "#1b263b";
const BTN_SOLID =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30";
const BTN_OUTLINE =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-10";

/** Your actual number */
const CALL_HREF = "tel:+18332919332";

/** ======= Types ======= */
type ServiceCard = {
  title: string;
  sub: string;
  summary: string;
  thumb: string;
  bgImage: string;
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
  image: string;
};

/** ======= Helpers ======= */
function useIsDesktop(minWidth = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${minWidth}px)`);
    const onChange = (mq: MediaQueryList | MediaQueryListEvent) =>
      setIsDesktop("matches" in mq ? mq.matches : (mq as MediaQueryList).matches);
    onChange(mql);
    mql.addEventListener?.("change", onChange as any);
    return () => mql.removeEventListener?.("change", onChange as any);
  }, [minWidth]);
  return isDesktop;
}
const scrollInto = (el: HTMLElement | null) =>
  el?.scrollIntoView({ behavior: "smooth", block: "start" });

/** ======= Content ======= */
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

/** ======= FAQ ======= */
const FAQ: { q: string; a: string }[] = [
  {
    q: "How fast can you deploy after we call?",
    a: "We can mobilize within hours for regional incidents. For multi-state operations we stage gear while teams move, typically arriving same-day or next morning depending on distance and airlift availability.",
  },
  {
    q: "What does a mobile command package include?",
    a: "Satellite internet, radios/mesh, power (generator + battery), lighting, secured Wi-Fi, dashboards, and a compact workstation for planning and reporting. We scale up with additional kits as needed.",
  },
  {
    q: "Do you integrate with our existing radios, cameras, or trackers?",
    a: "Yes. We bridge LMR, IP cameras, GPS beacons, and third-party APIs into a single ops picture with tasking, logs, and client reporting.",
  },
  {
    q: "Are your security teams licensed and insured?",
    a: "Yes. We deploy licensed protective personnel with appropriate insurance and compliance for the jurisdiction, coordinated with local authorities where required.",
  },
  {
    q: "Can you support extended operations (days to weeks)?",
    a: "Absolutely. We rotate crews, manage fuel/logistics, and maintain comms and power continuity with battery stacks, solar assists, and resupply.",
  },
];

/** ======= Minimal Inline Form ======= */
function MinimalRequestForm({
  defaultService,
  onSubmitted,
}: {
  defaultService?: string;
  onSubmitted?: () => void;
}) {
  const [service, setService] = useState(
    defaultService || SERVICE_CARDS[0].defaultService
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (defaultService) setService(defaultService);
  }, [defaultService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location) return;
    setSubmitting(true);
    try {
      // TODO: send to your API route if desired
      console.log("Request submitted:", { service, name, phone, location, notes });
      setDone(true);
      onSubmitted?.();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sky-100">
        <div className="font-semibold">Thanks — we’ve got your request.</div>
        <div className="text-sm opacity-80 mt-1">
          We’ll reach out quickly to coordinate next steps.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Service</span>
        <select
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          value={service}
          onChange={(e) => setService(e.target.value)}
          aria-label="Service"
        >
          {Array.from(new Set(SERVICE_CARDS.map((s) => s.defaultService))).map(
            (opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            )
          )}
        </select>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Your Name</span>
        <input
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Your Name"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Phone</span>
        <input
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          placeholder="(555) 555-1234"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          inputMode="tel"
          aria-label="Phone"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Location</span>
        <input
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          placeholder="City / Site"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          aria-label="Location"
        />
      </label>

      <label className="md:col-span-2 flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Notes (optional)</span>
        <textarea
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40 min-h-[90px]"
          placeholder="Brief context (timeline, constraints, points of contact)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          aria-label="Notes"
        />
      </label>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={submitting || !name || !phone || !location}
          className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110 disabled:opacity-50"
        >
          {submitting ? "Submitting…" : "Send Request"}
        </button>
      </div>
    </form>
  );
}

export default function Home() {
  const isDesktop = useIsDesktop(1024);

  /** ===== Expansion State ===== */
  // Fleet
  const [expandedVehicles, setExpandedVehicles] = useState<Record<Vehicle["slug"], boolean>>({
    sprinter: false,
    cybertruck: false,
    f150: false,
  });
  const [fleetExpandAll, setFleetExpandAll] = useState(false);

  // Services
  const serviceKeys = useMemo(() => SERVICE_CARDS.map((s) => s.title), []);
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});
  const [servicesExpandAll, setServicesExpandAll] = useState(false);
  useEffect(() => {
    setExpandedServices((prev) => {
      const next = { ...prev };
      for (const k of serviceKeys) if (next[k] === undefined) next[k] = false;
      return next;
    });
  }, [serviceKeys]);

  // Inline form
  const [defaultService, setDefaultService] = useState("");
  const [formExpanded, setFormExpanded] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);
  const openForm = useCallback((svc?: string) => {
    if (svc) setDefaultService(svc);
    setFormExpanded(true);
    setTimeout(() => scrollInto(formRef.current), 40);
  }, []);

  // Auto-open inline form when navigating to /#request-service (from Navbar "Contact")
  useEffect(() => {
    const openIfHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#request-service") {
        setFormExpanded(true);
        setTimeout(() => {
          scrollInto(formRef.current || null);
          const firstField = formRef.current?.querySelector(
            "input, select, textarea"
          ) as HTMLElement | null;
          firstField?.focus();
        }, 60);
      }
    };
    openIfHash();
    window.addEventListener("hashchange", openIfHash);
    return () => window.removeEventListener("hashchange", openIfHash);
  }, []);

  // Toggle logic: desktop -> all in category; mobile -> this card only
  const toggleVehicle = (slug: Vehicle["slug"]) => {
    if (isDesktop) {
      const next = !fleetExpandAll;
      setFleetExpandAll(next);
      setExpandedVehicles({ sprinter: next, cybertruck: next, f150: next });
    } else {
      setExpandedVehicles((s) => ({ ...s, [slug]: !s[slug] }));
    }
  };
  const toggleService = (title: string) => {
    if (isDesktop) {
      const next = !servicesExpandAll;
      setServicesExpandAll(next);
      setExpandedServices(Object.fromEntries(serviceKeys.map((k) => [k, next])));
    } else {
      setExpandedServices((s) => ({ ...s, [title]: !s[title] }));
    }
  };

  // FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
            margin: 0 !important; padding: 0 !important; background: black !important;
            min-height: 100vh !important; width: 100% !important; overflow-x: hidden !important;
          }
          html { scroll-behavior: smooth; }

          /* HERO height: default to vh, prefer lvh for stable "expanded" size */
          .hero-h { height: 92vh; }
          @media (max-width: 767px) { .hero-h { height: 96vh; } }
          @supports (height: 100lvh) {
            .hero-h { height: 92lvh; }
            @media (max-width: 767px) { .hero-h { height: 96lvh; } }
          }

          /* Show only the right <video> for the viewport */
          .vid-mobile { display: none; }
          .vid-desktop { display: none; }
          @media (max-width: 767px) { .vid-mobile { display: block; } }
          @media (min-width: 768px) { .vid-desktop { display: block; } }

          /* Mobile video: cut from sides (scale by height, centered) */
          @media (max-width: 767px) {
            .vid-mobile {
              position: absolute;
              top: 0;
              left: 50%;
              height: 100%;
              width: auto;
              transform: translateX(-50%);
            }
          }

          /* Desktop video: classic object-cover with vertical crop */
          @media (min-width: 768px) {
            .vid-desktop {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center 15%;
            }
          }
        `}</style>
      </Head>

      {/* ===== HERO ===== */}
      <section className="relative z-10 w-full hero-h flex flex-col justify-center items-center text-center overflow-hidden pt-16">
        {/* Mobile video (≤767px): /v5.2.mp4 */}
        <video
          className="vid-mobile bg-black"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/v5.2.mp4" type="video/mp4" />
        </video>

        {/* Desktop video (≥768px): /v5.mp4 */}
        <video
          className="vid-desktop bg-black"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/v5.mp4" type="video/mp4" />
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

      {/* ===== FLEET ===== */}
      <section
        id="fleet"
        className="relative z-10 px-6 pt-10 pb-6 bg-black scroll-mt-28 md:scroll-mt-32"
      >
        <div className={`${CONTAINER}`}>
          <motion.h2
            className={SECTION_TITLE}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Fleet
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {FLEET.map((v, idx) => {
              const open = expandedVehicles[v.slug];
              return (
                <motion.div
                  key={v.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl flex flex-col h-full text-left"
                  style={{ backgroundColor: STEEL }}
                >
                  {/* Header */}
                  <div className="p-6 md:p-7 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {v.name}
                        </h3>
                        <div className="mt-0.5 text-sm text-sky-200/80">
                          {v.role}
                        </div>
                      </div>
                      <Image
                        src={v.image}
                        alt={`${v.name} thumbnail`}
                        width={44}
                        height={44}
                        unoptimized
                        className="h-11 w-11 rounded-2xl object-cover border border-white/10"
                      />
                    </div>
                    <p className="mt-4 text-sm text-sky-100/90">{v.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {v.highlights.map((h) => (
                        <Descriptor key={h} label={h} />
                      ))}
                    </div>
                  </div>

                  {/* Inline details */}
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="fleet-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-6 pt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                Highlights
                              </div>
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
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                Summary
                              </div>
                              <p className="text-[15px] leading-relaxed text-sky-100/90">
                                {v.summary}
                              </p>
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

                  {/* Footer */}
                  <div className="mt-auto px-6 pb-6 pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => toggleVehicle(v.slug)}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[90px] text-left"
                    >
                      {open ? "Hide" : "More Info"}
                    </button>
                    <motion.button
                      type="button"
                      onClick={() => openForm(VEHICLE_DEFAULT_SERVICE[v.slug])}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 min-w-[130px] text-center"
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

      {/* ===== MISSION SOLUTIONS ===== */}
      <section
        id="services"
        className="relative z-10 px-6 py-16 bg-black scroll-mt-28 md:scroll-mt-32"
      >
        <div className={`${CONTAINER}`}>
          <motion.h2
            className={SECTION_TITLE}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mission Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {SERVICE_CARDS.map((svc, idx) => {
              const open = !!expandedServices[svc.title];
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl flex flex-col h-full text-left"
                  style={{ backgroundColor: STEEL }}
                  aria-label={`${svc.title} – ${svc.sub}`}
                >
                  {/* Header */}
                  <div className="p-6 md:p-7 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {svc.title}
                        </h3>
                        <p className="text-sky-200/80 text-sm">{svc.sub}</p>
                      </div>
                      <Image
                        src={svc.thumb}
                        alt={`${svc.title} thumbnail`}
                        width={44}
                        height={44}
                        unoptimized
                        className="h-11 w-11 rounded-2xl object-cover border border-white/10"
                      />
                    </div>
                    <p className="mt-4 text-sm text-sky-100/90">{svc.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {svc.detail.tags.map((t) => (
                        <Descriptor key={t} label={t} />
                      ))}
                    </div>
                  </div>

                  {/* Inline details */}
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="service-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
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

                  {/* Footer */}
                  <div className="mt-auto px-6 pb-6 pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => toggleService(svc.title)}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[90px]"
                    >
                      {open ? "Hide" : "More Info"}
                    </button>
                    <motion.button
                      type="button"
                      onClick={() => openForm(svc.defaultService)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 min-w-[130px] text-center"
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

      {/* ===== INLINE REQUEST SERVICE FORM (MINIMAL) ===== */}
      <section id="request-service" className="relative z-10 px-6 pb-10 bg-black">
        <div className={`${CONTAINER}`}>
          <div
            ref={formRef}
            className="rounded-3xl border border-white/10 p-6 md:p-8 bg-[#0d1b2a] shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Request Service</h3>
                <p className="text-sky-200/85 mt-1 text-sm md:text-base">
                  Quick request — we only need the basics.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm font-semibold border border-white/20 hover:bg-white/10"
                onClick={() => setFormExpanded((v) => !v)}
                aria-expanded={formExpanded}
              >
                {formExpanded ? "Hide" : "Open Form"}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {formExpanded && (
                <motion.div
                  key="inline-form"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6">
                    <MinimalRequestForm
                      defaultService={defaultService}
                      onSubmitted={() => scrollInto(formRef.current)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="relative z-10 px-6 pb-8 bg-black">
        <div className={`${CONTAINER}`}>
          <h2 className={SECTION_TITLE}>FAQs</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => {
              const open = openFAQ === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0d1b2a]"
                >
                  <button
                    className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-start justify-between gap-4"
                    onClick={() => setOpenFAQ((cur) => (cur === i ? null : i))}
                    aria-expanded={open}
                  >
                    <span className="font-semibold">{item.q}</span>
                    <span className="text-sky-200/85">{open ? "–" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="faq-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-sky-100/90 text-sm md:text-base leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
