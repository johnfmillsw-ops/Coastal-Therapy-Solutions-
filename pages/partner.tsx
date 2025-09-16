import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const CONTAINER = "max-w-7xl mx-auto px-6";
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
        <title>Partner With Us At Novator Group</title>
        <meta
          name="description"
          content="Partner with Novator Group as a supplier or subcontractor. Join fast-paced operations in defense and emergency response."
        />
      </Head>
      <main className="bg-black text-white min-h-screen font-sans">
        {/* Hero */}
        <section className="relative h-[55vh] sm:h-[65vh] flex items-center justify-center border-b border-white/10 overflow-hidden">
          <Image
            src="/AF.png"
            alt="Novator Group partner background"
            fill
            priority
            unoptimized
            className="object-cover opacity-60"
          />
          {/* Mild Overlay */}
          <div className="absolute inset-0 bg-black/30 z-0" />
          {/* Bottom Fade to Black */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black z-0" />
          <div className={`${CONTAINER} relative z-10 text-center`}>
            <motion.h1
              {...fade}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Partner With Novator Group
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-sky-100/85"
            >
              We collaborate with suppliers and subcontractors to deliver
              high impact solutions in defense and emergency response.
            </motion.p>
          </div>
        </section>
        {/* Body */}
        <section className={`${CONTAINER} py-12`}>
          <motion.h2
            {...fade}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-sky-400"
          >
            Why Partner With Us
          </motion.h2>
          <p className="text-sky-100/90 mb-6 leading-relaxed">
            As a Novator Group partner, you’ll be joining fast paced operations
            where speed, precision, and reliability matter most. Whether you
            provide logistics, equipment, skilled personnel, or niche expertise,
            we value partners who bring grit and professionalism to critical
            missions.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sky-100/90">
            <li>Opportunities in disaster response and defense contracts</li>
            <li>Rapid deployment alongside experienced field teams</li>
            <li>Direct access to decision makers for coordination</li>
            <li>Long-term subcontracting and supplier relationships</li>
            <li>Shared commitment to resilience and mission success</li>
          </ul>
        </section>
        {/* Careers CTA cross-link */}
        <section className="border-t-2 border-[#00b4d8]/40 bg-black py-14">
          <div className={`${CONTAINER} text-center`}>
            <motion.p
              {...fade}
              className="text-lg sm:text-xl text-sky-100/90 mb-6"
            >
              Looking for a role instead of partnership? Explore our open
              positions and join the Novator team.
            </motion.p>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-white shadow bg-gradient-to-r from-[#00b4d8] to-sky-600 hover:brightness-110"
            >
              View Careers
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}