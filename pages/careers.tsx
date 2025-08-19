// pages/careers.tsx
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaShieldAlt, FaShip, FaRobot, FaCode } from "react-icons/fa";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

const STEEL = "#1b263b";
const CONTAINER = "max-w-7xl mx-auto";

type CareerTitle = "Armed Guard" | "Boat Rescue" | "Drone Operator" | "Software Engineer";
interface Career {
  title: CareerTitle;
  description: string;
  pay: string;
  requirements: string[];
  link: string;
}

const careers: Career[] = [
  {
    title: "Armed Guard",
    description: "Provide licensed armed security for high-risk deployments.",
    pay: "$450/day",
    requirements: ["Clean background", "Firearm license", "Security experience"],
    link: "/job-armed-guard",
  },
  {
    title: "Boat Rescue",
    description: "Assist in high-water evacuation and supply missions.",
    pay: "$500/day",
    requirements: ["Swimmer certification", "Boat handling experience", "Rescue training"],
    link: "/job-boat-rescue",
  },
  {
    title: "Drone Operator",
    description: "Deploy drones for reconnaissance and real-time intel.",
    pay: "$400/day",
    requirements: ["FAA Part 107 license", "Drone ops experience", "Map reading skills"],
    link: "/job-drone",
  },
  {
    title: "Software Engineer",
    description: "Build and maintain mission-critical tech solutions.",
    pay: "$600/day",
    requirements: ["React/Next.js", "API integrations", "On-call availability"],
    link: "/job-software-engineer",
  },
];

const iconMap: Record<CareerTitle, ReactNode> = {
  "Armed Guard": <FaShieldAlt size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "Boat Rescue": <FaShip size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "Drone Operator": <FaRobot size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "Software Engineer": <FaCode size={40} className="text-[#00b4d8]" aria-hidden="true" />,
};

/** Responsive columns helper (mobile=1, tablet=2, desktop=3) */
function useColumnCount() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(3); // lg
      else if (w >= 768) setCols(2); // md
      else setCols(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cols;
}

/** Motion helpers for ultra-smooth expand/collapse */
const spring = { type: "spring", stiffness: 240, damping: 30 }; // smooth, not bouncy
const fadeEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CareersPage() {
  const BTN_PRIMARY =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-slate-900 hover:brightness-110 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40";

  const titles = useMemo(() => careers.map((c) => c.title), []);
  const [openMap, setOpenMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Boat Rescue": false,
    "Drone Operator": false,
    "Software Engineer": false,
  });

  const cols = useColumnCount(); // 1 (mobile), 2 (tablet), 3 (desktop)

  const handleToggle = (idx: number) => {
    const title = titles[idx] as CareerTitle;

    // Mobile: only one open at a time
    if (cols === 1) {
      setOpenMap((prev) => {
        const currentlyOpen = prev[title];
        const next: Record<CareerTitle, boolean> = { ...prev };
        titles.forEach((t) => (next[t as CareerTitle] = false)); // close all
        next[title] = !currentlyOpen; // toggle selected
        return next;
      });
      return;
    }

    // Tablet/Desktop: open/collapse the entire row for symmetry
    setOpenMap((prev) => {
      const rowStart = Math.floor(idx / cols) * cols;
      const rowEnd = Math.min(rowStart + cols, titles.length);
      const rowTitles = titles.slice(rowStart, rowEnd) as CareerTitle[];
      const allOpen = rowTitles.every((t) => prev[t]);

      const next: Record<CareerTitle, boolean> = { ...prev };
      rowTitles.forEach((t) => (next[t] = !allOpen)); // if any closed → open all; if all open → collapse all
      return next;
    });
  };

  return (
    <>
      <Head>
        <title>Careers at Novator – Join Our Team</title>
        <meta
          name="description"
          content="Explore open roles in emergency response, logistics and technology at Novator Group."
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
          /* Stable hero height: prefer lvh, fallback to vh */
          .careers-hero { min-height: 52vh; }
          @media (max-width: 767px) { .careers-hero { min-height: 58vh; } }
          @supports (height: 100lvh) {
            .careers-hero { min-height: 52lvh; }
            @media (max-width: 767px) { .careers-hero { min-height: 58lvh; } }
          }
        `}</style>
      </Head>

      <div className="bg-black text-white min-h-screen font-sans flex flex-col gap-0 mt-[-2rem]">
        {/* Hero */}
        <header className="relative z-30 bg-black careers-hero overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 240px at 10% -10%, rgba(0,180,216,0.15), transparent 65%), radial-gradient(700px 220px at 100% 0%, rgba(0,180,216,0.10), transparent 65%)",
            }}
          />
          <div className={`${CONTAINER} px-6 pt-28 pb-8 sm:pb-10`}>
            <motion.h1
              className={[
                "bg-gradient-to-r from-white via-white to-sky-200 bg-clip-text text-transparent",
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
                "leading-[1.15] md:leading-[1.08]",
                "drop-shadow-[0_0_24px_rgba(0,180,216,0.15)]",
                "text-center md:text-left",
              ].join(" ")}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Join Novator Ops
            </motion.h1>

            <motion.p
              className={[
                "mt-3 sm:mt-4 max-w-[72ch]",
                "text-base sm:text-lg md:text-xl leading-relaxed",
                "text-sky-100/90",
                "text-center md:text-left",
              ].join(" ")}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We’re always looking for people who thrive under pressure and want to make a real impact—
              from field security and rescue to aerial intel and mission-critical software.
            </motion.p>
          </div>
        </header>

        {/* Roles grid (smooth layout) */}
        <section className="px-6 pt-0 pb-12">
          <LayoutGroup id="careers-grid">
            <motion.div
              layout
              transition={{ layout: { duration: 0.32, ease: fadeEase } }}
              className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
            >
              {careers.map((career, idx) => {
                const open = openMap[career.title];
                const detailsId = `details-${idx}`;

                return (
                  <motion.div
                    key={career.title}
                    layout
                    transition={{ layout: { duration: 0.32, ease: fadeEase } }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full rounded-3xl text-left shadow-xl border border-white/10 overflow-hidden flex flex-col will-change-transform"
                    style={{ backgroundColor: STEEL }}
                  >
                    {/* Header */}
                    <div className="p-5">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                        style={{
                          background:
                            "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                        }}
                      />
                      <div className="flex items-center gap-3 mb-3">
                        {iconMap[career.title]}
                        <h2 className="text-xl font-semibold text-white">{career.title}</h2>
                      </div>
                      <p className="text-[#cbd5e1] text-sm">{career.description}</p>
                      <div className="mt-3 text-sky-200/90 text-sm font-medium">Pay: {career.pay}</div>
                    </div>

                    {/* Expanded details (smooth height + staggered items) */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="details"
                          layout
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ ...spring, opacity: { duration: 0.18, ease: fadeEase } }}
                          style={{ overflow: "hidden", willChange: "height,opacity" }}
                          aria-live="polite"
                          id={detailsId}
                        >
                          <div className="p-5 pt-4">
                            <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                              Requirements
                            </div>

                            <motion.ul
                              initial="hidden"
                              animate="visible"
                              variants={{
                                hidden: { transition: { staggerChildren: 0.0 } },
                                visible: {
                                  transition: { staggerChildren: 0.05, delayChildren: 0.02 },
                                },
                              }}
                              className="space-y-2 text-[15px] leading-relaxed text-sky-100/90"
                            >
                              {career.requirements.map((req) => (
                                <motion.li
                                  key={req}
                                  variants={{
                                    hidden: { opacity: 0, y: 6 },
                                    visible: { opacity: 1, y: 0 },
                                  }}
                                  transition={{ duration: 0.18, ease: fadeEase }}
                                  className="flex gap-2"
                                >
                                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                                  <span>{req}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer actions */}
                    <motion.div
                      layout="position"
                      className="mt-auto px-5 pb-5 pt-3 flex items-center justify-between gap-4 border-t border-white/10"
                    >
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={detailsId}
                        onClick={() => handleToggle(idx)}
                        className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[90px] text-left"
                      >
                        {open ? "Hide" : "More Info"}
                      </button>
                      <Link
                        href={`/resume?role=${encodeURIComponent(career.title)}`}
                        className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-slate-900 hover:brightness-110 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                      >
                        Apply
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </LayoutGroup>

          {/* CTA below grid */}
          <div className={`${CONTAINER} mt-8 text-center`}>
            <p className="mb-4 text-lg text-[#adb5bd]">
              Don’t see a role that fits? We’d still love to hear from you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <Link href="/resume" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-slate-900 hover:brightness-110 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40">
                Send Us Your Resume
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
