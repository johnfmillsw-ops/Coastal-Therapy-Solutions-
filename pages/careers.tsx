// pages/careers.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const CONTAINER = "max-w-7xl mx-auto";
const CARD_BG = "#1b263b"; // Job card background stays blue/steel

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

type CareerTitle =
  | "Armed Guard"
  | "Helicopter Pilot"
  | "Drone Operator"
  | "Software Engineer"
  | "Nurse";

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
      "Licensed protective work supporting secure site stand-ups, client movements, and perimeter control. Maintain posture, document events, and coordinate handoffs with command.",
    pay: "$45–$75 / hr (license & experience dependent)",
    requirements: [
      "State armed security license (current)",
      "Firearm permit & clean background",
      "CPR / First Aid (preferred)",
      "Defensive driving (preferred)",
      "Prior security or military/law experience (preferred)",
    ],
  },
  {
    title: "Helicopter Pilot",
    description:
      "Rotary-wing operations supporting emergency response, supply runs, and passenger transport. Safely conduct flights in variable conditions, execute SAR/MEDEVAC checklists, and integrate with ground command for coordinated staging and delivery.",
    pay: "$200–$400 / hr (aircraft type & experience dependent)",
    requirements: [
      "FAA Commercial Rotorcraft Certificate (required)",
      "Current FAA Medical Certificate (Class II or higher)",
      "Instrument Rating – Helicopter (preferred)",
      "Minimum 1,000 PIC rotary hours (required)",
      "Night flying & NVG qualified (preferred)",
      "Prior SAR, EMS, or military rotary experience (preferred)",
      "CPR / First Aid (required)",
      "ICS-100/200 or equivalent emergency management training (preferred)",
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
      "Ship mission-critical features: live maps, device integrations, and reports. Own scoped work end-to-end; bias toward reliable shipping under real-world constraints.",
    pay: "$45–$85 / hr (experience & scope dependent)",
    requirements: [
      "React / Next.js (required)",
      "API integrations & WebSockets",
      "TypeScript (preferred)",
      "Mapping/telemetry experience (preferred)",
      "On-call availability (rotational)",
    ],
  },
  {
    title: "Nurse",
    description:
      "Provide frontline medical support in disaster zones and field operations. Deliver patient care, assist in triage, and integrate with command to stabilize environments.",
    pay: "$85–$125 / hr (experience & certifications dependent)",
    requirements: [
      "Active RN or LPN license (required)",
      "BLS/ACLS certification (required)",
      "Field/ER/EMS experience (preferred)",
      "Strong adaptability in austere environments",
      "Clean background and medical clearance",
    ],
  },
];

// ---------- Utilities ----------
function useColumnCount() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const compute = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w >= 768) setCols(2);
      else setCols(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cols;
}

function isInteractiveClick(e: React.MouseEvent) {
  const t = e.target as HTMLElement;
  return !!t.closest(
    "button, a, input, select, textarea, label, [data-no-toggle]"
  );
}

// ---------- Minimal Apply Form ----------
function ApplicationForm({
  role,
  onSubmitted,
}: {
  role: string;
  onSubmitted: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErr(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setOk(true);
        onSubmitted();
        form.reset();
      } else {
        setErr("Submission failed. Please try again.");
      }
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-xl bg-slate-900/30 ring-1 ring-white/10 p-4 sm:p-5">
      {ok ? (
        <div className="text-sm text-emerald-300">
          ✅ Application received. We’ll reach out if there’s a match.
        </div>
      ) : (
        <form
          name="novator-application"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input type="hidden" name="form-name" value="novator-application" />
          <input type="hidden" name="role" value={role} />
          <input type="hidden" name="page" value="/careers" />
          <div className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label className="block text-xs text-sky-300/80 mb-1">
                Full Name*
              </label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-[#0f2236] text-white px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-xs text-sky-300/80 mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-[#0f2236] text-white px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-xs text-sky-300/80 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-lg bg-[#0f2236] text-white px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="(833) 291-9332"
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-sky-300/80 mb-1">
              Resume (PDF or DOC)*
            </label>
            <input
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              className="block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:px-3 py-2 file:bg-white file:text-slate-900 hover:file:brightness-95"
            />
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <span className="text-xs text-slate-300/80">
              By submitting, you certify the info is accurate.
            </span>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-white text-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold hover:brightness-105 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Send Application"}
            </button>
          </div>

          {err && <div className="text-xs text-rose-300">{err}</div>}
        </form>
      )}
    </div>
  );
}

// ---------- Page ----------
export default function CareersPage() {
  const cols = useColumnCount();
  const isDesktop = cols === 2;

  const [openMap, setOpenMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Helicopter Pilot": false,
    "Drone Operator": false,
    "Software Engineer": false,
    Nurse: false,
  });
  const [applyMap, setApplyMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Helicopter Pilot": false,
    "Drone Operator": false,
    "Software Engineer": false,
    Nurse: false,
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
        <style>{`html,body,#__next{background:#000000}`}</style>
      </Head>

      <main className="bg-black text-white min-h-screen font-sans">
        {/* Hero */}
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
            <motion.h1
              {...fade}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Work with Novator Group
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-sky-100/85"
            >
              Build capability that matters. Join a mission-first team,
              delivering power, security, connectivity, and progressive
              technology.
            </motion.p>
          </div>
        </section>

        {/* Roles */}
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
                  className="rounded-2xl border border-white/10 bg-[color:var(--card-bg)] flex flex-col"
                  style={{ ["--card-bg" as any]: CARD_BG }}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    if (isInteractiveClick(e)) return;
                    toggleCard(idx);
                  }}
                  aria-expanded={open}
                  aria-controls={detailsId}
                >
                  {/* Header / description */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {title}
                    </h3>
                    <div className="text-xs sm:text-sm text-sky-200/85 mt-0.5">
                      Pay: {career.pay}
                    </div>
                    <p
                      className={`text-[13px] sm:text-sm text-slate-200/90 mt-3 ${
                        open ? "line-clamp-none" : "line-clamp-2"
                      }`}
                    >
                      {career.description}
                    </p>
                  </div>

                  {/* Details */}
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
                      >
                        <div className="p-4 sm:p-5 pt-3">
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
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action row pinned bottom */}
                  <div className="px-4 sm:px-5 py-3 flex items-center justify-between gap-3 border-t border-white/10 mt-auto">
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

                  {/* Apply form */}
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
                          <ApplicationForm role={title} onSubmitted={() => {}} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Supplier/Partner CTA */}
        <section className="border-t-2 border-[#000000]/40 bg-black py-14">
          <div className={`${CONTAINER} px-5 text-center`}>
            <motion.p
              {...fade}
              className="text-lg sm:text-xl text-sky-100/90 mb-6"
            >
              Become a supplier, join forces on defense and emergency response
              missions.
            </motion.p>
            <Link
              href="pages/partner"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-white shadow bg-gradient-to-r from-[#00b4d8] to-sky-600 hover:brightness-110"
            >
              Partner With Us
            </Link>
          </div>
        </section>

        {/* Hidden template form for Netlify */}
        <form
          name="novator-application"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          encType="multipart/form-data"
          hidden
        >
          <input type="hidden" name="form-name" value="novator-application" />
          <input type="hidden" name="role" value="TEMPLATE_ROLE" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="file" name="resume" />
          <input type="text" name="page" />
          <input name="bot-field" />
        </form>
      </main>
    </>
  );
}
