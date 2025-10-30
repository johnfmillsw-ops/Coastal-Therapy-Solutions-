// pages/index.tsx
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
          style={{ fontFamily: '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif' }}
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

/** Buttons: white text, Gabriel Sans font */
const BTN_SUNSET =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition focus:outline-none focus:ring-2 focus:ring-pink-300";

/** H2 (subheaders) use Gabriel Sans */
const SECTION_TITLE =
  "text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12";

/** ======= Services ======= */
const SERVICES = [
  {
    title: "Eating Disorder Therapy",
    summary:
      "Personalized sessions using CBT and DBT to foster a healthy relationship with food and body image.",
    image: "/2.png",
    href: "/services/eating-disorder",
  },
  {
    title: "Anxiety Therapy",
    summary:
      "Evidence-based techniques like mindfulness and exposure therapy to manage anxiety and build resilience.",
    image: "/3.png",
    href: "/services/anxiety",
  },
  {
    title: "Family & Group Therapy",
    summary:
      "Supportive sessions to strengthen communication and aid recovery for loved ones and communities.",
    image: "/4.png",
    href: "/services/family-group",
  },
];

/** ======= Intake Form ======= */
function IntakeForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const endpoint = "https://jfm.app.n8n.cloud/webhook-test/get_data";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("consent")) return;
    setSubmitting(true);

    try {
      const params = new URLSearchParams();
      data.forEach((v, k) => params.append(k, String(v)));
      params.append("form-name", "intake");
      params.append("subject", "New Patient Intake — Coastal Therapy Solutions");

      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setDone(true);
      onSubmitted?.();
    } catch (err) {
      console.error(err);
      alert("Sorry, something went wrong submitting the form.");
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
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "Forum, serif" }}
        >
          Thank you!
        </h3>
        <p className="text-sm">
          Your intake has been received. We’ll reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="new-patient-intake"
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-4"
      style={{
        fontFamily:
          '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
      }}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-[#627027]">Full Name*</span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#627027]">
            Date of Birth*
          </span>
          <input
            type="date"
            name="dob"
            required
            className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027]"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-[#627027]">Email*</span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 text-[#627027]"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-[#627027]">
          What brings you to therapy now?*
        </span>
        <textarea
          name="presenting_concerns"
          required
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 min-h-[120px] text-[#627027]"
          placeholder="Top concerns, symptoms, goals"
        />
      </label>

      <label className="flex items-center gap-2 text-[#627027]">
        <input type="checkbox" name="consent" className="h-4 w-4" required />
        <span className="text-sm">
          I certify the information provided is accurate and I consent to care.
        </span>
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
          {submitting ? "Submitting…" : "Submit Intake"}
        </button>
      </div>
    </form>
  );
}

/** ======= Home ======= */
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
          content="Coastal Therapy Solutions offers evidence-based therapy for eating disorders, anxiety, and OCD."
        />
        <link rel="icon" href="/logo.png" />

        {/* Forum font for headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
          rel="stylesheet"
        />

        {/* Gabriel Sans (local) for subheaders/buttons/body */}
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
        {/* Background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />

        {/* Centered content */}
        <div className={`${CONTAINER} relative z-10 flex flex-col items-center justify-center gap-8`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* H1 uses Forum */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-sm"
              style={{ fontFamily: '"Forum", serif' }}
            >
              Begin Your Journey to Healing
            </h1>

            {/* Hero paragraphs use Gabriel Sans */}
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              At Coastal Therapy Solutions, we provide compassionate, evidence-based care for eating
              disorders, anxiety, and OCD. Our mission is to help you rebuild a healthy connection
              with your body, mind, and relationships — one session at a time.
            </p>

            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Whether you're seeking balance, recovery, or renewed confidence, our licensed
              clinicians are here to guide you toward lasting emotional well-being in a calm,
              coastal environment.
            </p>

            {/* Button uses Gabriel Sans */}
            <button
              onClick={openForm}
              className={BTN_SUNSET}
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Start Intake
            </button>
          </motion.div>

          {/* Services below CTA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full">
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
                  {/* Service title uses Forum */}
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: '"Forum", serif' }}
                  >
                    {service.title}
                  </h3>
                  {/* Service summary uses Gabriel Sans */}
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
        {/* Background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />

        <section className="py-8">
          <ScrollRevealImage />
        </section>

        {/* FAQ (typography handled inside component per your rules) */}
        <FAQ />

        {/* Intake Section */}
        <section className="py-16" id="intake">
          <div className={CONTAINER}>
            <h2
              className={SECTION_TITLE}
              style={{
                fontFamily: '"Forum", serif',
              }}
            >
              New Patient Intake
            </h2>
            <div
              ref={formRef}
              className="max-w-3xl mx-auto bg-white/70 p-8 rounded-lg shadow-md backdrop-blur-sm"
            >
              <IntakeForm
                onSubmitted={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
              <div className="mt-6 flex justify-end">
                
              </div>
            </div>
          </div>
        </section>

        {/* Footer is its own component; keep as-is */}
      </section>
    </div>
  );
}
