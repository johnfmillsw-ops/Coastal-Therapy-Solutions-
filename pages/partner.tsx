import Head from "next/head";
import { motion } from "framer-motion";

const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const MUTED = "text-zinc-300";

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
          content="Partner or supply with Novator Group to deliver resilient emergency response, infrastructure, and protective operations."
        />
      </Head>
      <main className="min-h-screen w-full bg-black text-white">
        {/* HERO */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER} py-16 text-center`}>
            <motion.h1
              {...fade}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Partner With Us
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-4 max-w-3xl mx-auto text-base sm:text-lg ${MUTED}`}
            >
              Novator Group collaborates with agencies, innovators, and suppliers 
              to deliver resilient infrastructure and emergency response. 
              If you have capabilities, technology, or services that strengthen 
              disaster response and protective operations, we’d like to hear from you.
            </motion.p>
          </div>
        </section>

        {/* FORM SECTION */}
        <section>
          <div className={`${CONTAINER} py-12 sm:py-16`}>
            <motion.h2
              {...fade}
              className="text-2xl sm:text-3xl font-semibold text-center"
            >
              Reach Out
            </motion.h2>
            <p className={`mt-3 text-sm sm:text-base text-center ${MUTED}`}>
              Fill out the form below and our team will get back to you.
            </p>

            <form
              name="partner-form"
              method="POST"
              data-netlify="true"
              className="mt-8 max-w-2xl mx-auto space-y-5"
            >
              <input type="hidden" name="form-name" value="partner-form" />

              <div>
                <label className="block text-sm font-medium mb-1">
                  Organization / Supplier Name
                </label>
                <input
                  type="text"
                  name="organization"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone (optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message / Capabilities
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-xl px-6 py-3 text-sm font-medium bg-white text-black hover:brightness-110 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
