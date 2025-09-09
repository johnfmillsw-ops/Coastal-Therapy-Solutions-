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

// Hurricane Helene images (directly in /public/)
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
        <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[72vh] flex items-center justify-center overflow-hidden border-b border-white/10 pb-8 sm:pb-12">
          <Image
            unoptimized
            src="/boat.png"
            alt="Field operations backdrop"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
          <div className={`${CONTAINER} relative z-10 text-center py-6 sm:py-8`}>
            <motion.h1
              {...fade}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              What We Do
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-4 sm:mt-5 max-w-3xl mx-auto text-base sm:text-lg ${MUTED}`}
            >
              Novator Group is a Tampa-based company specializing in{" "}
              <strong>rapid deployment infrastructure</strong>,{" "}
              <strong>protective operations</strong>, and{" "}
              <strong>scalable field support</strong> for mission critical
              environments. We deliver{" "}
              <strong>mobile command centers</strong>,{" "}
              <strong>off grid power systems</strong>,{" "}
              <strong>licensed security teams</strong>,{" "}
              <strong>aerial and drone support</strong>, and{" "}
              <strong>AI enabled situational tools</strong>  engineered for
              flexible deployment across land, air, sea, and cyberspace. Our
              surge model scales from a small, specialized cell to hundreds of
              vetted personnel, supporting federal and state agencies, private
              partners, and local responders with stability, speed, and
              operational integrity.
            </motion.p>
            {/* KPIs */}
            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.18 }}
              className="mt-6 sm:mt-8 max-w-lg mx-auto"
            >
              <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/10 w-fit mx-auto">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
                  {[
                    { value: "200K+", label: "Hours Saving Lives" },
                    { value: "27+", label: "Crises Conquered" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold leading-none">
                        {value}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-gray-200 mt-2 leading-tight">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.05 }}
              className={`mt-3 text-sm sm:text-base ${MUTED}`}
            >
              One operation among dozens, Helene struck Western North Carolina
              with historic rainfall and infrastructure loss. Our teams staged
              with partners across Buncombe, McDowell, Avery and surrounding
              counties, pivoting from assessment to action within hours.
            </motion.p>

           

            {/* Results chips */}
            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.14 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              
     
              
            </motion.div>

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

            <p className={`mt-6 text-xs sm:text-sm ${MUTED}`}>
              Helene is a recent example  not an exception. Our team applies
              the same disciplined playbook to wildfires, tornadoes, floods and
              complex security operations across the U.S.
            </p>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-black border-b border-white/10">
          <div className={`${CONTAINER} py-12 sm:py-16 md:py-20`}>
            <div className="mx-auto flex max-w-4xl flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="shrink-0">
                <Image
                  unoptimized
                  src="/founder.png"
                  alt="John Mills — Director of Operations"
                  width={100}
                  height={100}
                  className="rounded-2xl border border-white/10 object-cover"
                />
              </div>
              <motion.blockquote {...fade} className="text-center sm:text-left">
                <p className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed">
                  "Novator Group leads the industry in{" "}
                  <strong>modular power</strong>,{" "}
                  <strong>satellite communications</strong>,{" "}
                  <strong>AI integration</strong>, and{" "}
                  <strong>rapid asset scalability</strong>  with more personnel
                  hours served in disaster zones over the past 12 months than
                  any comparable team. From a single backpack that can power and
                  connect an entire village, to an autonomous fleet capable of
                  navigating any terrain or climate for weeks without support 
                  we deliver unmatched capability in the world’s most
                  unforgiving conditions. But our greatest asset isn’t
                  technology  it’s our people. We only recruit those who
                  understand that sacrifice isn’t a choice  it’s a requirement.
                  Our teams operate 20-hour days, often for months at a time,
                  with no margin for error and no option to fail. They perform
                  under pressure  with discipline, compassion, and fierce
                  desire to serve."
                </p>
                <footer className="mt-4 sm:mt-6 text-sm text-zinc-400">
                  — John Mills, Founder
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* OTHER MISSIONS */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER} py-10 sm:py-14`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
              Other Missions & Focus Areas
            </h3>
            <p className={`mt-2 text-center text-sm sm:text-base ${MUTED}`}>
              A sampling of recent and ongoing work across the U.S.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ["Wildfire Support", "Power, comms, UAS damage mapping"],
                ["Tornado Response", "Route clearance & security posture"],
                ["Coastal Storms", "Shelter logistics & potable water"],
                ["Critical Events", "Licensed security & convoy ops"],
                ["Grid Outages", "Mobile micro-grids & monitoring"],
                ["Training & Exercises", "AI dashboards & playbooks"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="font-semibold">{title}</h4>
                  <p className={`mt-1 text-sm ${MUTED}`}>{desc}</p>
                </div>
              ))}
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
                href="/#request-service"
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
