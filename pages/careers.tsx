// pages/careers.tsx
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const CONTAINER = "max-w-7xl mx-auto";
const CARD_BG = "#1b263b";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

type CareerTitle = "Armed Guard" | "Boat Rescue" | "Drone Operator" | "Software Engineer";
interface Career {
  title: CareerTitle;
  description: string;
  pay: string;
  requirements: string[];
}

const careers: Career[] = [
  {
    title: "Armed Guard",
    description:
      "Licensed protective work supporting secure site stand‑ups, client movements, and perimeter control. Maintain posture, document events, and coordinate handoffs with command.",
    pay: "$25–$45 / hr (license & experience dependent)",
    requirements: [
      "State armed security license (current)",
      "Firearm permit & clean background",
      "CPR / First Aid (preferred)",
      "Defensive driving (preferred)",
      "Prior security or military/law experience (preferred)",
    ],
  },
  {
    title: "Boat Rescue",
    description:
      "High‑water evacuation and supply shuttles. Safely operate small craft in variable conditions, execute SAR checklists, and support accountable hand‑offs at staging sites.",
    pay: "$28–$50 / hr (quals & conditions dependent)",
    requirements: [
      "Strong swimmer; small‑craft handling",
      "State boater card or operator cert",
      "ICS‑100/200 (preferred)",
      "Swiftwater / Flood Rescue (preferred)",
      "CPR / First Aid (required)",
    ],
  },
  {
    title: "Drone Operator",
    description:
      "UAS recon and live intel streaming. Plan flights, capture mapping/imagery, and feed status to ops dashboards with clear comms and safe airmanship.",
    pay: "$30–$55 / hr (mission & experience dependent)",
    requirements: [
      "FAA Part 107 (required)",
      "Night ops waiver (preferred)",
      "UAS mapping/photogrammetry (preferred)",
      "Solid VLOS/airspace knowledge",
      "Clean flight logs & maintenance habits",
    ],
  },
  {
    title: "Software Engineer",
    description:
      "Ship mission‑critical features: live maps, device integrations, and reports. Own scoped work end‑to‑end; bias toward reliable shipping under real‑world constraints.",
    pay: "$45–$85 / hr (experience & scope dependent)",
    requirements: [
      "React / Next.js (required)",
      "API integrations & WebSockets",
      "TypeScript (preferred)",
      "Mapping/telemetry experience (preferred)",
      "On‑call availability (rotational)",
    ],
  },
];

// 🔧 Match layout: 2 cols on desktop
function useColumnCount() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const compute = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w >= 1024) setCols(2); // Desktop
      else if (w >= 768) setCols(2); // Tablet
      else setCols(1); // Mobile
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cols;
}

function isInteractiveClick(e: React.MouseEvent) {
  const t = e.target as HTMLElement;
  return !!t.closest("button, a, input, select, textarea, label, [data-no-toggle]");
}

export default function CareersPage() {
  const cols = useColumnCount();
  const isDesktop = cols === 2;

  const [openMap, setOpenMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Boat Rescue": false,
    "Drone Operator": false,
    "Software Engineer": false,
  });
  const [applyMap, setApplyMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Boat Rescue": false,
    "Drone Operator": false,
    "Software Engineer": false,
  });

  const titles = useMemo(() => careers.map((c) => c.title), []);

  const setRowOpenState = (idx: number, open: boolean) => {
    const rowStart = Math.floor(idx / cols) * cols;
    const rowEnd = Math.min(rowStart + cols, titles.length);
    const rowTitles = titles.slice(rowStart, rowEnd) as CareerTitle[];
    setOpenMap((prev) => {
      const next = { ...prev };
      rowTitles.forEach((t) => (next[t] = open));
      return next;
    });
    if (!open) {
      setApplyMap((prev) => {
        const next = { ...prev };
        rowTitles.forEach((t) => (next[t] = false));
        return next;
      });
    }
  };

  const toggleCard = (idx: number) => {
    const title = titles[idx] as CareerTitle;
    if (isDesktop) {
      const rowStart = Math.floor(idx / cols) * cols;
      const rowEnd = Math.min(rowStart + cols, titles.length);
      const rowTitles = titles.slice(rowStart, rowEnd) as CareerTitle[];
      const allOpen = rowTitles.every((t) => openMap[t]);
      setRowOpenState(idx, !allOpen);
    } else {
      const nextOpen = !openMap[title];
      setOpenMap((prev) => ({ ...prev, [title]: nextOpen }));
      if (!nextOpen) setApplyMap((prev) => ({ ...prev, [title]: false }));
    }
  };

  const openApply = (idx: number) => {
    const title = titles[idx] as CareerTitle;
    if (!openMap[title]) {
      if (isDesktop) setRowOpenState(idx, true);
      else setOpenMap((prev) => ({ ...prev, [title]: true }));
    }
    setApplyMap((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <>
      <Head>
        <title>Careers — Novator Group</title>
        <meta name="description" content="Open roles at Novator Group." />
        <style>{`html,body,#__next{background:#0d1b2a}`}</style>
      </Head>

      <main className="bg-[#0d1b2a] text-white min-h-screen font-sans">
        <section className="relative h-[60vh] sm:h-[68vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          <Image
            src="/hc.jpg"
            alt="Novator field operations"
            fill
            priority
            unoptimized
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
          <div className={`${CONTAINER} relative z-10 text-center px-5`}>
            <motion.h1 {...fade} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Work with Novator Group
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-sky-100/85"
            >
              Build capability that matters. Join a mission-first team, delivering power, security,
              connectivity, and progressive technology.
            </motion.p>
          </div>
        </section>

        <section className={`${CONTAINER} px-5 py-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {careers.map((career, idx) => {
              const title = career.title;
              const open = openMap[title];
              const applying = applyMap[title];
              const detailsId = `details-${idx}`;
              const applyId = `apply-${idx}`;

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-white/10 bg-[color:var(--card-bg)]"
                  style={{ ["--card-bg" as any]: CARD_BG }}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    if (isInteractiveClick(e)) return;
                    toggleCard(idx);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(idx);
                    }
                  }}
                  aria-expanded={open}
                  aria-controls={detailsId}
                >
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                    <div className="text-xs sm:text-sm text-sky-200/85 mt-0.5">Pay: {career.pay}</div>
                    <p className="text-[13px] sm:text-sm text-slate-200/90 mt-3 line-clamp-2">
                      {career.description}
                    </p>
                  </div>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-t border-white/10"
                        id={detailsId}
                        aria-live="polite"
                      >
                        <div className="p-4 sm:p-5 pt-3">
                          <div className="text-[13px] sm:text-[15px] text-sky-100/90 leading-relaxed">
                            {career.description}
                          </div>
                          <div className="mt-3">
                            <div className="text-[11px] uppercase tracking-widest text-sky-300/80 mb-1">
                              Requirements & Licenses
                            </div>
                            <ul className="text-[13px] sm:text-[15px] space-y-1.5">
                              {career.requirements.map((r) => (
                                <li key={r} className="flex gap-2">
                                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="px-4 sm:px-5 py-3 flex items-center justify-between gap-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(idx);
                      }}
                      className="text-xs sm:text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100"
                      data-no-toggle
                      aria-expanded={open}
                      aria-controls={detailsId}
                    >
                      {open ? "Hide" : "More Info"}
                    </button>

                    {!applying && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openApply(idx);
                        }}
                        className="rounded-full bg-white text-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold hover:brightness-105"
                        data-no-toggle
                        aria-controls={applyId}
                        aria-expanded={applying}
                      >
                        Apply
                      </button>
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {open && applying && (
                      <motion.div
                        key="apply"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-t border-white/10"
                        id={applyId}
                      >
                        <div className="p-4 sm:p-5">
                          <div className="text-[11px] uppercase tracking-widest text-sky-300/80 mb-2">
                            Apply for {title}
                          </div>
                          <p className="text-sm text-slate-300 mb-2">[Insert ResumeForm here]</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
