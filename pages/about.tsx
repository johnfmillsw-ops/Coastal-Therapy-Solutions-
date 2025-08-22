import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const CONTAINER_STORY = "max-w-[54rem] mx-auto px-4 sm:px-6 lg:px-8";
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
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[72vh] flex items-center justify-center overflow-hidden border-b border-white/10 pb-8 sm:pb-12">
          <Image
            unoptimized
            src="https://www.novatorgroupllc.com/boat.png"
            alt="Field operations backdrop"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1b2a]/90" />
          <div className={`${CONTAINER} relative z-10 text-center py-6 sm:py-8`}>
            <motion.h1
              {...fade}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Our Story
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-4 sm:mt-5 max-w-3xl mx-auto text-base sm:text-lg ${MUTED}`}
            >
              Novator Group was born out of moments when systems broke down and communities were left
              waiting. We saw the lights go out, communications fall silent, and security stretched
              thin and how the cost was measured not only in dollars, but in lost time and confidence.
              That’s why we built Novator Group. From rapid power and connectivity to protective
              operations and crisis management, we create modular solutions that restore order
              quickly, scale to the size of the challenge, and give clients the ability to move
              forward with resilience and efficiency.
            </motion.p>
            {/* KPIs — single box with both items, matching homepage design */}
            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.18 }}
              className="mt-6 sm:mt-8 max-w-lg mx-auto"
            >
              <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/10 w-fit mx-auto">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
                  {[
                    { value: "200K+", label: "Personnel Hours" },
                    { value: "27+", label: "Disaster Zones" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold leading-none">{value}</div>
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

        {/* WHO WE’VE WORKED WITH */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER_STORY} py-8 sm:py-10 text-center`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Who We’ve Worked With</h3>
            <p className={`mt-2 sm:mt-3 text-sm sm:text-base ${MUTED}`}>
              FEMA • American Red Cross • U.S. military units • State agencies • Municipal partners •
              Private sector operators
            </p>
          </div>
        </section>

        {/* QUOTE — photo left, quote right */}
        <section className="bg-[#0f2337] border-b border-white/10">
          <div className={`${CONTAINER} py-12 sm:py-16 md:py-20`}>
            <div className="mx-auto flex max-w-4xl flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="shrink-0">
                <Image
                  unoptimized
                  src="https://www.novatorgroupllc.com/founder.png"
                  alt="John Mills — Director of Operations"
                  width={100}
                  height={100}
                  className="rounded-2xl border border-white/10 object-cover"
                />
              </div>
              <motion.blockquote {...fade} className="text-center sm:text-left">
                <p className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed">
                  “We built Novator Group to respond quickly, connect agencies through technology,
                  and deliver operations that are faster, leaner, and more efficient.”
                </p>
                <footer className="mt-4 sm:mt-6 text-sm text-zinc-400">
                  — John Mills, Director of Operations
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className={`${CONTAINER} py-10 sm:py-14 text-center`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Our story is still unfolding</h3>
            <p className={`mt-2 max-w-2xl mx-auto text-sm sm:text-base ${MUTED}`}>
              From restoring power grids to writing software that synchronizes response, Novator is
              pushing for smarter, faster, leaner missions. If you share our belief in progressive
              solutions, we’d love to work with you.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3">
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
        <div className="pb-8 sm:pb-12" />
      </main>
    </>
  );
}