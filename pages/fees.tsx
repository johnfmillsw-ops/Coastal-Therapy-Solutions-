// pages/services/fees.tsx
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

/** ======= Constants (same as index.tsx) ======= */
const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const BTN_SUNSET =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition focus:outline-none focus:ring-2 focus:ring-pink-300";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12";

export default function Fees() {
  return (
    <div className="text-[#627027] font-sans">
      {/* ===== SEO & Fonts (same as index) ===== */}
      <Head>
        <title>Fees & Insurance | Coastal Therapy Solutions</title>
        <meta
          name="description"
          content="Transparent fees for therapy in Florida. We accept major insurance plans and offer affordable self-pay rates. Session costs, superbills, and Good Faith Estimates explained."
        />
        <meta
          name="keywords"
          content="therapy fees Florida, insurance accepted, self-pay therapy rates, superbill, Good Faith Estimate, out-of-network benefits, telehealth therapy cost"
        />
        <link rel="icon" href="/logo.png" />
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
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Fees & Insurance | Coastal Therapy Solutions",
              description: "Clear pricing, insurance acceptance, and self-pay options for evidence-based therapy in Florida.",
              provider: {
                "@type": "Organization",
                name: "Coastal Therapy Solutions",
                areaServed: "Florida",
                url: "https://coastal-therapy.example",
                offers: {
                  "@type": "Offer",
                  priceSpecification: [
                    { "@type": "PriceSpecification", name: "Initial Intake (60 min)", price: 195, priceCurrency: "USD" },
                    { "@type": "PriceSpecification", name: "Individual Therapy (50–53 min)", price: 165, priceCurrency: "USD" },
                    { "@type": "PriceSpecification", name: "Couples/Relationship Session (50–53 min)", price: 185, priceCurrency: "USD" },
                  ],
                },
              },
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* ===== HERO SECTION (same as index) ===== */}
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
              Transparent Fees & Insurance
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              We accept most major insurance plans and offer straightforward
              self-pay rates so cost never stands between you and the care you
              need.
            </p>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Whether you’re using insurance or paying out-of-pocket, our
              pricing is clear, fair, and designed to support your healing
              journey.
            </p>
            <Link
              href="/#intake"
              className={BTN_SUNSET}
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Verify Insurance / Start Intake
            </Link>
          </motion.div>
          {/* Match hero height consistency with index */}
          <div aria-hidden className="invisible pointer-events-none w-full">
            <div className="h-[280px] md:h-[320px]" />
          </div>
        </div>
      </section>

      {/* ===== INSURANCE ACCEPTED ===== */}
      <section className="relative -mt-6 md:-mt-8 pt-10 pb-12 md:pt-12 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Insurance We Accept
          </h2>
          <p
            className="max-w-3xl mx-auto text-center opacity-95"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            We are <strong>in-network</strong> with the following plans.
            Copays, coinsurance, and deductibles apply per your policy. We
            verify benefits before your first session.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "Aetna",
              "Cigna",
              "UnitedHealthcare / Optum",
              "Blue Cross Blue Shield (Florida Blue)",
              "Oscar Health",
              "Oxford Health Plans",
            ].map((ins) => (
              <motion.div
                key={ins}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#E5E7EB] bg-white/75 backdrop-blur p-5 text-center shadow-sm"
              >
                <p
                  className="font-semibold"
                  style={{
                    color: "#627027",
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {ins}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p
              className="text-sm opacity-90 max-w-2xl mx-auto"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              <strong>Not listed?</strong> We can still check your
              out-of-network benefits or provide a superbill for reimbursement.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SELF-PAY RATES ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Self-Pay Rates
          </h2>
          <p
            className="max-w-3xl mx-auto text-center mb-10 opacity-95"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Transparent, session-based pricing. No hidden fees. Payment due at
            time of service (card on file).
          </p>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                service: "Initial Intake Assessment (60 min)",
                desc: "Comprehensive history, goal-setting, and collaborative treatment plan. Required for all new clients.",
                price: "$195",
              },
              {
                service: "Individual Therapy Session (50–53 min)",
                desc: "Anxiety, OCD (ERP), trauma, depression, eating-disorder care, or general mental health support.",
                price: "$165",
              },
              {
                service: "Couples / Relationship Session (50–53 min)",
                desc: "Communication tools, conflict repair, attachment-aware support for partners.",
                price: "$185",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                  >
                    {item.service}
                  </h3>
                  <p
                    className="text-sm opacity-90"
                    style={{
                      fontFamily:
                        '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div className="text-xl font-bold text-[#627027]">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/treatment" className="text-sm underline opacity-80">
              Back to Treatment Details
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GOOD FAITH ESTIMATE & SUPERBILL ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Good Faith Estimate & Out-of-Network Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm"
            >
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#627027", fontFamily: '"Forum", serif' }}
              >
                Good Faith Estimate (GFE)
              </h3>
              <p
                className="text-sm opacity-95 mb-4"
                style={{
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                Federal law requires a GFE for self-pay clients before your
                first session. You’ll receive a clear written estimate of
                expected charges for the next 12 months (or course of
                treatment). We review it together during intake.
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5 opacity-90">
                <li>Includes session frequency and duration</li>
                <li>Updated if care plan changes</li>
                <li>Your right to dispute bills over $400 variance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm"
            >
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#627027", fontFamily: '"Forum", serif' }}
              >
                Superbill for Reimbursement
              </h3>
              <p
                className="text-sm opacity-95 mb-4"
                style={{
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                }}
              >
                Self-pay clients receive a monthly superbill with all required
                codes (CPT, ICD-10, NPI) to submit to insurance for possible
                out-of-network reimbursement.
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5 opacity-90">
                <li>Digital PDF delivered via client portal</li>
                <li>Typical OON reimbursement: 40–80% after deductible</li>
                <li>We guide you on submission (no guarantee of payment)</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/#intake" className={BTN_SUNSET}>
              Get Your GFE / Verify Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL INFO ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Additional Information
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-sm opacity-90">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm"
            >
              <h3 className="font-semibold mb-2" style={{ color: "#627027" }}>
                Limited Sliding-Scale Spots
              </h3>
              <p>
                A small number of reduced-rate sessions are available for
                clients with demonstrated financial need. Availability is
                limited and reviewed quarterly. Ask during intake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[#E5E7EB] bg-white/80 p-6 shadow-sm"
            >
              <h3 className="font-semibold mb-2" style={{ color: "#627027" }}>
                Payment & Cancellation Policy
              </h3>
              <p>
                Card on file required. Full session fee charged for no-show or
                cancellation with &lt;24 hours notice. We send friendly
                reminders 48 hours prior.
              </p>
            </motion.div>
          </div>

          <p
            className="mt-8 text-center text-xs opacity-70 max-w-2xl mx-auto"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            All information is current as of November 2025. Rates and insurance
            contracts subject to change. Coastal Therapy Solutions does not
            offer crisis services—call 988 or 911 in emergency.
          </p>
        </div>
      </section>
    </div>
  );
}