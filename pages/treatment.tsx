// pages/treatment.tsx
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
          content="Evidence-based therapy for anxiety, OCD, depression, trauma, and eating disorders in Florida. Learn symptoms, diagnostic approach, and treatment methodologies including CBT, ACT, DBT skills, ERP, and non-diet, weight-inclusive care for disordered eating."
        />
        <meta
          name="keywords"
          content="anxiety therapy Florida, OCD treatment ERP, eating disorder therapist Florida, disordered eating counseling, non-diet therapy, CBT ACT DBT therapist, trauma-informed therapy, telehealth therapy Florida, Tampa counseling, Orlando counseling"
        />
        <link rel="icon" href="/logo.png" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @font-face {
            font-family: 'Gabriel Sans';
            src: url('/fonts/GabrielSans-Variable.woff2') format('woff2');
            font-weight: 100 900;
            font-style: normal;
            font-display: swap;
          }
        `}</style>

        {/* Structured Data: WebPage + Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Treatment | Coastal Therapy Solutions",
              description:
                "Evidence-based therapy for anxiety, OCD, depression, trauma, and eating disorders in Florida. Learn symptoms, diagnostic approach, and treatment methods.",
              about: [
                "Anxiety Therapy",
                "OCD Treatment",
                "Eating Disorder Therapy",
                "CBT",
                "ACT",
                "DBT Skills",
                "ERP",
                "Trauma-Informed Care",
              ],
              provider: {
                "@type": "Organization",
                name: "Coastal Therapy Solutions",
                areaServed: "Florida",
                url: "https://coastal-therapy.example", // optional placeholder
                sameAs: [],
                serviceOffered: [
                  { "@type": "Service", name: "Anxiety Therapy" },
                  { "@type": "Service", name: "OCD Treatment (ERP)" },
                  {
                    "@type": "Service",
                    name: "Eating Disorder & Disordered Eating Counseling",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* ===== HERO SECTION (kept intact) ===== */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div
          className={`${CONTAINER} relative z-10 flex flex-col items-center justify-center gap-8`}
        >
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
              We offer clear, compassionate treatment for eating disorders,
              anxiety, OCD, trauma, and relationships — helping you build
              steady, sustainable progress at your pace.
            </p>

            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Whether you’re seeking balance, recovery, or renewed confidence,
              our licensed clinicians guide you toward lasting emotional
              well-being in a calm, coastal environment.
            </p>

            <Link
              href="/#intake"
              className={BTN_SUNSET}
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Start Intake
            </Link>
          </motion.div>

          {/* Match hero height consistency with index */}
          <div aria-hidden className="invisible pointer-events-none w-full">
            <div className="h-[280px] md:h-[320px]" />
          </div>
        </div>
      </section>

      {/** =================================================================== */}
      {/** ==================== CONTENT BELOW HERO (REPLACED) ================= */}
      {/** =================================================================== */}

      {/* ===== CONDITIONS WE TREAT (SEO opener) ===== */}
      <section className="relative -mt-6 md:-mt-8 pt-10 pb-12 md:pt-12 md:pb-14">
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
            Coastal Therapy Solutions supports teens (16+), adults, and couples
            across Florida through in-person and secure telehealth. Our team
            focuses on <strong>anxiety disorders</strong> (generalized anxiety,
            panic, social anxiety), <strong>OCD</strong> with{" "}
            <strong>Exposure &amp; Response Prevention (ERP)</strong>,{" "}
            <strong>depression and burnout</strong>,{" "}
            <strong>trauma-related concerns</strong>, and{" "}
            <strong>eating-disorder care</strong>—including disordered eating
            and body-image distress—using a compassionate,{" "}
            <em>non-diet, weight-inclusive</em> approach (no food imagery).
          </p>
        </div>
      </section>

      {/* ===== COMMON SYMPTOMS (rich, skimmable) ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Common Symptoms We Help With
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Anxiety & Panic",
                bullets: [
                  "Racing thoughts, restlessness, irritability, muscle tension",
                  "Worry that feels 'stuck on,' difficulty letting go",
                  "Avoidance of people/places/situations; reassurance seeking",
                  "Sleep disruption, shortness of breath, chest tightness",
                ],
              },
              {
                title: "OCD (Obsessive–Compulsive Disorder)",
                bullets: [
                  "Intrusive, unwanted thoughts or images (contamination, harm, morality, symmetry, relationships)",
                  "Compulsions (checking, washing, counting, mental rituals) to reduce distress",
                  "Intolerance of uncertainty; fear of responsibility/harm",
                  "Significant time lost to rituals and reassurance cycles",
                ],
              },
              {
                title: "Trauma & PTSD",
                bullets: [
                  "Intrusive memories, nightmares, flashbacks",
                  "Hypervigilance, startle response, feeling 'on edge'",
                  "Avoidance of reminders; emotional numbness or detachment",
                  "Guilt, shame, or negative shifts in beliefs about self/others",
                ],
              },
              {
                title: "Depression & Burnout",
                bullets: [
                  "Low mood, loss of interest, fatigue and decision paralysis",
                  "Isolation; decreased drive and focus; self-criticism",
                  "Sleep and appetite changes; brain fog",
                  "Hopelessness or loss of meaning and purpose",
                ],
              },
              {
                title: "Eating Disorders / Disordered Eating",
                bullets: [
                  "Preoccupation with food/weight/shape; rigid food rules",
                  "Restriction, bingeing, purging, or compulsive exercise",
                  "Body checking, comparison, and distress around meals",
                  "Shame, secrecy, social withdrawal; medical concerns may arise",
                ],
              },
              {
                title: "Relationships & Couples",
                bullets: [
                  "Communication breakdown, repeated conflict cycles",
                  "Trust injuries and boundary confusion",
                  "Reactivity, shutdown, or avoidance under stress",
                  "Desire for secure, practical tools to reconnect",
                ],
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-[#E5E7EB] bg-white/75 backdrop-blur p-5 shadow-sm"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                >
                  {card.title}
                </h3>
                <ul
                  className="list-disc pl-5 space-y-1 text-sm"
                  style={{
                    color: "rgba(98,112,39,0.92)",
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/#intake" className={BTN_SUNSET}>
              Talk with a Clinician
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DIAGNOSIS & ASSESSMENT ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Diagnosis & Assessment: Clear, Collaborative, and Paced
          </h2>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                t: "Structured Clinical Interview",
                d: "We start with a trauma-informed, collaborative interview covering history, current stressors, strengths, and goals. You set the pace and can pause anytime.",
              },
              {
                t: "Validated Screeners (when helpful)",
                d: "We may use tools such as GAD-7 (anxiety), PHQ-9 (depression), OCI-R (OCD), PCL-5 (PTSD), and EDE-Q (eating concerns) to clarify severity and track change over time.",
              },
              {
                t: "Case Formulation & Plan",
                d: "Together we map triggers, thoughts, emotions, behaviors, and body cues, then outline a tailored plan with measurable targets. You’ll know what we’re working on and why.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-xl border border-[#E5E7EB] bg-white/80 p-5 shadow-sm"
              >
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                >
                  {item.t}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "rgba(98,112,39,0.92)",
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-6 text-center max-w-3xl mx-auto text-sm opacity-90"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Screening tools inform—not replace—clinical judgment. We avoid labels
            that don’t serve you and prioritize practical, values-aligned care.
          </p>
        </div>
      </section>

      {/* ===== TREATMENT METHODOLOGIES (deep copy) ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Treatment Methodologies: Evidence-Based, Compassionate, Measurable
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                t: "CBT (Cognitive Behavioral Therapy)",
                d: "Build practical skills to shift unhelpful thought patterns and habits. We use behavioral experiments, graded task lists, and thought-reframe tools so you can observe progress in real time.",
              },
              {
                t: "ACT (Acceptance & Commitment Therapy)",
                d: "Clarify your values and take small, steady steps toward them—even when emotions are difficult. Acceptance skills, mindfulness, and committed action help you live more fully.",
              },
              {
                t: "DBT-Informed Skills",
                d: "We teach emotion regulation, distress tolerance, and interpersonal effectiveness to reduce overwhelm, manage urges, and communicate needs without losing connection.",
              },
              {
                t: "ERP for OCD",
                d: "Exposure & Response Prevention reduces rituals by gradually approaching triggers while resisting compulsions. We pace exposures, build readiness, and celebrate each reclaimed minute.",
              },
              {
                t: "Trauma-Informed Care",
                d: "Safety and stabilization come first. Processing happens when you’re ready, with choice and collaboration at every step. We integrate grounding, resourcing, and pacing for nervous-system balance.",
              },
              {
                t: "Eating-Disorder & Disordered-Eating Care",
                d: "Our approach is non-diet and weight-inclusive. We address rigid rules, binge-restrict cycles, and body-image pain. When appropriate, we coordinate with physicians and registered dietitians.",
              },
              {
                t: "Mindfulness & Somatic Skills",
                d: "Grounding, paced breathing, and body awareness help regulate arousal and reconnect you with present-moment safety and capacity.",
              },
              {
                t: "Couples & Relationship Work",
                d: "Attachment-aware tools for communication, boundaries, and repair. We help you replace blame and withdrawal with practical, repeatable connection skills.",
              },
              {
                t: "Performance, Burnout & First Responders",
                d: "We understand high-stakes roles. Expect routines that restore stamina, cognitive tools for focus under pressure, and skills to decompress without disengaging from what matters.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-xl border border-[#E5E7EB] bg-white/80 p-5 shadow-sm"
              >
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                >
                  {item.t}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "rgba(98,112,39,0.92)",
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/#intake" className={BTN_SUNSET}>
              Begin Your Plan
            </Link>
          </div>

          {/* Sub-section with anxiety + eating-disorder depth for SEO */}
          <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-[#E5E7EB] bg-white/80 p-5 shadow-sm">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#627027", fontFamily: '"Forum", serif' }}
              >
                Anxiety Therapy: From Overwhelm to Workable Momentum
              </h3>
              <p
                className="text-sm mb-3"
                style={{
                  color: "rgba(98,112,39,0.92)",
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                Generalized worry, panic surges, and social anxiety can take over
                your calendar and confidence. We combine CBT, ACT, and
                mindfulness so you can face feared situations with more
                tolerance and less avoidance. Expect bite-size, trackable steps
                (e.g., one exposure per week, reduced safety behaviors, shorter
                reassurance loops) that build real-world freedom—meetings,
                travel, relationships, and sleep start feeling possible again.
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1 opacity-95">
                <li>Trigger mapping + graded exposure ladders</li>
                <li>Worry scheduling and cognitive defusion</li>
                <li>Breath, grounding, and arousal recovery skills</li>
                <li>Relapse-prevention playbooks for high-stress weeks</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white/80 p-5 shadow-sm">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#627027", fontFamily: '"Forum", serif' }}
              >
                Eating-Disorder & Disordered-Eating Support: Compassion First
              </h3>
              <p
                className="text-sm mb-3"
                style={{
                  color: "rgba(98,112,39,0.92)",
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                Food rules, binge-restrict cycles, and body checking can shrink
                life. Our non-diet, weight-inclusive lens removes shame and
                focuses on safety, flexibility, and nourishment. We help you
                rebuild a workable relationship with meals and movement, and we
                coordinate with physicians and registered dietitians when
                appropriate. No food imagery, ever.
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1 opacity-95">
                <li>Meal-time anxiety skills and post-meal support plans</li>
                <li>Body-image distress reduction without appearance focus</li>
                <li>Rule/ritual mapping; urge surfing; values-based goals</li>
                <li>Step-up/step-down coordination (IOP/PHP/residential) as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARE COORDINATION & LEVELS ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Care Coordination & Levels of Support
          </h2>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-[#E5E7EB] bg-white/80 p-5 shadow-sm">
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: "#627027", fontFamily: '"Forum", serif' }}
              >
                Collaborative Team Approach
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "rgba(98,112,39,0.92)",
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                With your consent, we coordinate with medical providers,
                psychiatrists, and registered dietitians. If a higher level of
                care is appropriate—<strong>IOP</strong>, <strong>PHP</strong>,
                or <strong>residential</strong>—we help with referrals and
                seamless step-down planning so gains hold in daily life.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white/80 p-5 shadow-sm">
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: "#627027", fontFamily: '"Forum", serif' }}
              >
                Pacing, Fit, and Measurables
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "rgba(98,112,39,0.92)",
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                Most clients begin with weekly sessions. We’ll define specific,
                observable targets—reduced ritual time, increased meal
                structure, fewer panic interruptions, improved sleep, more
                flexible routines—so you can see progress and adjust confidently.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/#intake" className={BTN_SUNSET}>
              Begin Intake
            </Link>
          </div>

          <p
            className="mt-6 text-xs text-center opacity-70"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Information on this page is educational and not a substitute for
            medical advice. If you have urgent safety concerns, call 988 (U.S.)
            or local emergency services.
          </p>
        </div>
      </section>
    </div>
  );
}
