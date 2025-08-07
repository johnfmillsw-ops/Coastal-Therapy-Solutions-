import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaShip, FaRobot, FaCode } from "react-icons/fa";

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
    description: "Provide licensed armed security for high‑risk deployments.",
    pay: "$450/day",
    requirements: ["Clean background", "Firearm license", "Security experience"],
    link: "/job-armed-guard",
  },
  {
    title: "Boat Rescue",
    description: "Assist in high‑water evacuation and supply missions.",
    pay: "$500/day",
    requirements: ["Swimmer certification", "Boat handling experience", "Rescue training"],
    link: "/job-boat-rescue",
  },
  {
    title: "Drone Operator",
    description: "Deploy drones for reconnaissance and real‑time intel.",
    pay: "$400/day",
    requirements: ["FAA Part 107 license", "Drone ops experience", "Map reading skills"],
    link: "/job-drone",
  },
  {
    title: "Software Engineer",
    description: "Build and maintain mission‑critical tech solutions.",
    pay: "$600/day",
    requirements: ["React/Next.js", "API integrations", "On‑call availability"],
    link: "/job-software-engineer",
  },
];

const iconMap: Record<CareerTitle, React.ReactNode> = {
  "Armed Guard": <FaShieldAlt size={40} className="text-[#0096c7]" aria-hidden="true" />,
  "Boat Rescue": <FaShip size={40} className="text-[#0096c7]" aria-hidden="true" />,
  "Drone Operator": <FaRobot size={40} className="text-[#0096c7]" aria-hidden="true" />,
  "Software Engineer": <FaCode size={40} className="text-[#0096c7]" aria-hidden="true" />,
};

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers at Novator – Join Our Team</title>
        <meta
          name="description"
          content="Explore open roles in emergency response, logistics and technology at Novator Group."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#0096c7]">Join Novator Ops</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-[#adb5bd]">
          We’re always looking for talented people who thrive under pressure and want to make a real difference.
          Whether you’re rescuing families from flood waters, piloting drones or building mission‑critical software,
          there’s a place for you on our team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {careers.map((career) => (
            <div
              key={career.title}
              className="bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#0096c7] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="flex items-center gap-4 mb-4">
                  {iconMap[career.title]}
                  <h2 className="text-xl font-semibold text-[#0096c7]">{career.title}</h2>
                </div>
                <p className="mb-4">{career.description}</p>
                <p className="font-semibold mb-2">Pay: {career.pay}</p>
                <ul className="list-disc list-inside text-sm mb-4 text-[#adb5bd]">
                  {career.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
                <Link href={career.link} className="text-[#0096c7] hover:text-white hover:underline">
                  View Job Details →
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        {/* CTA for general applications */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg">
            Don’t see a role that fits? We’d still love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
          >
            Send Us Your Resume
          </Link>
        </div>
      </main>
    </>
  );
}
