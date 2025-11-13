import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import ScrollRevealImage from "../components/ScrollRevealImage";

/** ======= Lazy-load FAQ component ======= */
const FAQ = dynamic(() => import("../components/faq"), {
  ssr: false,
  loading: () => (
    <section className="py-16" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12"
          style={{
            fontFamily:
              '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
          }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[#627027] opacity-80">Loading…</p>
      </div>
    </section>
  ),
});

/** ======= Constants ======= */
const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const BTN_SUNSET =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition focus:outline-none focus:ring-2 focus:ring-pink-300";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12";

/** ======= Services ======= */
const SERVICES = [
  {
    title: "Eating Disorders",
    summary:
      "Evidence-based treatment for anorexia, bulimia, ARFID, and binge eating using CBT-E, FBT, and DBT.",
    image: "/2.png",
    href: "/services/eating-disorder",
  },
  {
    title: "Anxiety / Mood Disorders",
    summary:
      "Specialized care for anxiety, depression, bipolar, and panic using CBT, mindfulness, and ACT.",
    image: "/3.png",
    href: "/services/anxiety-mood",
  },
  {
    title: "Obsessive-Compulsive Disorder",
    summary:
      "ERP (Exposure & Response Prevention) and CBT tailored for OCD, intrusive thoughts, and compulsions.",
    image: "/4.png",
    href: "/services/ocd",
  },
  {
    title: "Trauma",
    summary:
      "EMDR, CPT, and trauma-focused CBT to process PTSD, complex trauma, and life-altering events.",
    image: "/5.png",
    href: "/services/trauma",
  },
];

/** ======= Simple Contact Form ======= */
function ContactForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  // TODO: Replace with your production webhook
  const endpoint = "https://jfm.app.n8n.cloud/webhook-test/get_data";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      data.forEach((v, k) => params.append(k, String(v)));
      params.append("form-name", "contact-form");
      params.append("subject", "New Contact Form Submission — Coastal Therapy Solutions");

      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setDone(true);
      onSubmitted?.();
    } catch (err) {
      console.error(err);
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        className="rounded-lg bg-white/80 p-6 text-[#627027] shadow-md"
        style={{
          fontFamily:
            '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
        }}
      >
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Forum, serif" }}>
          Thank You!
        </h3>
        <p className="text-sm">
          We've received your message. Our team will reach out soon to discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact-form"
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-6 max-w-xl mx-auto"
      style={{
        fontFamily:
          '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
      }}
    >
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="block">
        <span className="text-sm font-medium text-[#627027]">Full Name *</span>
        <input
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027]"
          placeholder="Jane Doe"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-[#627027]">Email *</span>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027]"
          placeholder="jane@example.com"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-[#627027]">Phone Number *</span>
        <input
          name="phone"
          type="tel"
          required
          pattern="^[0-9\\-\\+\\(\\)\\s]{7,}$"
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027]"
          placeholder="(555) 555-5555"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-[#627027]">Best Time to Reach You *</span>
        <select
          name="best_time"
          required
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027] bg-white"
        >
          <option value="">Select a time range</option>
          <option>Morning (8 AM – 12 PM)</option>
          <option>Afternoon (12 PM – 5 PM)</option>
          <option>Evening (5 PM – 8 PM)</option>
          <option>Weekday Mornings</option>
          <option>Weekday Afternoons</option>
          <option>Weekday Evenings</option>
          <option>Weekends Only</option>
          <option>Flexible / Any Time</option>
        </select>
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className={`${BTN_SUNSET} disabled:opacity-50`}
          style={{
            fontFamily:
              '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
          }}
        >
          {submitting ? "Sending…" : "Contact Us"}
        </button>
      </div>
    </form>
  );
}

/** ======= Home Page ======= */
export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const openForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="text-[#627027] font-sans">
      <Head>
        <title>Coastal Therapy Solutions | Eating Disorders & Anxiety Support</title>
        <meta
          name="description"
          content="Coastal Therapy Solutions offers evidence-based therapy for eating disorders, anxiety, OCD, and trauma."
        />
        <link rel="icon" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
        <style>{`
          @font-face {
            font-family: 'Gabriel Sans';
            src: url('/fonts/GabrielSans-Variable.woff2') format('woff2');
            font-weight: 100 900;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </Head>

      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={`${CONTAINER} relative z-10 flex flex-col items-center justify-center gap-8`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-sm"
              style={{ fontFamily: '"Forum", serif' }}
            >
              Begin Your Journey to Healing
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              At Coastal Therapy Solutions, we provide compassionate, evidence-based care for eating
              disorders, anxiety, OCD, and trauma.
            </p>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Whether you're seeking balance, recovery, or renewed confidence, our licensed
              clinicians are here to guide you.
            </p>

            {/* CTA Button → Contact Us */}
            <button
              onClick={openForm}
              className={BTN_SUNSET}
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Contact Us
            </button>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
            {SERVICES.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="group block relative rounded-xl shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm hover:bg-white/40 transition"
              >
                <div className="relative z-10 p-6 text-center flex flex-col items-center justify-center min-h-[260px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="mb-4 rounded-lg object-contain"
                  />
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: '"Forum", serif' }}>
                    {service.title}
                  </h3>
                  <p
                    className="text-sm opacity-90 leading-relaxed max-w-[260px]"
                    style={{
                      fontFamily:
                        '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                    }}
                  >
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="relative">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <section className="py-8">
          <ScrollRevealImage />
        </section>

        <FAQ />

        {/* Contact Form Section */}
        <section className="py-16" id="contact">
          <div className={CONTAINER}>
            <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
              Get in Touch
            </h2>
            <div
              ref={formRef}
              className="max-w-3xl mx-auto bg-white/70 p-8 rounded-lg shadow-md backdrop-blur-sm"
            >
              <ContactForm
                onSubmitted={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}