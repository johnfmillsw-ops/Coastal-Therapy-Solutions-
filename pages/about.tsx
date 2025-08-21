// pages/about.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const CONTAINER = "max-w-7xl mx-auto px-6";
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <>
      <Head>
        <title>How We Got Here – Novator Group</title>
        <meta
          name="description"
          content="No community should face crisis alone. Learn how Novator Group restores power, connectivity, and safety—fast."
        />
        <style>{`
          :root{
            --bg:#000;
            --fg:#fff;
            --muted:#d4d4d8;
            --border:rgba(255,255,255,0.10);
            --card:rgba(255,255,255,0.05);
            --cta:rgba(255,255,255,0.10);
            --ctaHover:rgba(255,255,255,0.20);
          }
          html, body, #__next, #__next > div, #__next > div > div {
            margin: 0 !important;
            padding: 0 !important;
            background: var(--bg) !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-x: hidden !important;
            color: var(--fg);
          }
          footer, .footer {
            background: #0d1b2a !important;
            margin-top: 0 !important;
            position: relative !important;
            z-index: 0 !important;
          }
          .card { border: 1px solid var(--border); background: var(--card); }
          .btn  { border: 1px solid var(--border); background: var(--cta); }
          .btn:hover { background: var(--ctaHover); }
          .section-sep { border-top: 1px solid var(--border); }
        `}</style>
      </Head>

      <main className="w-full text-white">
        {/* HERO */}
        <section className="relative w-full overflow-hidden">
          {/* Image background */}
          <div className="absolute inset-0">
            <Image
              src="https://www.novatorgroupllc.com/boat.png"
              alt="Novator field operations"
              fill
              priority
              unoptimized
              className="object-cover opacity-70"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
          </div>

          {/* Brand glow (matches Careers) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 240px at 10% -10%, rgba(0,180,216,0.15), transparent 65%), radial-gradient(700px 220px at 100% 0%, rgba(0,180,216,0.10), transparent 65%)",
            }}
          />

          <div className={`${CONTAINER} relative py-24 sm:py-28 lg:py-36`}>
            <motion.h1
              {...fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              How We Got Here
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-3xl"
              style={{ color: "var(--muted)" }}
            >
              No community should face crisis alone. When disaster hits, the basics can disappear
              in an instant. We built Novator Group to show up for those moments. Veteran-owned and
              rooted in service, our team focuses on restoring power, bringing connectivity back
              online, and keeping people safe.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="mt-8"
            >
              <Link
                href="/#request-service"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-medium backdrop-blur transition btn"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* IMPACT / COUNTERS */}
        <section className="section-sep">
          <div className={`${CONTAINER} py-14`}>
            <motion.h2
              {...fadeUp}
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
            >
              Our Impact
            </motion.h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { kpi: "200K+", label: "Hours", desc: "Supporting communities in crisis" },
                { kpi: "27+", label: "Disasters", desc: "From hurricanes to wildfires" },
                { kpi: "10+", label: "Years", desc: "Field-tested operations" },
                { kpi: "100%", label: "Debt-Free", desc: "Investing in capability, not overhead" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl p-5 card"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="text-3xl font-semibold">{item.kpi}</div>
                  <div className="mt-1 text-sm uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                    {item.label}
                  </div>
                  <div className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE’VE WORKED WITH */}
        <section className="section-sep">
          <div className={`${CONTAINER} py-14`}>
            <motion.h2
              {...fadeUp}
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
            >
              Who We’ve Worked With
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="mt-5 max-w-4xl"
              style={{ color: "var(--muted)" }}
            >
              FEMA • The Red Cross • U.S. military units • State agencies • Municipal partners •
              Private sector operators
            </motion.p>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section className="section-sep">
          <div className={`${CONTAINER} py-14`}>
            <motion.h2
              {...fadeUp}
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
            >
              Get Involved
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="mt-5 max-w-3xl"
              style={{ color: "var(--muted)" }}
            >
              We’re looking for people who perform under pressure and value steady execution—
              from protective operations and rescue to aerial intel and mission-critical software.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="mt-8"
            >
              <Link href="/careers" className="inline-flex items-center rounded-xl px-6 py-3 text-base font-medium backdrop-blur transition btn">
                Available Roles
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FOUNDER MESSAGE (pb-8 to match footer spacing on site) */}
        <section className="section-sep">
          <div className={`${CONTAINER} py-14 grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-6 items-start`}>
            <div className="relative w-40 h-40 mx-auto lg:mx-0">
              <Image
                src="https://www.novatorgroupllc.com/founder.png"
                alt="John Mills, Founder & Director of Operations"
                fill
                sizes="160px"
                unoptimized
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ border: "1px solid var(--border)" }} />
            </div>

            <div>
              <motion.h3 {...fadeUp} className="text-xl sm:text-2xl font-semibold tracking-tight">
                A Personal Message
              </motion.h3>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
                className="mt-4 leading-relaxed max-w-3xl"
                style={{ color: "var(--muted)" }}
              >
                We built Novator Group to deliver modular capability—power, connectivity, protective
                operations, and software—so teams can operate anywhere. When time is tight, repeatable
                kits and clear checklists turn into reliable outcomes.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.16 }}
                className="mt-4 text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                — John Mills, Founder &amp; Director of Operations
              </motion.p>

              <div className="mt-8">
                <Link href="/services" className="inline-flex items-center rounded-xl px-6 py-3 text-base font-medium backdrop-blur transition btn">
                  View Our Services
                </Link>
                <Link
                  href="/#request-service"
                  className="ml-3 inline-flex items-center rounded-xl px-6 py-3 text-base font-medium backdrop-blur transition btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom padding to align with footer spacing (mirrors Careers/Index) */}
          <div className={`${CONTAINER} pb-8`} />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
