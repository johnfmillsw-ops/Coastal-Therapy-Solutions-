import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaShip, FaRobot, FaCode } from "react-icons/fa";
import type { ReactNode } from "react";

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
  // Design tokens (match index page)
  const CONTAINER = "max-w-7xl mx-auto";
  const CARD =
    "relative overflow-hidden rounded-2xl p-6 bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] " +
    "border border-[#00b4d8]/30 shadow-[0_0_30px_rgba(0,180,216,0.12)]";
  const CARD_HOVER = "hover:border-[#00b4d8]/60 hover:shadow-[0_0_40px_rgba(0,180,216,0.25)]";
  const BADGE =
    "inline-flex items-center rounded-full border border-[#00b4d8]/40 px-3 py-1 text-xs " +
    "text-[#cdeffd] bg-[#0d1b2a]/60";
  const BTN_PRIMARY =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold " +
    "bg-[#00b4d8] text-black hover:bg-white transition";
  const LINK_FADE = "text-white hover:text-[#00b4d8] font-medium";

  return (
    <>
      <Head>
        <title>Careers at Novator – Join Our Team</title>
        <meta
          name="description"
          content="Explore open roles in emergency response, logistics and technology at Novator Group."
        />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Header */}
        <section className="px-6 pt-12 pb-6">
          <div className={`${CONTAINER} text-center`}>
            <h1 className="text-4xl font-bold mb-4">Join Novator Ops</h1>
            <p className="text-[#adb5bd] max-w-2xl mx-auto">
              We’re always looking for people who thrive under pressure and want to make a real impact—
              from field security and rescue to aerial intel and mission-critical software.
            </p>
          </div>
        </section>

        {/* Roles Grid */}
        <section className="px-6 pb-16">
          <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
            {careers.map((career) => (
              <motion.div
                key={career.title}
                className={`${CARD} ${CARD_HOVER} group`}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* subtle glow accent */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition
                                bg-[radial-gradient(120px_60px_at_100%_0%,rgba(0,180,216,0.20),transparent_60%)]" />

                <div className="flex items-center gap-3 mb-3">
                  {iconMap[career.title]}
                  <h2 className="text-xl font-semibold text-[#00b4d8]">{career.title}</h2>
                </div>

                <p className="text-[#cbd5e1] text-sm mb-4">{career.description}</p>

                <div className="mb-4">
                  <span className={BADGE}>Pay: {career.pay}</span>
                </div>

                {/* Requirements as chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {career.requirements.map((req) => (
                    <span key={req} className={BADGE}>
                      {req}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link href={career.link} className={LINK_FADE}>
                    Details →
                  </Link>
                  <Link href={career.link} className={BTN_PRIMARY}>
                    Apply
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA for general applications */}
          <div className={`${CONTAINER} mt-8 text-center`}>
            <p className="mb-4 text-lg">
              Don’t see a role that fits? We’d still love to hear from you.
            </p>
            <Link href="/resume" className={BTN_PRIMARY}>
              Send Us Your Resume
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
