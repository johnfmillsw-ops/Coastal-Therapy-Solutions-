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

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Novator Group</title>
        <meta
          name="description"
          content="Request services as a client or partner with Novator Group as a supplier or agency."
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
              Get In Touch & Partner With Us
            </motion.h1>
            <motion.p
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
              className={`mt-4 max-w-3xl mx-auto text-base sm:text-lg ${MUTED}`}
            >
              Clients can request operational support. Suppliers and agencies can
              propose partnerships. Please choose the form that applies to you.
            </motion.p>
          </div>
        </section>

        {/* CLIENT REQUEST FORM */}
        <section className="border-b border-white/10">
          <div className={`${CONTAINER} py-12 sm:py-16`}>
            <motion.h2
              {...fade}
              className="text-2xl sm:text-3xl font-semibold text-center"
            >
              Client Service Request
            </motion.h2>
            <p className={`mt-3 text-sm sm:text-base text-center ${MUTED}`}>
              For organizations or individuals needing immediate response,
              logistics, or operational support.
            </p>

            <form
              name="client-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-8 max-w-2xl mx-auto space-y-5"
            >
              <input type="hidden" name="form-name" value="client-form" />
              <input type="hidden" name="redirect" value="/thank-you" />

              {/* Honeypot */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Services Needed
                </label>
                <textarea
                  name="services"
                  rows={4}
                  required
                  placeholder="Brief description of what you need"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-xl px-6 py-3 text-sm font-medium bg-white text-black hover:brightness-110 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* PARTNER FORM */}
        <section>
          <div className={`${CONTAINER} py-12 sm:py-16`}>
            <motion.h2
              {...fade}
              className="text-2xl sm:text-3xl font-semibold text-center"
            >
              Partner With Us
            </motion.h2>
            <p className={`mt-3 text-sm sm:text-base text-center ${MUTED}`}>
              For suppliers, agencies, or innovators with capabilities or
              technology that strengthen disaster response and protective
              operations.
            </p>

            <form
              name="partner-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-8 max-w-2xl mx-auto space-y-5"
            >
              <input type="hidden" name="form-name" value="partner-form" />
              <input type="hidden" name="redirect" value="/thank-you" />

              {/* Honeypot */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

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
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
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
                  placeholder="Tell us what you can offer"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-xl px-6 py-3 text-sm font-medium bg-white text-black hover:brightness-110 transition"
                >
                  Submit Partnership
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
