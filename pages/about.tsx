// pages/about.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const CONTAINER_STORY = "max-w-[54rem] mx-auto px-4 sm:px-6 lg:px-8";
const MUTED = "text-zinc-300";

// Match index.tsx button styles
const BTN_SOLID =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30";
const BTN_OUTLINE =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const HELENE_MEDIA = [
  "/d1.jpeg",
  "/d2.jpeg",
  "/d3.jpeg",
  "/d4.jpeg",
  "/d5.jpeg",
  "/d7.jpeg",
  "/d8.jpeg",
];

function CollapsibleText() {
  const [expanded, setExpanded] = useState(false);
  const BODY_STYLE = "font-sans text-base leading-relaxed text-zinc-200";
  const BUTTON_STYLE =
    "mt-4 inline-block font-sans text-base leading-relaxed text-[#00b4d8] hover:opacity-80 cursor-pointer";

  return (
    <div className={`mt-4 ${BODY_STYLE}`}>
      <p>
        On September 26–27, 2024, Hurricane Helene struck North Carolina with
        record rainfall and destructive winds that caused catastrophic flooding.
        Western counties were hit hardest.
      </p>

      {!expanded && (
        <button onClick={() => setExpanded(true)} className={BUTTON_STYLE}>
          More Info
        </button>
      )}

      {expanded && (
        <>
          <p className="mt-4">
            Power grids failed, debris flows blocked access, and flash floods
            isolated entire mountain communities.
          </p>
          <p className="mt-4">
            Novator Group was already staged in the region. Within hours, our
            teams moved from assessment to full operations across 27 disaster
            sites. We reopened routes, restored off-grid power and satellite
            communications, delivered water and medical supplies, and conducted
            aerial damage surveys.
          </p>
          <p className="mt-4">
            In the months that followed, we worked alongside first responders,
            the National Guard, the U.S. Army, and relief crews from across 40
            states as well as Puerto Rico, Guam, El Salvador, and Venezuela.
            Together we stabilized communities, re-established lifelines, and
            set the foundation for recovery.
          </p>
          <p className="mt-4">
            These photos show both the scale of the devastation and the
            discipline of those who stepped forward.
          </p>
          <button onClick={() => setExpanded(false)} className={BUTTON_STYLE}>
            Show Less
          </button>
        </>
      )}
    </div>
  );
}

export default function AboutPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Our Mission — Novator Group</title>
        <meta
          name="description"
          content="With empathy and precision, Novator Group restores power, secures operations, and deploys AI-driven software for resilient crisis recovery."
        />
      </Head>
      <main className="min-h-screen w-full bg-black text-white">
        {/* HERO */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          <Image
            unoptimized
            src="/boat.png"
            alt="Field operations backdrop"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          <div className={`${CONTAINER} relative z-10 text-center py-10`}>
            <motion.h1
              {...fade}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              What We Do
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl ${MUTED}`}
            >
              Novator Group delivers rapid deployment infrastructure, protective
              operations, and scalable field support for mission-critical
              environments.
            </motion.p>

            {/* Buttons styled same as index */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/careers" className={BTN_OUTLINE}>
                Join Our Team
              </Link>
              <Link href="pages/partner" className={BTN_SOLID}>
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        {/* ---- MISSION HIGHLIGHT ---- */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER_STORY} py-10 sm:py-14 text-center`}>
            <motion.h2
              {...fade}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Mission Highlight
            </motion.h2>
            <motion.h3
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-sky-400"
            >
              Hurricane Helene
            </motion.h3>
          </div>

          <div className={`${CONTAINER_STORY} text-left`}>
            <CollapsibleText />

            {/* Photo strip */}
            <div className="mt-8 overflow-x-auto">
              <div className="flex gap-3 min-w-max">
                {HELENE_MEDIA.map((src, i) => (
                  <div
                    key={src}
                    onClick={() => setActive(src)}
                    className="relative h-40 w-64 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer hover:scale-[1.02] transition"
                  >
                    <Image
                      unoptimized
                      fill
                      src={src}
                      alt={`Hurricane Helene response ${i + 1}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            {active && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setActive(null)}
              >
                <div className="relative max-w-5xl w-full h-[80vh]">
                  <Image
                    unoptimized
                    fill
                    src={active}
                    alt="Hurricane Helene full view"
                    className="object-contain"
                  />
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full px-3 py-1 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-black border-b border-white/10">
          <div className={`${CONTAINER} py-14`}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                A Word from Our Founder
              </h2>

              <motion.blockquote {...fade}>
                <p className="text-base leading-relaxed italic text-left text-white">
                  "Novator Group leads the industry in modular power, satellite
                  communications, AI integration, rapid scalability, and expert
                  personnel. Our greatest asset is our people. We recruit only
                  those with proven skill, grit, and the willingness to
                  sacrifice for something greater than themselves.
                </p>

                <p className="mt-4 text-base leading-relaxed italic text-left text-white">
                  Novator means innovator, but for us it’s more than a name,
                  it’s a commitment. We exist to strengthen communities while
                  reducing the burden on those who fund their protection. By
                  designing systems that are faster, more resilient, and more
                  affordable, we give our clients the ability to safeguard lives
                  and critical operations while reducing operation costs.
                  <br />
                  <br />
                  If you believe our teams can assist you in a time of need but
                  cost is a barrier, reach out to me directly,{" "}
                  <a
                    href="mailto:Johnmills@novatorops.com"
                    className="underline hover:text-sky-300"
                  >
                    Johnmills@novatorops.com"
                  </a>
                </p>

                <footer className="mt-10 flex flex-col items-center gap-3 text-sm text-zinc-400">
                  <Image
                    unoptimized
                    src="/founder.png"
                    alt="John Mills"
                    width={96}
                    height={96}
                    className="rounded-2xl border border-white/10 object-cover"
                  />
                  – John Mills
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section>
          <div className={`${CONTAINER_STORY} py-8 text-center`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Who We’ve Partnered With
            </h2>
            <p className={`mt-3 text-base ${MUTED}`}>
              FEMA • American Red Cross • U.S. Military • State Agencies •
              Municipal Partners • Private Sector
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
