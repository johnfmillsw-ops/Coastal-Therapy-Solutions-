import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const IMAGE_SRC: Record<VehicleSlug, string> = {
  sprinter: "/sprinter.png",
  cybertruck: "/cybertruck.jpg",
  f150: "/truck.png",
};

const Badge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-2 py-0.5 text-[11px] tracking-wide text-sky-200">
    {label}
  </span>
);

export default function FleetPage() {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <>
      <Head>
        <title>Meet the Fleet — Novator Group</title>
        <meta
          name="description"
          content="Field-proven platforms designed for rapid deployment, persistent presence, and communications when it matters."
        />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background: black !important;
          }
        `}</style>
      </Head>
      <div className="bg-black text-white min-h-screen relative font-sans">
        {/* Minimal header section */}
        <header className="relative z-10 w-full h-[80px] flex items-center bg-black">
          <div className={`${CONTAINER} px-6 mx-auto`}>
            <motion.h1
              className="text-2xl md:text-3xl font-bold tracking-tight"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Meet the Fleet
            </motion.h1>
          </div>
        </header>
        {/* Content section */}
        <section className="relative z-10 px-6 pb-20 pt-0 bg-black">
          <div className={CONTAINER}>
            {/* Subheading + CTA */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sky-100/90">
                  Field-proven platforms designed for rapid deployment, persistent presence, and
                  communications when it matters. Each vehicle is self-sustaining with water and
                  resources to support the teams operating them.
                </p>
              </div>
              <Link
                href="/contact?interest=fleet"
                className="rounded-2xl border border-[#00b4d8]/50 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Talk to Ops
              </Link>
            </div>
            {/* Vehicle cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FLEET.map((v) => (
                <motion.button
                  key={v.slug}
                  onClick={() => setSelected(v)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
                  className="relative w-full rounded-3xl border border-white/10 p-5 text-left shadow-xl transition hover:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  style={{ backgroundColor: STEEL }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                    }}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                        {v.name}
                      </h3>
                      <div className="mt-0.5 text-sm text-sky-200/80">{v.role}</div>
                    </div>
                    <div className="ml-2 shrink-0">
                      <Image
                        src={IMAGE_SRC[v.slug]}
                        alt={`${v.name} thumbnail`}
                        width={40}
                        height={40}
                        unoptimized
                        className="h-10 w-10 rounded-2xl object-cover border border-white/10"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-sky-100/90">{v.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {v.highlights.map((h) => (
                      <Badge key={h} label={h} />
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-sm">
                    <span className="text-sky-200/90">Open brief</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${selected.name} capabilities`}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0d1b2a] p-6 shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
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
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`/contact?interest=${selected.slug}`}
                    className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Request a mission plan
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
    </>
  );
}