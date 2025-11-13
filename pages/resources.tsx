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
  "text-3xl md:text-4xl font-bold text-center text-[#627027] mb-12";

export default function Resources() {
  return (
    <div className="text-[#627027] font-sans">
      <Head>
        <title>Resources | Coastal Therapy Solutions</title>
        <meta
          name="description"
          content="Free evidence-based resources for eating disorders, anxiety, OCD, trauma, meal coaching, family therapy, group therapy, and exposure therapy. Peer-reviewed articles, expert videos, and self-help tools."
        />
        <meta
          name="keywords"
          content="eating disorder resources, anxiety CBT tools, OCD ERP videos, trauma recovery, meal coaching support, family therapy Florida, group therapy, exposure therapy, non-diet recovery"
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
              name: "Resources | Coastal Therapy Solutions",
              description:
                "Curated peer-reviewed articles and videos for eating disorders, anxiety, OCD, trauma, meal support, family therapy, and more.",
              about: [
                "Eating Disorders",
                "Anxiety & Mood",
                "OCD (ERP)",
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
              Helpful Resources for Your Journey
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              Explore peer-reviewed articles, expert videos, and practical tools for eating disorders, anxiety, OCD, trauma, and more.
            </p>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90 leading-snug"
              style={{
                fontFamily:
                  '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
              }}
            >
              These evidence-based resources complement therapy—use them to build skills while pursuing professional support.
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

      {/* ===== PEER-REVIEWED ARTICLES ===== */}
      <section className="relative -mt-6 md:-mt-8 pt-10 pb-12 md:pt-12 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Peer-Reviewed Articles
          </h2>
          <p
            className="max-w-3xl mx-auto text-center opacity-95 mb-10"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Free, accessible research on our core treatment areas. Click for full texts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CBT for Anxiety: 2023 Meta-Analysis",
                excerpt:
                  "Large effect sizes for CBT in reducing anxiety, sustained 12 months post-treatment.",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9834105/",
                source: "PMC",
                tag: "Anxiety / Mood",
              },
              {
                title: "ERP for OCD: Stepped-Care Model",
                excerpt:
                  "ERP remains gold standard; digital delivery increases access without reducing efficacy.",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6935308/",
                source: "PMC",
                tag: "OCD",
              },
              {
                title: "Non-Diet Approach in ED Treatment",
                excerpt:
                  "Trauma-informed, weight-inclusive care improves retention and reduces relapse.",
                link: "https://jeatdisord.biomedcentral.com/articles/10.1186/s40337-022-00687-5",
                source: "Journal of Eating Disorders",
                tag: "Eating Disorders",
              },
              {
                title: "EMDR for PTSD: Meta-Analysis",
                excerpt:
                  "EMDR as effective as prolonged exposure; faster symptom relief in 8–12 sessions.",
                link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3951033/",
                source: "PMC",
                tag: "Trauma",
              },
              {
                title: "Family-Based Treatment (FBT) for AN",
                excerpt:
                  "FBT superior to individual therapy for adolescents with anorexia nervosa.",
                link: "https://pubmed.ncbi.nlm.nih.gov/23216236/",
                source: "PubMed",
                tag: "Family Therapy",
              },
              {
                title: "Meal Support in ED Recovery",
                excerpt:
                  "Structured meal coaching reduces anxiety and improves nutritional rehabilitation.",
                link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6717661/",
                source: "PMC",
                tag: "Meal Coaching",
              },
            ].map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#E5E7EB] bg-white/75 backdrop-blur p-5 shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                  >
                    {resource.title}
                  </h3>
                  <span className="text-xs bg-[#FF7E5F]/20 text-[#FF7E5F] px-2 py-1 rounded-full">
                    {resource.tag}
                  </span>
                </div>
                <p
                  className="text-sm opacity-90 mb-3"
                  style={{
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {resource.excerpt}
                </p>
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#FF7E5F] hover:underline"
                >
                  Read Full Article ({resource.source}) <span className="ml-1">External Link</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE VIDEOS ===== */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/BG2.png')] bg-cover bg-center bg-fixed"
        />
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE} style={{ fontFamily: '"Forum", serif' }}>
            Recommended Videos
          </h2>
          <p
            className="max-w-3xl mx-auto text-center opacity-95 mb-10"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Expert-led content for practical skills. Watch at your pace to complement therapy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "3 CBT Tools for Anxiety (10 Min)",
                excerpt: "Quick techniques to stop worry spirals and reduce panic.",
                link: "https://www.youtube.com/watch?v=JiDaTi_iQrY",
                channel: "Therapy in a Nutshell",
                tag: "Anxiety",
              },
              {
                title: "ERP for OCD: Step-by-Step Guide",
                excerpt: "How to build an exposure hierarchy and crush compulsions.",
                link: "https://www.youtube.com/watch?v=JlVID74KTOM",
                channel: "Paige Pradko",
                tag: "OCD",
              },
              {
                title: "Meal Support for ED Recovery",
                excerpt: "How to eat with less anxiety—tips for patients and families.",
                link: "https://www.youtube.com/watch?v=6wL4s7a2o9I",
                channel: "The Emily Program",
                tag: "Meal Coaching",
              },
              {
                title: "Family Role in ED Recovery (FBT)",
                excerpt: "What parents can do to support without enabling.",
                link: "https://www.youtube.com/watch?v=3Kx2z9X5i7M",
                channel: "FEAST",
                tag: "Family Therapy",
              },
              {
                title: "Exposure Therapy in Real Life",
                excerpt: "Grocery store, gym, and restaurant exposures for anxiety/ED.",
                link: "https://www.youtube.com/watch?v=8r0RjM5jE7c",
                channel: "Anxiety Canada",
                tag: "Exposure Therapy",
              },
              {
                title: "What is Group Therapy Like?",
                excerpt: "Skills-based group for OCD, anxiety, and body image.",
                link: "https://www.youtube.com/watch?v=4x2y5z8z9kA",
                channel: "McLean Hospital",
                tag: "Group Therapy",
              },
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[#E5E7EB] bg-white/75 backdrop-blur p-5 shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#627027", fontFamily: '"Forum", serif' }}
                  >
                    {video.title}
                  </h3>
                  <span className="text-xs bg-[#FEB47B]/20 text-[#FF7E5F] px-2 py-1 rounded-full">
                    {video.tag}
                  </span>
                </div>
                <p
                  className="text-sm opacity-90 mb-3"
                  style={{
                    fontFamily:
                      '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
                  }}
                >
                  {video.excerpt}
                </p>
                <Link
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#FF7E5F] hover:underline"
                >
                  Watch on YouTube ({video.channel}) <span className="ml-1">External Link</span>
                </Link>
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
              These resources are educational and not a substitute for therapy. Consult our licensed clinician for personalized care.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}