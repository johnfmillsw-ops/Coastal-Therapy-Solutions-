import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaShip, FaRobot, FaCode } from "react-icons/fa";
import type { ReactNode } from "react";

const STEEL = "#1b263b";
const CONTAINER = "max-w-7xl mx-auto";

type CareerTitle = "Armed Guard" | "Boat Rescue" | "Drone Operator" | "Software Engineer";
interface Career {
  title: CareerTitle;
  description: string;
  pay: string;
  requirements: string[];
  link: string;
}

const careers: Career[] = [
  {
    title: "Armed Guard",
    description: "Provide licensed armed security for high-risk deployments.",
    pay: "$450/day",
    requirements: ["Clean background", "Firearm license", "Security experience"],
    link: "/job-armed-guard",
  },
  {
    title: "Boat Rescue",
    description: "Assist in high-water evacuation and supply missions.",
    pay: "$500/day",
    requirements: ["Swimmer certification", "Boat handling experience", "Rescue training"],
    link: "/job-boat-rescue",
  },
  {
    title: "Drone Operator",
    description: "Deploy drones for reconnaissance and real-time intel.",
    pay: "$400/day",
    requirements: ["FAA Part 107 license", "Drone ops experience", "Map reading skills"],
    link: "/job-drone",
  },
  {
    title: "Software Engineer",
    description: "Build and maintain mission-critical tech solutions.",
    pay: "$600/day",
    requirements: ["React/Next.js", "API integrations", "On-call availability"],
    link: "/job-software-engineer",
  },
];

const iconMap: Record<CareerTitle, ReactNode> = {
  "Armed Guard": <FaShieldAlt size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "Boat Rescue": <FaShip size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "Drone Operator": <FaRobot size={40} className="text-[#00b4d8]" aria-hidden="true" />,
  "Software Engineer": <FaCode size={40} className="text-[#00b4d8]" aria-hidden="true" />,
};

export default function CareersPage() {
  const BADGE =
    "inline-flex items-center rounded-full border border-sky-400/40 px-3 py-1 text-xs text-[#cdeffd] bg-[#0d1b2a]/60";
  const BTN_PRIMARY =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-slate-900 hover:brightness-110 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40";

  return (
    <>
      <Head>
        <title>Careers at Novator – Join Our Team</title>
        <meta
          name="description"
          content="Explore open roles in emergency response, logistics and technology at Novator Group."
        />
        <style>{`
          html, body, #__next, #__next > div, #__next > div > div {
            margin: 0 !important;
            padding: 0 !important;
            background: black !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-x: hidden !important;
          }
          footer, .footer {
            background: #0d1b2a !important;
            margin-top: 0 !important;
            position: relative !important;
            z-index: 0 !important;
          }
        `}</style>
      </Head>

      <div className="bg-black text-white min-h-screen font-sans flex flex-col gap-0 mt-[-2rem]">
        {/* Upgraded hero header with responsive hierarchy */}
        <header className="relative z-30 bg-black">
          {/* Subtle brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 240px at 10% -10%, rgba(0,180,216,0.15), transparent 65%), radial-gradient(700px 220px at 100% 0%, rgba(0,180,216,0.10), transparent 65%)",
            }}
          />
          <div className={`${CONTAINER} px-6 pt-28 pb-8 sm:pb-10`}>
            <motion.h1
              className={[
                "bg-gradient-to-r from-white via-white to-sky-200 bg-clip-text text-transparent",
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
                "leading-[1.15] md:leading-[1.08]",
                "drop-shadow-[0_0_24px_rgba(0,180,216,0.15)]",
                "text-center md:text-left",
              ].join(" ")}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Join Novator Ops
            </motion.h1>

            <motion.p
              className={[
                "mt-3 sm:mt-4 max-w-[72ch]",
                "text-base sm:text-lg md:text-xl leading-relaxed",
                "text-sky-100/90",
                "text-center md:text-left",
              ].join(" ")}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We’re always looking for people who thrive under pressure and want to make a real impact—
              from field security and rescue to aerial intel and mission-critical software.
            </motion.p>
          </div>
        </header>

        {/* Roles grid */}
        <section className="px-6 pb-16 pt-0">
          <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
            {careers.map((career) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full rounded-3xl p-5 text-left shadow-xl cursor-pointer"
                style={{ backgroundColor: STEEL }}
                onClick={() => {
                  window.location.href = career.link;
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                  }}
                ></div>
                <div className="flex items-center gap-3 mb-3">
                  {iconMap[career.title]}
                  <h2 className="text-xl font-semibold text-white">{career.title}</h2>
                </div>
                <p className="text-[#cbd5e1] text-sm mb-4">{career.description}</p>
                <div className="mb-4">
                  <span className={BADGE}>Pay: {career.pay}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {career.requirements.map((req) => (
                    <span key={req} className={BADGE}>
                      {req}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-sky-200/90">Open brief</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className={`${CONTAINER} mt-8 text-center`}>
            <p className="mb-4 text-lg text-[#adb5bd]">
              Don’t see a role that fits? We’d still love to hear from you.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="inline-block">
              <Link href="/resume" className={BTN_PRIMARY}>
                Send Us Your Resume
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
