import Head from "next/head";
import Link from "next/link";
import { FaBolt, FaShieldAlt, FaSatelliteDish, FaCode, FaLifeRing } from "react-icons/fa";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

const CONTAINER = "max-w-7xl mx-auto";
const STEEL = "#1b263b";

type ServiceSlug =
  | "power-comms"
  | "protective-ops"
  | "software-ai"
  | "emergency-response";

interface Service {
  slug: ServiceSlug;
  title: string;
  sub: string;
  summary: string;
  features: string[];
  tags: string[];
}

const SERVICES_TITLE = "Mission Services";
const SERVICES_SUB =
  "Modular power, comms, security, and software—deployed in hours.";

const SERVICES: Service[] = [
  {
    slug: "power-comms",
    title: "Power & Communications",
    sub: "Restore critical power and links fast.",
    summary:
      "Micro-grids, satellite backhaul, and field networking that bring sites online when infrastructure is down.",
    features: [
      "Mobile command center staging (Sprinter AWD / Cybertruck) for on-scene coordination.",
      "Generator + battery + solar stacks for clean, quiet runtime.",
      "Starlink/SatCom backhaul, mesh radios, and rapid-deploy Wi-Fi.",
      "Lighting, network gear, and power distribution for teams.",
      "Compact command workstation for planning and brief-backs.",
    ],
    tags: ["Diesel + solar", "Battery stacks", "Starlink & SatCom", "Micro-grid"],
  },
  {
    slug: "protective-ops",
    title: "Protective Operations & Site Security",
    sub: "Stabilize, secure, and control access.",
    summary:
      "Licensed protective teams, access control, and movement planning for people and assets in dynamic environments.",
    features: [
      "F-150 scout trucks for tight access; Sprinter HQ for forward command.",
      "Perimeter and access control with low-signature posture.",
      "Client/VIP movement control and secure escorts.",
      "Property checks with photo/video proofs and status reporting.",
      "Integrates with mobile command centers for real-time comms.",
    ],
    tags: ["Licensed teams", "Perimeter control", "Movement control", "Low-signature ops"],
  },
  {
    slug: "software-ai",
    title: "Command Dashboards & AI Tools",
    sub: "See the field. Decide faster.",
    summary:
      "Live maps, tasking, and AI-assisted reporting that fuse drone, team, and sensor inputs into one operational picture.",
    features: [
      "Real-time map overlays (UAS, teams, sensors) with status trails.",
      "Ops tasking, checklists, and structured after-action reports.",
      "AI copilots for intel summaries and client-ready brief-backs.",
      "API integrations with radios, cameras, and trackers.",
      "Portable ops rack fits inside mobile command vehicles for on-scene use.",
    ],
    tags: ["Dashboards", "Ops reporting", "AI copilots", "API integrations"],
  },
  // Must be last
  {
    slug: "emergency-response",
    title: "Emergency Response Services",
    sub: "End-to-end incident support when it matters.",
    summary:
      "From first-in assessments to sustained presence: teams, gear, and mobile command centers to keep operations moving.",
    features: [
      "Incident command anchored by mobile command centers (Sprinter AWD / Cybertruck).",
      "Search & rescue with high-water/boat capability and route validation.",
      "Damage assessment, perimeter/security, and volunteer/vendor integration.",
      "Logistics and supply shuttles; client property checks with proofs.",
      "Comms restoration: satellite, mesh, and field networking.",
    ],
    tags: ["ICS support", "SAR & Boats", "Logistics", "Comms restoration"],
  },
];

const ICONS: Record<ServiceSlug, ReactNode> = {
  "power-comms": <FaBolt size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "protective-ops": <FaShieldAlt size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "software-ai": <FaCode size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "emergency-response": <FaLifeRing size={40} className="text-[#00b4d8]" aria-hidden="true" />,
};

const Badge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-2.5 py-1 text-[11px] tracking-wide text-sky-200">
    {label}
  </span>
);

const OFFERINGS: string[] = [
  "Mobile Command Centers (Sprinter AWD)",
  "Mobile Command Nodes (Cybertruck platform)",
  "Scout/Utility Trucks (F-150)",
  "Starlink & SatCom Backhaul",
  "Mesh/Radio Networks",
  "Micro-Grids (Gen + Battery + Solar)",
  "Field Lighting & Power Distribution",
  "High-Water/Boat Rescue",
  "Route Clearance & Access Validation",
  "Perimeter & Access Control",
  "VIP/Client Movement Control",
  "Damage Assessment & Photo/Video Proofs",
  "Drone Recon & Mapping",
  "Command Dashboards",
  "AI-Assisted Reporting",
  "Volunteer/Vendor Integration",
  "Supply Shuttles & Logistics",
  "Property Checks",
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — Novator Group</title>
        <meta
          name="description"
          content="Modular services for emergency response: power, communications, protective operations, software & AI, and full emergency response."
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

      <div className="bg-black text-white min-h-screen font-sans flex flex-col gap-0 mt-[-2rem]">
        {/* Hero header */}
        <header className="relative z-30 bg-black">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 240px at 10% -10%, rgba(0,180,216,0.15), transparent 65%), radial-gradient(700px 220px at 100% 0%, rgba(0,180,216,0.10), transparent 65%)",
            }}
          />
          <div className={`${CONTAINER} px-6 pt-28 pb-8 sm:pb-10`}>
            <h1
              className={[
                "bg-gradient-to-r from-white via-white to-sky-200 bg-clip-text text-transparent",
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
                "leading-[1.15] md:leading-[1.08]",
                "drop-shadow-[0_0_24px_rgba(0,180,216,0.15)]",
                "text-center md:text-left",
              ].join(" ")}
              style={{ textWrap: "balance" } as any}
            >
              {SERVICES_TITLE}
            </h1>

            <p
              className={[
                "mt-3 sm:mt-4 max-w-[72ch]",
                "text-base sm:text-lg md:text-xl leading-relaxed",
                "text-sky-100/90",
                "text-center md:text-left",
              ].join(" ")}
              style={{ textWrap: "pretty" } as any}
            >
              {SERVICES_SUB}
            </p>
          </div>
        </header>

        {/* Services grid — NOT clickable cards; primary action is the button */}
        <section className="relative z-10 px-6 pt-0 pb-16 bg-black">
          <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch`}>
            {SERVICES.map((svc) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-full rounded-3xl p-5 text-left shadow-xl flex flex-col"
                style={{ backgroundColor: STEEL }}
                aria-label={`${svc.title} – ${svc.sub}`}
              >
                {/* decorative background glow (static) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                  }}
                />

                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                      {svc.title}
                    </h3>
                    <div className="mt-0.5 text-sm text-sky-200/80">{svc.sub}</div>
                  </div>
                  <div className="ml-2 shrink-0">{ICONS[svc.slug]}</div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-sky-100/90">{svc.summary}</p>

                {/* Feature list */}
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                  {svc.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {svc.tags.map((t) => (
                    <Badge key={t} label={t} />
                  ))}
                </div>

                {/* Footer row pinned to bottom */}
                <div className="mt-auto pt-5 flex items-center gap-3">
                  <Link
                    href={`/contact?interest=${svc.slug}`}
                    className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Get quote
                  </Link>
                  <span className="text-sm text-sky-200/90">Service scope</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* “More tiled” offerings (non-clickable, compact tiles) */}
        <section className="px-6 pb-20 bg-black">
          <div className={CONTAINER}>
            <h2 className="text-xl md:text-2xl font-semibold text-white">Services Offered</h2>
            <p className="mt-1 text-sky-200/80 max-w-[72ch]">
              Configure exactly what you need. These capabilities pair naturally with our mobile
              command centers and field teams.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {OFFERINGS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-sky-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacer so footer never crowds */}
        <div className="h-12 bg-black" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
