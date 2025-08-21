// pages/about.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const CONTAINER_STORY = "max-w-[54rem] mx-auto px-4 sm:px-6 lg:px-8"; // narrower story container
const MUTED = "text-zinc-300";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Our Story — Novator Group</title>
        <meta
          name="description"
          content="How Novator Group blends field-tested operations, engineering, and software innovation to deliver rapid, efficient solutions in any environment."
        />
      </Head>

      <main className="min-h-screen w-full bg-[#0d1b2a] text-white">
        {/* HERO with cinematic video/image + paragraph + KPIs below paragraph */}
        <section className="relative h-[68vh] sm:h-[72vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          <Image
            unoptimized
            src="https://www.novatorgroupllc.com/boat.png"
            alt="Field operations backdrop"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1b2a]/90" />

          <div className={`${CONTAINER} relative z-10 text-center`}>
            <motion.h1
              {...fade}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Our Story
            </motion.h1>

            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-5 max-w-3xl mx-auto text-lg ${MUTED}`}
            >
              We are operators, engineers, and software builders. Novator Group exists to restore
              order fast—whether that means turning the lights back on, standing up secure sites,
              or building the tech that keeps agencies working as one.
            </motion.p>

            {/* KPIs directly below the paragraph, inside the hero */}
            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.18 }}
              className="mt-8 max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { k: "200K+", l: "Personnel Hours" },
                  { k: "27+", l: "Operations" },
                  { k: "10+", l: "Years" },
                  { k: "100%", l: "Debt-Free" },
                ].map((x, i) => (
                  <div
                    key={x.l}
                    className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-4"
                  >
                    <div className="text-xl sm:text-2xl font-semibold">{x.k}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-300/85">
                      {x.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN (narrowed container) */}
        <section className="border-b border-white/10">
          <div
            className={`${CONTAINER_STORY} py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            <motion.div {...fade} className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">From the Beginning</h2>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                Our backgrounds span education, engineering, the military, first responder units,
                and blue-collar trades. We’ve been teachers, builders, soldiers, and software
                engineers. That mix gave us both the grit to operate in chaos and the vision to
                design smarter systems.
              </p>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                We saw how state and local organizations struggled to coordinate—response slowed,
                costs mounted, and efficiency slipped away. We knew communities deserved more than
                just manpower; they needed <span className="font-semibold text-white">better tools and faster execution</span>.
              </p>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>That’s why we built Novator Group.</p>
            </motion.div>

            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.06 }}
              className="lg:col-span-6"
            >
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#1b263b]">
                <Image
                  unoptimized
                  src="https://www.novatorgroupllc.com/founder.png"
                  alt="Founder — John Mills"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMMUNITY + MISSION (narrowed container) */}
        <section className="border-b border-white/10">
          <div
            className={`${CONTAINER_STORY} py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.06 }}
              className="lg:col-span-6 lg:order-2"
            >
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#1b263b]">
                <Image
                  unoptimized
                  src="/community.jpg" // ✅ add this to /public
                  alt="Community healing together"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              </div>
            </motion.div>

            <motion.div {...fade} className="lg:col-span-6 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold">Why We Exist</h2>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                We’re not just disaster response. Novator is a <span className="font-semibold text-white">tech-progressive
                operations company</span>, integrating power systems, protective teams, and <span className="font-semibold text-white">software
                dashboards</span> that keep agencies, partners, and responders aligned.
              </p>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                Our engineers and developers build tools that cut waste, reduce costs, and multiply
                capability. The result: faster missions, fewer bottlenecks, and solutions that scale
                across crises, deployments, and private sector projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHO WE’VE WORKED WITH — directly below Why We Exist */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER_STORY} py-10`}>
            <h3 className="text-xl sm:text-2xl font-semibold">Who We’ve Worked With</h3>
            <p className={`mt-3 ${MUTED}`}>
              FEMA • American Red Cross • U.S. military units • State agencies • Municipal partners •
              Private sector operators
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "FEMA",
                "American Red Cross",
                "U.S. Military",
                "State Agencies",
                "Municipal Partners",
                "Private Sector",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#0f2337] border-b border-white/10">
          <div className={`${CONTAINER} py-16 sm:py-20`}>
            <motion.blockquote {...fade} className="max-w-4xl mx-auto text-center">
              <p className="text-xl sm:text-2xl font-light italic leading-relaxed">
                “We built Novator Group to respond quickly, connect agencies through technology,
                and deliver operations that are faster, leaner, and more efficient.”
              </p>
              <footer className="mt-6 text-sm text-zinc-400">
                — John Mills, Founder & Director of Operations
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className={`${CONTAINER} py-14 text-center`}>
            <h3 className="text-xl sm:text-2xl font-semibold">Our story is still unfolding</h3>
            <p className={`mt-2 max-w-2xl mx-auto ${MUTED}`}>
              From restoring power grids to writing software that synchronizes response, Novator is
              pushing for smarter, faster, leaner missions. If you share our belief in progressive
              solutions, we’d love to work with you.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/careers"
                className="rounded-xl px-6 py-3 text-sm font-medium bg-white text-black hover:brightness-110 transition"
              >
                Join the Team
              </Link>
              <Link
                href="/#request-service"
                className="rounded-xl px-6 py-3 text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-8" />
      </main>
    </>
  );
}
