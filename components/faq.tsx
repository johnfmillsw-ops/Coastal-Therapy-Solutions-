// components/FAQ.tsx
import * as React from "react";
import Head from "next/head";

export type FAQItem = { q: string; a: string };
export type FAQCategory = { id: string; title: string; items: FAQItem[] };

type FAQProps = {
  categories?: FAQCategory[];
  sectionTitle?: string;
  enableJsonLd?: boolean;
};

const DEFAULT_CATEGORIES: FAQCategory[] = [
  {
    id: "eating-disorders",
    title: "Eating Disorder Therapy",
    items: [
      {
        q: "What is evidence-based treatment for eating disorders?",
        a: "Evidence-based treatment includes CBT-E, DBT, and Family-Based Treatment (FBT). Care is personalized to address binge eating, restrictive eating, body image concerns, compensatory behaviors, and co-occurring anxiety or OCD, with coordination to medical/nutrition providers when helpful."
      },
      {
        q: "How do you support recovery from binge eating, purging, or restrictive patterns?",
        a: "We begin with a collaborative assessment and a structured plan targeting triggers and rituals. Tools include regular eating, distress tolerance, cognitive restructuring, and exposure with response prevention for feared foods and body-related situations."
      },
      {
        q: "Do you offer virtual sessions and care coordination?",
        a: "Yes—secure teletherapy is available. We coordinate with primary care, psychiatry, and dietitians as needed for comprehensive, stepped care aligned with your goals."
      }
    ]
  },
  {
    id: "anxiety-therapy",
    title: "Anxiety Disorder Therapy",
    items: [
      {
        q: "What methods help generalized anxiety, social anxiety, and panic?",
        a: "We combine psychoeducation, mindfulness, CBT skills, and exposure-based strategies. You’ll map triggers, challenge unhelpful thoughts, regulate physiology, and gradually face avoided situations to rebuild confidence."
      },
      {
        q: "How quickly will I notice progress?",
        a: "Many clients see meaningful changes within 6–12 sessions when practicing between sessions. Timelines vary by severity and stressors, but structured, measurable goals accelerate results."
      },
      {
        q: "Can therapy help health anxiety and catastrophic thinking?",
        a: "Yes. We reduce reassurance-seeking, limit compulsive checking, and use exposure to uncertainty. Probability rebalancing and behavior experiments weaken anxiety’s grip and restore daily functioning."
      }
    ]
  },
  {
    id: "ocd-therapy",
    title: "OCD & Therapy",
    items: [
      {
        q: "What is ERP (Exposure and Response Prevention) for OCD?",
        a: "ERP is the gold-standard therapy for OCD. We build an exposure hierarchy to face obsessions while delaying/preventing compulsions, rewiring fear responses and building tolerance for uncertainty across contamination, harm, relationship, moral, and 'just-right' themes."
      },
      {
        q: "How is OCD different from anxiety, and how do you track progress?",
        a: "OCD centers on obsessions and compulsions. We track compulsion frequency/duration and functional goals with validated measures, while strengthening flexibility and values-based action."
      },
      {
        q: "Do you treat co-occurring depression or eating concerns with OCD?",
        a: "Absolutely. We integrate ERP with CBT/DBT skills and coordinate with physicians/nutritionists as needed to address mood, sleep, avoidance, and quality-of-life factors."
      }
    ]
  }
];

export default function FAQ({
  categories,
  sectionTitle = "Frequently Asked Questions",
  enableJsonLd = true
}: FAQProps) {
  const cats = categories ?? DEFAULT_CATEGORIES;
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  const jsonLd = React.useMemo(() => {
    if (!enableJsonLd) return null;
    const mainEntity = cats.flatMap((cat) =>
      cat.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a }
      }))
    );
    return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity };
  }, [cats, enableJsonLd]);

  return (
    <section className="py-16" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (Forum font) */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-[#627027] mb-10"
          style={{ fontFamily: "Forum, serif" }}
        >
          {sectionTitle}
        </h2>

        {/* Category Navigation (Gabriel Sans) */}
        <nav
          className="flex flex-wrap gap-3 justify-center mb-8"
          style={{
            fontFamily:
              '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif'
          }}
        >
          {cats.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        {/* Categories */}
        <div className="space-y-10">
          {cats.map((cat, cIdx) => (
            <div key={cat.id} id={cat.id}>
              {/* Category Title (Forum font) */}
              <h3
                className="text-2xl font-semibold text-[#627027] mb-4"
                style={{ fontFamily: "Forum, serif" }}
              >
                {cat.title}
              </h3>

              {/* Questions + Answers (Gabriel Sans) */}
              <div
                className="space-y-3"
                style={{
                  fontFamily:
                    '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif'
                }}
              >
                {cat.items.map((item, iIdx) => {
                  const key = `${cIdx}-${iIdx}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="bg-white/70 border border-[#E5E7EB] rounded-lg backdrop-blur-sm"
                    >
                      <button
                        className="w-full flex justify-between items-center text-left px-4 py-3"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${key}`}
                        onClick={() => setOpenKey(isOpen ? null : key)}
                      >
                        <span className="font-semibold text-[#627027] pr-4">
                          {item.q}
                        </span>
                        {/* Sunset Gradient + / − */}
                        <span
                          className="text-xl select-none bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] bg-clip-text text-transparent"
                          style={{
                            textShadow:
                              "0 0 10px rgba(255,126,95,0.35), 0 0 5px rgba(254,180,123,0.2)"
                          }}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-panel-${key}`}
                          className="px-4 pb-4 text-[#627027]"
                        >
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD Schema */}
      {enableJsonLd && jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
      )}
    </section>
  );
}
