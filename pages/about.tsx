import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const CONTAINER_STORY = "max-w-[54rem] mx-auto px-4 sm:px-6 lg:px-8";
const MUTED = "text-zinc-300";

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

export default function AboutPage() {
  const [active, setActive] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
          <div className={`${CONTAINER} relative z-10 text-center py-10`}>
            <motion.h1
              {...fade}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Our Mission
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-4 max-w-3xl mx-auto text-base sm:text-lg ${MUTED}`}
            >
              Novator Group delivers{" "}
              <strong>rapid deployment infrastructure</strong>,{" "}
              <strong>protective operations</strong>, and{" "}
              <strong>scalable field support</strong> for mission critical
              environments. From <strong>mobile command centers</strong> and{" "}
              <strong>off grid power</strong> to{" "}
              <strong>licensed security</strong>,{" "}
              <strong>drone support</strong>, and{" "}
              <strong>AI enabled tools</strong> — our surge model flexes from a
              small cell to hundreds of vetted personnel with speed, stability,
              and integrity.
            </motion.p>
          </div>
        </section>

        {/* ---- MISSION HIGHLIGHT: HURRICANE HELENE ---- */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER_STORY} py-10 sm:py-14`}>
            <motion.h3
              {...fade}
              className="text-xl sm:text-2xl md:text-3xl font-semibold"
            >
              Mission Highlight: Hurricane Helene (2024)
            </motion.h3>

            {/* Expandable text */}
            <div className="mt-3 text-sm sm:text-base">
              <p className={MUTED}>
                On September 26–27, 2024, Hurricane Helene unleashed record
                rainfall, destructive winds, and catastrophic flooding across
                North Carolina. Western counties were hit hardest, with
                widespread outages, debris flows, and flash floods that cut off
                entire mountain communities.
              </p>

              {showMore && (
                <p className={`mt-3 ${MUTED}`}>
                  Yancey County recorded a peak of 29.5 inches. Novator Group,
                  already staged in the region, shifted from assessment to full
                  operations within hours — supporting 27+ disaster sites by
                  restoring access routes, providing off-grid power and
                  satellite communications, delivering water and medical
                  supplies, and conducting aerial damage surveys. In the days
                  that followed, we worked alongside first responders, the
                  National Guard, U.S. Army, and relief crews from 40 states,
                  Puerto Rico, Guam, El Salvador, and Venezuela. Together, we
                  reopened critical routes, stabilized communities, and set
                  conditions for recovery. These photos capture both the scale
                  of the devastation and the discipline of those who answered
                  the call.
                </p>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-3 text-sky-400 hover:text-sky-300 text-sm"
              >
                {showMore ? "Show Less" : "More Info"}
              </button>
            </div>

            {/* Always visible photo strip */}
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

            {/* Lightbox overlay */}
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
          <div className={`${CONTAINER} py-12 sm:py-16 md:py-20`}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <Image
                  unoptimized
                  src="/founder.png"
                  alt="John Mills — Director of Operations"
                  width={100}
                  height={100}
                  className="rounded-2xl border border-white/10 object-cover"
                />
              </div>
              <motion.blockquote {...fade}>
                <p className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed">
                  "Novator Group leads the industry in{" "}
                  <strong>modular power</strong>,{" "}
                  <strong>satellite communications</strong>,{" "}
                  <strong>AI integration</strong>, and{" "}
                  <strong>rapid scalability</strong>. But our greatest asset
                  isn’t technology — it’s our people. They perform under
                  pressure with discipline, compassion, and an unbreakable will
                  to serve."
                </p>
                <footer className="mt-4 text-sm text-zinc-400">
                  — John Mills, Founder
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* WHO WE’VE WORKED WITH + CTA */}
        <section>
          <div className={`${CONTAINER_STORY} py-10 text-center`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Who We’ve Partnered With
            </h3>
            <p className={`mt-2 text-sm sm:text-base ${MUTED}`}>
              FEMA • American Red Cross • U.S. military units • State agencies •
              Municipal partners • Private sector innovators
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/careers"
                className="rounded-xl px-6 py-3 text-sm font-medium bg-white text-black hover:brightness-110 transition"
              >
                Join Our Team
              </Link>
              <Link
                href="/partner"
                className="rounded-xl px-6 py-3 text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-8 sm:pb-12" />
      </main>
    </>
  );
}
