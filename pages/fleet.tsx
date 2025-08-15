import Head from "next/head";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// ✅ Use relative imports from /public (reliable in production)
import sprinterImg from "../public/sprinter.png";
import cybertruckImg from "../public/cybertruck.jpg";
import f150Img from "../public/truck.png";

const CONTAINER = "max-w-7xl mx-auto";
const STEEL = "#1b263b";

type VehicleSlug = "sprinter" | "cybertruck" | "f150";
interface Vehicle {
  slug: VehicleSlug;
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  capabilities: string[];
  differentiators: string[];
  useCases: string[];
}

const FLEET: Vehicle[] = [
  {
    slug: "sprinter",
    name: "Mercedes Sprinter — HO Diesel, AWD",
    role: "Mobile Command Unit",
    summary:
      "All-wheel drive platform outfitted for forward command with modular power, satellite comms, and crew rest.",
    highlights: [
      "AWD",
      "HO diesel",
      "Modular power",
      "Satellite comms",
      "Command station",
      "Sleeping quarters",
      "Self-sustaining water/resources",
    ],
    capabilities: [
      "All-terrain access and sustained field presence.",
      "Modular power stack (inverter + battery + generator integration).",
      "Satellite communications for always-on connectivity.",
      "Dual-operator command station for live coordination and reporting.",
      "Rest bunks and interior climate control for extended operations.",
      "Onboard water and basic sustainment provisioning for team support.",
    ],
    differentiators: [
      "Purpose-built for multi-day deployments without fixed infrastructure.",
      "Configurable interior for intel/ops, logistics, or medical triage workflows.",
      "Runs Novator Group‘s SOP playbooks and reporting inside the vehicle.",
    ],
    useCases: [
      "Forward incident command & dispatch",
      "Damage assessment & situational awareness",
      "Perimeter/security coordination",
      "Volunteer & vendor integration on-site",
    ],
  },
  {
    slug: "cybertruck",
    name: "Cybertruck Platform — Onboard Power + SatCom",
    role: "Rapid Response / Modular Command & Shelter",
    summary:
      "Electric platform with substantial onboard power, satellite comms, and fast-deploy modular shelter for pop-up command.",
    highlights: [
      "Onboard power",
      "Satellite comms",
      "Modular shelter",
      "Command workstation",
      "All-terrain capability",
      "Self-sustaining water/resources",
    ],
    capabilities: [
      "Quiet power for lights, radios, laptops, and network gear.",
      "Satellite backhaul for data/voice when cellular is down.",
      "Rapid deploy canopy/shelter with weather protection.",
      "Compact command workstation for planning and brief-backs.",
      "Low signature operations ideal for residential or urban response zones.",
    ],
    differentiators: [
      "Near-silent power and minimal thermal/sound signature while operating.",
      "Works as a roving node in Novator’s ad-hoc mesh and relay plans.",
      "Pairs with our mobile teams for rapid assessments and client updates.",
    ],
    useCases: [
      "Neighborhood-scale command & client liaison",
      "Utility/critical-site check-ins",
      "VIP escort and movement control",
      "Short-cycle tasking between sites",
    ],
  },
  {
    slug: "f150",
    name: "F-150 (2-Door) — Trail-Ready Power & Comms",
    role: "Scout / Utility Command Platform",
    summary:
      "Agile truck platform with onboard power, satellite comms, and packable shelter to extend command into hard-to-reach zones.",
    highlights: [
      "All-terrain focused",
      "Onboard power",
      "Satellite comms",
      "Packable shelter",
      "Command center",
      "Self-sustaining water/resources",
    ],
    capabilities: [
      "Access tight or debris-laden approaches other vehicles avoid.",
      "Provide field power for radios, tools, and IT kits.",
      "Satellite comms for status traffic and coordination.",
      "Packable shelter enables quick shade/cover for teams.",
      "Configured for single-operator or two-person scout teams.",
    ],
    differentiators: [
      "Fast to stage and redeploy; ideal for multi-site hops.",
      "Integrates with Novator Group comms plans and reporting cadence.",
      "Cost-efficient platform for persistent presence across a wide area.",
    ],
    useCases: [
      "Route clearance & access validation",
      "Perimeter checks & status sweeps",
      "Supply shuttles and spot-task response",
      "Client property checks with photo/video proofs",
    ],
  },
];

// Static image objects (prod-safe, basePath-safe)
const IMAGE_SRC: Record<VehicleSlug, StaticImageData> = {
  sprinter: sprinterImg,
  cybertruck: cybertruckImg,
  f150: f150Img,
};

const Badge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-2 py-0.5 text-[11px] tracking-wide text-sky-200">
    {label}
  </span>
);

export default function FleetPage() {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="bg-black text-white min-h-screen relative font-sans flex flex-col gap-0 mt-[-2rem]">
      <Head>
        <title>Meet the Fleet — Novator Group</title>
        <meta
          name="description"
          content="Field-proven platforms designed for rapid deployment, persistent presence, and communications when it matters."
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

      {/* Hero header with balanced spacing */}
      <header className="relative z-30 bg-black">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 240px at 10% -10%, rgba(0,180,216,0.15), transparent 65%), radial-gradient(700px 220px at 100% 0%, rgba(0,180,216,0.10), transparent 65%)",
          }}
        />
        <div className={`${CONTAINER} px-6 pt-28 pb-20`}>
          <motion.h1
            className={[
              "bg-gradient-to-r from-white via-white to-sky-200 bg-clip-text text-transparent",
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
              "leading-[1.15] md:leading-[1.08]",
              "drop-shadow-[0_0_24px_rgba(0,180,216,0.15)]",
              "text-center md:text-left",
            ].join(" ")}
            style={{ textWrap: "balance" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Meet the Fleet
          </motion.h1>

          <motion.p
            className={[
              "mt-3 sm:mt-4 max-w-[72ch]",
              "text-base sm:text-lg md:text-xl leading-relaxed",
              "text-sky-100/90",
              "text-center md:text-left",
            ].join(" ")}
            style={{ textWrap: "pretty" }}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Field-proven platforms designed for rapid deployment, persistent presence, and
            communications when it matters. Each vehicle is self-sustaining with water and
            resources to support the teams operating them.
          </motion.p>
        </div>
      </header>

      {/* Grid */}
      <section className="relative z-10 px-6 pt-0 pb-20 bg-black flex-1 m-0">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {FLEET.map((v) => (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative w-full h-full rounded-3xl p-5 text-left shadow-xl cursor-pointer flex flex-col"
                style={{ backgroundColor: STEEL }}
                onClick={() => setSelected(v)}
              >
                {/* glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                  }}
                />

                {/* Top content */}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                        {v.name}
                      </h3>
                      <div className="mt-0.5 text-sm text-sky-200/80">{v.role}</div>
                    </div>

                    {/* Top-right image, +50% size, safely clipped */}
                    <div className="ml-2 shrink-0 relative w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                      <Image
                        src={IMAGE_SRC[v.slug]}
                        alt={`${v.name} thumbnail`}
                        fill
                        sizes="(max-width: 768px) 60px, 72px"
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-sky-100/90">{v.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {v.highlights.map((h) => (
                      <Badge key={h} label={h} />
                    ))}
                  </div>
                </div>

                {/* Bottom row pinned for alignment */}
                <div className="mt-auto pt-5 flex items-center gap-3 text-sm">
                  <span className="text-sky-200/90">Open brief</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 overflow-hidden"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.name} capabilities`}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, exit: { duration: 0.15 }, ease: "easeOut" }}
              className="relative w-full max-w-[90vw] sm:max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d1b2a] p-4 sm:p-6 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20 z-10"
              >
                ✕
              </button>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{selected.name}</h3>
                  <div className="mt-0.5 text-sm text-sky-200/80">{selected.role}</div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                    Capabilities
                  </div>
                  <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                    {selected.capabilities.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                    What makes Novator different
                  </div>
                  <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                    {selected.differentiators.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                  Example missions
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.useCases.map((u) => (
                    <span
                      key={u}
                      className="rounded-full bg-white/5 px-3 py-1 text-sm text-sky-100"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA → goes to /service-request and carries interest */}
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href={{
                    pathname: "/service-request",
                    query: { interest: selected.slug, from: "fleet" },
                  }}
                  className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Get quote
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
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
