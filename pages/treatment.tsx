import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

/** ======= Constants ======= */
const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const BTN_SUNSET =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition focus:outline-none focus:ring-2 focus:ring-pink-300";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-bold text-center text-[#627027] mb-8";

export default function Treatment() {
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
        {/* Fonts */}
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
              Treatment That Meets You Where You Are
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              We offer clear, compassionate treatment for eating disorders, anxiety, OCD, trauma, and relationships — helping you build steady, sustainable progress at your pace.
            </p>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Whether you’re seeking balance, recovery, or renewed confidence, our licensed clinicians guide you toward lasting emotional well-being in a calm, coastal environment.
            </p>
            <Link
              href="/#contact"
              className={BTN_SUNSET}
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Contact Us
            </Link>
          </motion.div>
          <div aria-hidden className="invisible pointer-events-none w-full">
            <div className="h-[280px] md:h-[320px]" />
          </div>
        </div>
      </section>

      {/* ===== CORE SERVICES RECAP (from index) ===== */}
      <section className="relative -mt-6 md:-mt-8 pt-10 pb-12 md:pt-12 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Our Core Specialties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                title: "Eating Disorders",
                summary:
                  "Evidence-based treatment for anorexia, bulimia, ARFID, and binge eating using CBT-E, FBT, and DBT.",
                href: "/services/eating-disorder",
              },
              {
                title: "Anxiety / Mood Disorders",
                summary:
                  "Specialized care for anxiety, depression, bipolar, and panic using CBT, mindfulness, and ACT.",
                href: "/services/anxiety-mood",
              },
              {
                title: "Obsessive-Compulsive Disorder",
                summary:
                  "ERP (Exposure & Response Prevention) and CBT tailored for OCD, intrusive thoughts, and compulsions.",
                href: "/services/ocd",
              },
              {
                title: "Trauma",
                summary:
                  "EMDR, CPT, and trauma-focused CBT to process PTSD, complex trauma, and life-altering events.",
                href: "/services/trauma",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block rounded-xl border border-[#E5E7EB] bg-white/75 backdrop-blur p-5 shadow-sm hover:shadow-md transition"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm opacity-90"
                  style={{
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL LIST OF CONDITIONS & SERVICES ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
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
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
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

          <div className="mt-10 text-center">
            <Link href="/#contact" className={BTN_SUNSET}>
              Contact Us to Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONDITIONS WE TREAT (SEO) ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Conditions We Treat
          </h2>
          <p
            className="max-w-3xl mx-auto text-center opacity-95"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Coastal Therapy Solutions supports teens (16+), adults, and couples across Florida through in-person and secure telehealth. Our team focuses on{" "}
            <strong>eating disorders</strong>, <strong>anxiety disorders</strong>, <strong>OCD</strong> with{" "}
            <strong>ERP</strong>, <strong>trauma</strong>, <strong>depression</strong>, and{" "}
            <strong>relationship distress</strong> using a compassionate,{" "}
            <em>non-diet, weight-inclusive</em> approach.
          </p>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="relative py-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white/90"
        />
        <div className={CONTAINER}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Forum", serif' }}>
              Ready to Begin?
            </h2>
            <p
              className="max-w-2xl mx-auto mb-8 text-lg opacity-90"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Take the first step toward healing. Our team is here to listen and guide you.
            </p>
            <Link href="/#contact" className={BTN_SUNSET}>
              Contact Us Today
            </Link>
          </div>
          <p
            className="mt-8 text-center text-xs opacity-70 max-w-3xl mx-auto"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            This page is for educational purposes and not a substitute for medical advice. If in crisis, call 988 or 911.
          </p>
        </div>
      </section>
    </div>
  );
}