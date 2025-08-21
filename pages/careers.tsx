import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const CONTAINER = "max-w-7xl mx-auto";
const CARD_BG = "#1b263b"; // subtle steel

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
      "Provide licensed armed security for high-risk deployments. Maintain perimeter discipline, coordinate movement and access, and file concise after-action notes.",
    pay: "$450/day",
    requirements: ["Clean background", "Firearm license", "Security experience"],
  },
  {
    title: "Boat Rescue",
    description:
      "Assist in high-water evacuation and supply missions. Operate small craft safely in variable conditions and execute SAR checklists under ICS alignment.",
    pay: "$500/day",
    requirements: ["Swimmer certification", "Boat handling experience", "Rescue training"],
  },
  {
    title: "Drone Operator",
    description:
      "Deploy drones for reconnaissance and real-time intel. Coordinate flight corridors, collect imagery, and stream situational updates to dashboards.",
    pay: "$400/day",
    requirements: ["FAA Part 107 license", "Drone ops experience", "Map reading skills"],
  },
  {
    title: "Software Engineer",
    description:
      "Build and maintain mission-critical tech: real-time maps, integrations, and reporting. Own features end-to-end with a bias for shipping under pressure.",
    pay: "$600/day",
    requirements: ["React/Next.js", "API integrations", "On-call availability"],
  },
];

/** Columns: 1 (mobile), 2 (tablet), 3 (desktop) */
function useColumnCount() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const compute = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w >= 1024) setCols(3);
      else if (w >= 768) setCols(2);
      else setCols(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cols;
}

/** Prevent toggling when clicking real controls */
function isInteractiveClick(e: React.MouseEvent) {
  const t = e.target as HTMLElement;
  return !!t.closest("button, a, input, select, textarea, label, [data-no-toggle]");
}

/** Netlify-enabled inline resume form (used per-card and in footer CTA) */
function ResumeForm({ role = "General Application" }: { role?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      // Netlify requires form-name in the payload as well
      if (!fd.get("form-name")) fd.append("form-name", "resume-submission");
      if (!fd.get("position")) fd.append("position", role);
      await fetch("/", { method: "POST", body: fd });
      setDone(true);
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      alert("Upload failed. Please try again or email careers@novatorgroupllc.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sky-100 text-sm">
      Thanks — your resume for <span className="font-semibold">{role}</span> was received.
    </div>
  );

  return (
    <form
      ref={formRef}
      name="resume-submission"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      {/* required for Netlify */}
      <input type="hidden" name="form-name" value="resume-submission" />
      <input type="hidden" name="subject" value={`New Resume — ${role}`} />
      <input type="hidden" name="position" value={role} />
      {/* honeypot */}
      <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>

      <label className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-sky-300/80">Full Name</span>
        <input name="name" required className="rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30" placeholder="Jane Doe" />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-sky-300/80">Email</span>
        <input name="email" type="email" required className="rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30" placeholder="jane@example.com" />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-sky-300/80">Phone (optional)</span>
        <input name="phone" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30" placeholder="(555) 555-1234" inputMode="tel" />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-sky-300/80">LinkedIn (optional)</span>
        <input name="linkedin" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30" placeholder="https://linkedin.com/in/you" />
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-[11px] uppercase tracking-widest text-sky-300/80">Resume</span>
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="rounded-md bg-white/5 border border-white/10 px-3 py-2 file:mr-3 file:rounded file:border-0 file:bg-white/90 file:px-3 file:py-1.5 file:text-slate-900"
          onChange={(e) => {
            const f = e.currentTarget.files?.[0];
            if (f && f.size > 8 * 1024 * 1024) {
              alert("Please upload a file 8 MB or smaller.");
              e.currentTarget.value = "";
            }
          }}
        />
        <span className="text-[11px] text-sky-200/70 mt-1">PDF, DOC, or DOCX.</span>
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-[11px] uppercase tracking-widest text-sky-300/80">Notes (optional)</span>
        <textarea name="notes" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30 min-h-[84px]" placeholder="Availability, locations, special quals…" />
      </label>
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-semibold hover:brightness-105 disabled:opacity-50"
        >
          {submitting ? "Uploading…" : "Submit Resume"}
        </button>
      </div>
    </form>
  );
}

export default function CareersPage() {
  const titles = useMemo(() => careers.map((c) => c.title), []);
  const cols = useColumnCount();
  const isDesktop = cols === 3;

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
  const [openGeneral, setOpenGeneral] = useState(false);

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
      return;
    }
    const nextOpen = !openMap[title];
    setOpenMap((prev) => ({ ...prev, [title]: nextOpen }));
    if (!nextOpen) setApplyMap((prev) => ({ ...prev, [title]: false }));
  };

  // Open the Apply form. To close, user presses "Hide".
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
        <style>{`html,body,#__next{background:#000}`}</style>
      </Head>

      <main className="bg-black text-white min-h-screen font-sans">
        {/* Simple welcome */}
        <header className={`${CONTAINER} px-5 pt-24 pb-8`}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Welcome to Novator Group</h1>
          <p className="mt-2 text-sm sm:text-base text-sky-100/85 max-w-prose">
            We focus on essential work with steady execution. Clear roles, consistent communication, and a team that supports one another.
          </p>
        </header>

        {/* Why Novator — measured tone */}
        <section className={`${CONTAINER} px-5 pb-8`}>
          <h2 className="text-lg sm:text-xl font-semibold">Why Novator Group</h2>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-sky-100/90">
            <li>
              <span className="font-medium">Contribute quickly:</span> standard kits and checklists help you be productive from day one.
            </li>
            <li>
              <span className="font-medium">Integrated team:</span> power, communications, security, and software operate together to reduce handoffs and delays.
            </li>
            <li>
              <span className="font-medium">Safety and rest:</span> rotations are planned in advance to sustain performance.
            </li>
            <li>
              <span className="font-medium">Growth through practice:</span> cross-train across operations, rescue, communications, and technology; responsibility increases as you demonstrate capability.
            </li>
          </ul>
        </section>

        {/* Roles grid */}
        <section className={`${CONTAINER} px-5 pb-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                  {/* Header */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                    <div className="text-xs sm:text-sm text-sky-200/85 mt-0.5">Pay: {career.pay}</div>
                    <p
                      className="text-[13px] sm:text-sm text-slate-200/90 mt-3"
                      style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
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
                        aria-live="polite"
                      >
                        <div className="p-4 sm:p-5 pt-3">
                          <div className="text-[13px] sm:text-[15px] text-sky-100/90 leading-relaxed">
                            {career.description}
                          </div>
                          <div className="mt-3">
                            <div className="text-[11px] uppercase tracking-widest text-sky-300/80 mb-1">Requirements</div>
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

                  {/* Footer actions */}
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

                    {/* Show Apply only when form is not open. Hide it once the form is open. */}
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
                          <ResumeForm role={title} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA — now a drop-down resume submission box */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-300 mb-3">
              Don’t see a role that fits? We’d still love to hear from you.
            </p>
            <button
              type="button"
              onClick={() => setOpenGeneral((s) => !s)}
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-semibold hover:brightness-105"
              aria-expanded={openGeneral}
              aria-controls="general-apply"
            >
              {openGeneral ? "Hide Resume Box" : "Submit Resume"}
            </button>

            <AnimatePresence initial={false}>
              {openGeneral && (
                <motion.div
                  id="general-apply"
                  key="general-apply"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="mx-auto max-w-3xl text-left rounded-2xl border border-white/10 bg-[#0d1b2a] p-5">
                    <div className="text-[11px] uppercase tracking-widest text-sky-300/80 mb-2">
                      General Application
                    </div>
                    <ResumeForm role="General Application" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Hidden template form ensures Netlify indexes fields at build time */}
        <form name="resume-submission" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="resume-submission" />
          <input type="text" name="position" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="linkedin" />
          <input type="file" name="resume" />
          <textarea name="notes" />
        </form>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
