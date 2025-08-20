// pages/careers.tsx
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const STEEL = "#1b263b";
const CONTAINER = "max-w-7xl mx-auto";

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
      "Provide licensed armed security for high-risk deployments. Maintain perimeter discipline, coordinate with command for movement and site access, and file concise after-action notes.",
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

// Placeholder image per role (swap with real images when ready)
const roleImage: Record<CareerTitle, string> = {
  "Armed Guard": "/placeholder-role.jpg",
  "Boat Rescue": "/placeholder-role.jpg",
  "Drone Operator": "/placeholder-role.jpg",
  "Software Engineer": "/placeholder-role.jpg",
};

/** Responsive columns helper (mobile=1, tablet=2, desktop=3) */
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

/** Ignore card toggle if click starts on an interactive element */
function isInteractiveClick(e: React.MouseEvent) {
  const t = e.target as HTMLElement;
  return !!t.closest("button, a, input, select, textarea, label, [data-no-toggle]");
}

/** Motion helpers */
const spring = { type: "spring", stiffness: 240, damping: 30 };
const fadeEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Inline Resume Form (per-card) */
function ResumeForm({ role, onDone }: { role: string; onDone?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !file) return;
    setSubmitting(true);
    try {
      // TODO: send to your API with FormData
      const payload = { role, name, email, phone, linkedin, notes, fileName: file?.name };
      console.log("Resume submission:", payload);
      setDone(true);
      onDone?.();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sky-100">
        <div className="font-semibold">Thanks — we received your resume for {role}.</div>
        <div className="text-sm opacity-80 mt-1">We’ll get back to you shortly.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Full Name</span>
        <input
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Jane Doe"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Email</span>
        <input
          type="email"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jane@example.com"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Phone (optional)</span>
        <input
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 555-1234"
          inputMode="tel"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">LinkedIn (optional)</span>
        <input
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="https://linkedin.com/in/you"
        />
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Resume</span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 file:mr-3 file:rounded-md file:border-0 file:bg-white/90 file:px-3 file:py-1.5 file:text-slate-900"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
        <span className="text-[12px] text-sky-200/70 mt-1">PDF, DOC, or DOCX.</span>
      </label>
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">Notes (optional)</span>
        <textarea
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40 min-h-[90px]"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Availability, locations, special qualifications…"
        />
      </label>
      <div className="md:col-span-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={onDone}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          data-no-toggle
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting || !name || !email || !file}
          className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110 disabled:opacity-50"
          data-no-toggle
        >
          {submitting ? "Submitting…" : "Send Application"}
        </button>
      </div>
    </form>
  );
}

export default function CareersPage() {
  const titles = useMemo(() => careers.map((c) => c.title), []);
  const cols = useColumnCount();
  const isDesktop = cols === 3;

  // Per-card open state (details)
  const [openMap, setOpenMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Boat Rescue": false,
    "Drone Operator": false,
    "Software Engineer": false,
  });
  // Per-card "apply" state
  const [applyMap, setApplyMap] = useState<Record<CareerTitle, boolean>>({
    "Armed Guard": false,
    "Boat Rescue": false,
    "Drone Operator": false,
    "Software Engineer": false,
  });

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

  const toggleApply = (idx: number) => {
    const title = titles[idx] as CareerTitle;
    if (!openMap[title]) {
      if (isDesktop) setRowOpenState(idx, true);
      else setOpenMap((prev) => ({ ...prev, [title]: true }));
    }
    setApplyMap((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const closeApply = (title: CareerTitle) =>
    setApplyMap((prev) => ({ ...prev, [title]: false }));

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
          .careers-hero { min-height: 52vh; }
          @media (max-width: 767px) { .careers-hero { min-height: 58vh; } }
          @supports (height: 100lvh) {
            .careers-hero { min-height: 52lvh; }
            @media (max-width: 767px) { .careers-hero { min-height: 58lvh; } }
          }

          /* marquee for Why-join band */
          @keyframes novator-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            white-space: nowrap;
          }
          .marquee-item {
            display: inline-block;
            padding-left: 100%;
            animation: novator-marquee 28s linear infinite;
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
              We build calm where it’s loud. If you want work that matters on the days that matter, you’ll fit in.
            </motion.p>
          </div>
        </header>

        {/* WHY JOIN — manifesto style (no ‘container cards’) */}
        <section className="px-6 py-14 relative overflow-hidden">
          {/* subtle marquee band */}
          <div className="absolute inset-x-0 -top-6 h-10 overflow-hidden opacity-60">
            <div className="marquee-track text-[11px] tracking-[0.25em] uppercase text-sky-300/20">
              <span className="marquee-item">
                Uptime • Comms • Security • Intel • Logistics • Fieldcraft • Training • Rest Cycles • Safety •
                Uptime • Comms • Security • Intel • Logistics • Fieldcraft • Training • Rest Cycles • Safety •
              </span>
            </div>
          </div>

          <div className={`${CONTAINER}`}>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left: big type manifesto */}
              <div className="lg:col-span-6">
                <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                  Why join Novator Group
                </h2>

                <div className="mt-6 relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/60 to-transparent" />
                  <p className="text-xl md:text-2xl font-bold leading-snug">
                    Ship outcomes, not slide decks.
                  </p>
                  <p className="text-xl md:text-2xl font-bold leading-snug mt-3">
                    Field-first teams. Zero drama. Clear comms.
                  </p>
                  <p className="text-xl md:text-2xl font-bold leading-snug mt-3">
                    Real gear. Real training. Real sleep.
                  </p>
                  <p className="text-xl md:text-2xl font-bold leading-snug mt-3">
                    Credit given. Growth earned.
                  </p>
                </div>

                <ul className="mt-8 space-y-3 text-sky-100/90 text-[15px] leading-relaxed">
                  <li>Per-diem & travel covered on deployments.</li>
                  <li>Rotations planned for rest and safety — not as an afterthought.</li>
                  <li>Cross-train across ops, comms, UAS, and software if you want range.</li>
                  <li>Direct impact: your work shows up in the command picture the same day.</li>
                </ul>
              </div>

              {/* Right: image collage (no boxes) */}
              <div className="lg:col-span-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="grid grid-cols-3 gap-3">
                  <img src="/placeholder-1.jpg" alt="" className="h-56 md:h-64 w-full object-cover rounded-2xl opacity-95" />
                  <img src="/placeholder-2.jpg" alt="" className="h-80 md:h-96 w-full object-cover rounded-2xl opacity-95 mt-6" />
                  <img src="/placeholder-3.jpg" alt="" className="h-64 md:h-72 w-full object-cover rounded-2xl opacity-95 mt-3" />
                </div>
                <p className="mt-3 text-xs text-sky-300/70">
                  Images are placeholders — swap with your field shots when ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles grid */}
        <section className="px-6 pt-0 pb-12">
          <LayoutGroup id="careers-grid">
            <motion.div
              layout
              transition={{ layout: { duration: 0.32, ease: fadeEase } }}
              className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
            >
              {careers.map((career, idx) => {
                const title = career.title;
                const open = openMap[title];
                const applying = applyMap[title];
                const detailsId = `details-${idx}`;
                const applyId = `apply-${idx}`;

                return (
                  <motion.div
                    key={title}
                    layout
                    transition={{ layout: { duration: 0.32, ease: fadeEase } }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-full rounded-3xl text-left shadow-xl border border-white/10 overflow-hidden flex flex-col will-change-transform focus:outline-none"
                    style={{ backgroundColor: STEEL }}
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
                    <div className="p-5 relative">
                      {/* top-right placeholder image */}
                      <div className="absolute top-4 right-4 h-12 w-12 rounded-xl overflow-hidden border border-white/15">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={roleImage[title]}
                          alt={`${title} placeholder`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <h2 className="text-xl font-semibold text-white pr-16">{title}</h2>
                      <div className="mt-1 text-sky-200/90 text-sm font-medium">Pay: {career.pay}</div>

                      {/* Brief summary (pre-expand) */}
                      <p
                        className="text-[#cbd5e1] text-sm mt-3"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {career.description}
                      </p>
                    </div>

                    {/* Expanded details: Description + Requirements */}
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
                          <div className="px-5 pb-5 pt-0">
                            <div className="grid gap-6">
                              <div>
                                <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                  Job Description
                                </div>
                                <p className="text-[15px] leading-relaxed text-sky-100/90">
                                  {career.description}
                                </p>
                              </div>

                              <div>
                                <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                  Requirements
                                </div>
                                <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                                  {career.requirements.map((req) => (
                                    <li key={req} className="flex gap-2">
                                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
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
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(idx);
                        }}
                        className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[90px] text-left"
                        data-no-toggle
                      >
                        {open ? "Hide" : "More Info"}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleApply(idx);
                        }}
                        className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-slate-900 hover:brightness-110 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                        aria-controls={applyId}
                        aria-expanded={applying}
                        data-no-toggle
                      >
                        {applying ? "Close Form" : "Apply"}
                      </button>
                    </motion.div>

                    {/* Apply form (second expansion) */}
                    <AnimatePresence initial={false}>
                      {open && applying && (
                        <motion.div
                          key="apply"
                          layout
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ ...spring, opacity: { duration: 0.18, ease: fadeEase } }}
                          style={{ overflow: "hidden", willChange: "height,opacity" }}
                          id={applyId}
                        >
                          <div className="px-5 pb-5">
                            <div className="mb-3 text-xs uppercase tracking-widest text-sky-300/80">
                              Apply for {title}
                            </div>
                            <ResumeForm role={title} onDone={() => closeApply(title)} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-slate-900 hover:brightness-110 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
              >
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
