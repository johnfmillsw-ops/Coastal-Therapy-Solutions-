// components/MeetTheFleet.tsx
// Novator Group — "Meet the Fleet" component (with image plumbing)
// Images expected in /public:
//   - /cybertruck.jpg
//   - /sprinter.png   (you wrote “sprinter sprinter.png”; this will also try that automatically)
//   - /f150 truck.png (space encoded; will also try /truck.png as fallback)

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

// ---- Brand palette ----
const BRAND = {
  navy: "#0d1b2a",
  steel: "#1b263b",
  electric: "#00b4d8",
};

// Allow CSS custom props in inline style without ts-ignore
interface CSSVars extends React.CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

// ---- Types ----
export type VehicleSlug = "sprinter" | "cybertruck" | "f150";

export interface Vehicle {
  slug: VehicleSlug;
  name: string;
  role: string;
  summary: string;
  highlights: string[]; // quick tags
  capabilities: string[]; // bullets in modal
  differentiators: string[]; // what makes Novator Group different
  useCases: string[]; // example missions
}

// ---- Data ----
export const FLEET: Vehicle[] = [
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

// ---- Image candidates (tries multiple filenames per your note) ----
const IMAGE_CANDIDATES: Record<VehicleSlug, string[]> = {
  sprinter: [
    "/sprinter.png", // primary (your stated filename)
    "/sprinter%20sprinter.png", // if actually saved with a space
  ],
  cybertruck: ["/cybertruck.jpg"],
  f150: [
    "/f150%20truck.png", // if saved with a space in the name
    "/truck.png", // common fallback
    "/f150.png", // extra fallback
  ],
};

const getVehicle = (slug?: string | string[]) =>
  FLEET.find((v) => v.slug === slug) || null;

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-2 py-0.5 text-[11px] tracking-wide text-sky-200">
    {label}
  </span>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
    {children}
  </div>
);

const Glow: React.FC = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
    style={{
      background:
        "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
    }}
  />
);

// ---- Card ----
const FleetCard: React.FC<{
  v: Vehicle;
  onOpen: (v: Vehicle) => void;
}> = ({ v, onOpen }) => {
  const style: CSSVars = { "--steel": BRAND.steel };

  // try multiple filenames for robustness based on your message
  const [imgSrc, setImgSrc] = useState<string>(IMAGE_CANDIDATES[v.slug][0]);

  useEffect(() => {
    // Reset if card reused
    setImgSrc(IMAGE_CANDIDATES[v.slug][0]);
  }, [v.slug]);

  const handleImgError = () => {
    const options = IMAGE_CANDIDATES[v.slug];
    const idx = options.indexOf(imgSrc);
    const next = options[idx + 1];
    if (next) setImgSrc(next);
  };

  return (
    <motion.button
      onClick={() => onOpen(v)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full rounded-3xl border border-white/10 bg-[var(--steel)]/80 p-5 text-left shadow-xl transition hover:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
      style={style}
    >
      <Glow />
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white drop-shadow-sm">
            {v.name}
          </h3>
          <div className="mt-0.5 text-sm text-sky-200/80">{v.role}</div>
        </div>

        {/* Thumbnail (uses your public/ images) */}
        <div className="ml-2 shrink-0">
          <Image
            src={imgSrc}
            alt={`${v.name} thumbnail`}
            width={40}
            height={40}
            onError={handleImgError}
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
        <span className="h-px flex-1 bg-gradient-to-r from-sky-400/40 to-transparent" />
      </div>
    </motion.button>
  );
};

// ---- Modal ----
const FleetModal: React.FC<{
  vehicle: Vehicle | null;
  onClose: () => void;
}> = ({ vehicle, onClose }) => {
  const style: CSSVars = { "--steel": BRAND.steel, "--electric": BRAND.electric };
  return (
    <AnimatePresence>
      {vehicle && (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${vehicle.name} capabilities`}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="absolute inset-x-0 top-10 mx-auto w-[92vw] max-w-3xl rounded-3xl border border-white/10 bg-[var(--steel)] p-6 shadow-2xl"
            style={style}
          >
            <Glow />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {vehicle.name}
                </h3>
                <div className="mt-0.5 text-sm text-sky-200/80">{vehicle.role}</div>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-sky-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <SectionLabel>Capabilities</SectionLabel>
                <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                  {vehicle.capabilities.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionLabel>What makes Novator different</SectionLabel>
                <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                  {vehicle.differentiators.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <SectionLabel>Example missions</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {vehicle.useCases.map((u) => (
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
                href={`/contact?interest=${vehicle.slug}`}
                className="rounded-2xl bg-[var(--electric)] px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ---- Inline link helper ----
// Usage anywhere: <FleetLink vehicleSlug="sprinter">Mobile Command Center Vehicle</FleetLink>
export const FleetLink: React.FC<{
  vehicleSlug?: VehicleSlug; // defaults to grid view
  children: React.ReactNode;
}> = ({ vehicleSlug, children }) => {
  const href = vehicleSlug ? `/fleet?vehicle=${vehicleSlug}#fleet` : "/fleet#fleet";
  return (
    <Link
      href={href}
      className="cursor-pointer text-sky-300 underline decoration-dotted underline-offset-4 hover:text-sky-200"
    >
      {children}
    </Link>
  );
};

// ---- Main Component ----
const MeetTheFleet: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [selected, setSelected] = useState<Vehicle | null>(null);

  // Open a vehicle automatically if ?vehicle=...
  useEffect(() => {
    const { vehicle } = router.query;
    const match = getVehicle(vehicle);
    if (match) setSelected(match);
  }, [router.query]);

  const onOpen = (v: Vehicle) => {
    setSelected(v);
    // Update URL so deep links work
    router.replace(`/fleet?vehicle=${v.slug}#fleet`, undefined, { shallow: true });
  };

  const onClose = () => {
    setSelected(null);
    router.replace(`/fleet#fleet`, undefined, { shallow: true });
  };

  const cards = useMemo(() => FLEET, []);
  const sectionStyle: CSSVars = { "--navy": BRAND.navy };

  return (
    <section
      id="fleet"
      className={
        "relative isolate mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 " +
        (className || "")
      }
      style={sectionStyle}
    >
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div
          className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.14), transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.12), transparent 60%)" }}
        />
      </div>

      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Meet the Fleet
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sky-100/90">
            Field-proven platforms designed for rapid deployment, persistent presence, and
            communications when it matters. Each vehicle is self-sustaining with water and
            resources to support the teams operating them.
          </p>
        </div>
        <Link
          href="/contact?interest=fleet"
          className="rounded-2xl border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur transition hover:bg-sky-400/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Talk to Ops
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((v) => (
          <FleetCard key={v.slug} v={v} onOpen={onOpen} />
        ))}
      </div>

      {/* Modal */}
      <FleetModal vehicle={selected} onClose={onClose} />

      {/* Bottom CTA */}
      <div className="mt-10 flex flex-col items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
        <div className="text-sm text-sky-100/90">
          Want a single link you can drop in proposals or emails? Use{" "}
          <code className="mx-1 rounded bg-black/40 px-1.5 py-0.5 text-[12px] text-sky-200">
            /fleet?vehicle=sprinter
          </code>
          ,
          <code className="mx-1 rounded bg-black/40 px-1.5 py-0.5 text-[12px] text-sky-200">
            /fleet?vehicle=cybertruck
          </code>
          , or
          <code className="mx-1 rounded bg-black/40 px-1.5 py-0.5 text-[12px] text-sky-200">
            /fleet?vehicle=f150
          </code>
          .
        </div>
        <div className="flex-1" />
        <Link
          href="/services"
          className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100"
        >
          Explore services →
        </Link>
      </div>
    </section>
  );
};

export default MeetTheFleet;
