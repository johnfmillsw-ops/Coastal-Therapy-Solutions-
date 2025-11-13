import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

/** ======= Constants ======= */
const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const BTN_SUNSET =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition focus:outline-none focus:ring-2 focus:ring-pink-300";

/** ======= Services (EXACT SAME AS INDEX) ======= */
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

export default function Treatment() {
  const formRef = useRef<HTMLDivElement>(null);
  const openForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="text-[#627027] font-sans">
      <Head>
        <title>Treatment | Coastal Therapy Solutions</title>
        <meta
          name="description"
          content="Evidence-based therapy for eating disorders, anxiety, OCD, trauma, and more in Florida. Learn about CBT, ACT, DBT, ERP, non-diet care, meal support, family therapy, group therapy, and community exposure."
        />
        <meta
          name="keywords"
          content="eating disorder therapy Florida, anxiety treatment, OCD ERP therapy, trauma therapy, non-diet therapy, meal coaching, family therapy, group therapy, exposure therapy Florida, CBT ACT DBT therapist"
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Treatment | Coastal Therapy Solutions",
              description:
                "Evidence-based therapy for eating disorders, anxiety, OCD, trauma, and more in Florida.",
              about: [
                "Eating Disorders",
                "Anxiety / Mood Disorders",
                "Obsessive-Compulsive Disorder",
                "Trauma",
                "Meal Coaching",
                "Family Therapy",
                "Group Therapy",
                "Exposure Therapy",
              ],
              provider: {
                "@type": "Organization",
                name: "Coastal Therapy Solutions",
                areaServed: "Florida",
                url: "https://coastal-therapy.example",
                serviceOffered: [
                  { "@type": "Service", name: "Eating Disorder Therapy" },
                  { "@type": "Service", name: "Anxiety & Mood Disorder Therapy" },
                  { "@type": "Service", name: "OCD Treatment (ERP)" },
                  { "@type": "Service", name: "Trauma Therapy" },
                  { "@type": "Service", name: "Meal Coaching & Support" },
                  { "@type": "Service", name: "Family-Informed Therapy" },
                  { "@type": "Service", name: "Group Therapy" },
                  { "@type": "Service", name: "Community Exposure Therapy" },
                ],
              },
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* ===== HERO SECTION – UPDATED TEXT, SAME LAYOUT AS INDEX ===== */}
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
              Our Clinical Specialties
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              At Coastal Therapy Solutions, we specialize in evidence-based treatment for eating disorders,
              anxiety, OCD, and trauma — delivered with compassion and clinical excellence.
            </p>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              These four areas represent the heart of our practice. Below, you’ll also find a full range of
              supportive services to meet your unique needs.
            </p>
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

          {/* ===== 4 SERVICE BOXES – EXACT SAME AS INDEX ===== */}
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

      {/* ===== FULL LIST OF CONDITIONS & SERVICES ===== */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12"
            style={{ fontFamily: '"Forum", serif' }}
          >
            Mental Health Issues We Treat
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              "Anorexia Nervosa",
              "Bulimia Nervosa",
              "Binge Eating Disorder",
              "ARFID (Avoidant/Restrictive Food Intake Disorder)",
              "OSFED (Other Specified Feeding or Eating Disorder)",
              "Generalized Anxiety Disorder",
              "Panic Disorder",
              "Social Anxiety",
              "Specific Phobias",
              "Agoraphobia",
              "OCD (Obsessive-Compulsive Disorder)",
              "Body-Focused Repetitive Behaviors",
              "Hoarding Disorder",
              "PTSD (Post-Traumatic Stress Disorder)",
              "Complex PTSD",
              "Acute Stress Disorder",
              "Major Depressive Disorder",
              "Persistent Depressive Disorder (Dysthymia)",
              "Burnout & Chronic Stress",
              "Adjustment Disorders",
              "Relationship Distress",
              "Couples & Family Conflict",
            ].map((issue) => (
              <div
                key={issue}
                className="rounded-lg bg-white/70 p-4 text-sm font-medium"
                style={{
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                {issue}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL SERVICES ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12"
            style={{ fontFamily: '"Forum", serif' }}
          >
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Meal Coaching & Support",
                desc: "Guided meal support to reduce anxiety, improve compliance, and rebuild comfort with food in real-world settings. Available virtually or in-person (where offered).",
              },
              {
                title: "Family-Informed Therapy",
                desc: "Education and skills training for parents, partners, and loved ones to support recovery, reduce enabling behaviors, and strengthen communication.",
              },
              {
                title: "Community Services & Exposure Therapy",
                desc: "Graduated real-world exposure in grocery stores, restaurants, gyms, or social settings to reduce avoidance and reclaim daily life.",
              },
              {
                title: "Individual Therapy",
                desc: "One-on-one sessions tailored to your goals, using CBT, ACT, DBT, ERP, or trauma-focused methods. Weekly or biweekly, in-person or telehealth.",
              },
              {
                title: "Group Therapy",
                desc: "Skills-based groups for anxiety management, OCD support, eating disorder recovery, or body image healing. Small, supportive, and clinician-led.",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm opacity-95"
                  style={{
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      
    </div>
  );
}