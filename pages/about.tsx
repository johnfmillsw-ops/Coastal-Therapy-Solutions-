// pages/about.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
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
        {/* HERO */}
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
              We are operators, engineers, and software builders. Novator Group exists to
              restore order fast—whether that means turning the lights back on, standing up
              secure sites, or building the tech that keeps agencies working as one.
            </motion.p>
          </div>
        </section>

        {/* ORIGIN */}
        <section className="border-b border-white/10">
          <div
            className={`${CONTAINER} py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            <motion.div {...fade} className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">From the Beginning</h2>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                Our backgrounds span education, engineering, the military, first responder
                units, and blue-collar trades. We’ve been teachers, builders, soldiers, and
                software engineers. That mix gave us both the grit to operate in chaos and the
                vision to design smarter systems.
              </p>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                We saw how state and local organizations struggled to coordinate—response slowed,
                costs mounted, and efficiency slipped away. We knew communities deserved more
                than just manpower; they needed **better tools and faster execution**.
              </p>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                That’s why we built Novator Group.
              </p>
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

        {/* COMMUNITY + MISSION */}
        <section className="border-b border-white/10">
          <div
            className={`${CONTAINER} py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
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
                We’re not just disaster response. Novator is a **tech-progressive operations
                company**, integrating power systems, protective teams, and **software
                dashboards** that keep agencies, partners, and responders aligned.
              </p>
              <p className={`mt-4 text-base sm:text-lg ${MUTED}`}>
                Our engineers and developers build tools that cut waste, reduce costs, and
                multiply capability. The result: faster missions, fewer bottlenecks, and
                solutions that scale across crises, deployments, and private sector projects.
              </p>
            </motion.div>
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

        {/* MILESTONES */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER} py-12 sm:py-16`}>
            <h3 className="text-xl sm:text-2xl font-semibold text-center">Along the Way</h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { k: "200K+", l: "Personnel Hours", d: "Supporting missions nationwide" },
                { k: "27+", l: "Operations", d: "Disasters, deployments & secure sites" },
                { k: "10+", l: "Years", d: "Leadership in field & tech" },
                { k: "100%", l: "Debt-Free", d: "Focused on capability, not overhead" },
              ].map((m, i) => (
                <motion.div
                  key={m.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-semibold">{m.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-zinc-300/80">{m.l}</div>
                  <div className="mt-2 text-sm text-zinc-300/90">{m.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className={`${CONTAINER} py-14 text-center`}>
            <h3 className="text-xl sm:text-2xl font-semibold">Our story is still unfolding</h3>
            <p className={`mt-2 max-w-2xl mx-auto ${MUTED}`}>
              From restoring power grids to writing software that synchronizes response,
              Novator is pushing for smarter, faster, leaner missions. If you share our belief
              in progressive solutions, we’d love to work with you.
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
