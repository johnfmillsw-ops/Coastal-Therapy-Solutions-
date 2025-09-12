// pages/partner.tsx
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-10";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function PartnerPage() {
  return (
    <>
      <Head>
        <title>Partner With Us — Novator Group</title>
        <meta
          name="description"
          content="Novator Group partners with suppliers and subcontractors in defense and emergency response to deliver rapid, scalable solutions."
        />
      </Head>
      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative min-h-[40vh] flex items-center justify-center text-center border-b border-white/10">
          <div className={`${CONTAINER} py-16`}>
            <motion.h1
              {...fade}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Partner With Us
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300"
            >
              Novator Group is growing fast. We rely on trusted suppliers and
              subcontractors to expand our capabilities in defense and emergency
              response. Together, we can deliver mission-critical solutions
              faster, stronger, and at scale.
            </motion.p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 border-b border-white/10">
          <div className={CONTAINER}>
            <h2 className={SECTION_TITLE}>Why Work With Novator?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div {...fade} className="bg-[#1b263b] rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold text-sky-400 mb-3">
                  Consistent Demand
                </h3>
                <p className="text-zinc-300">
                  Our contracts span disaster response, defense, and critical
                  infrastructure — creating steady opportunities for suppliers
                  and subcontractors across industries.
                </p>
              </motion.div>

              <motion.div {...fade} transition={{ delay: 0.1 }} className="bg-[#1b263b] rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold text-sky-400 mb-3">
                  Fast Payments & Growth
                </h3>
                <p className="text-zinc-300">
                  We move at the speed of crisis. Our partners benefit from
                  streamlined onboarding, rapid invoicing cycles, and clear
                  pathways to expand alongside Novator Group.
                </p>
              </motion.div>

              <motion.div {...fade} transition={{ delay: 0.2 }} className="bg-[#1b263b] rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold text-sky-400 mb-3">
                  Shared Mission
                </h3>
                <p className="text-zinc-300">
                  Working with Novator means contributing to real-world impact:
                  restoring power, securing communities, and protecting people
                  when they need it most.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className={CONTAINER}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Supplier or Subcontractor
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-300 mb-8">
              We’re seeking logistics providers, equipment suppliers,
              construction firms, protective services, and technology vendors
              ready to support rapid deployment operations. Join us in building
              resilience at scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:johnmills@novatorops.com"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-white text-black shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Contact Us to Partner
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
