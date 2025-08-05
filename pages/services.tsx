import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaSatellite, FaPeopleCarry } from "react-icons/fa";

/**
 * Defines the services offered by Novator. Each item includes a title,
 * description, target audience and link to a detail page. The array
 * drives the rendering of service cards below.
 */
const services = [
  {
    title: "Emergency Power Solutions",
    icon: FaBolt,
    description:
      "Rapid deployment of mobile power units and energy grids in disaster zones and remote locations.",
    audience: "Individuals, Contractors, Municipalities",
    link: "/services/power",
  },
  {
    title: "Private Security & Escort",
    icon: FaShieldAlt,
    description:
      "Secure transport and protection for high‑risk personnel or sensitive materials, including armed escorts.",
    audience: "Executives, NGOs, Government",
    link: "/services/security",
  },
  {
    title: "Satellite Comms & Connectivity",
    icon: FaSatellite,
    description:
      "Field‑ready satellite communication tools and broadband services for off‑grid operations.",
    audience: "Emergency Response, Remote Teams",
    link: "/services/satellite",
  },
  {
    title: "Logistics & Response Personnel",
    icon: FaPeopleCarry,
    description:
      "Staffing, deployment and resource movement to meet the urgent needs of disaster zones or operations.",
    audience: "Disaster Relief, Large Organizations",
    link: "/services/logistics",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services – Novator Group</title>
        <meta
          name="description"
          content="Explore Novator Group's emergency power, security, satellite communications and logistics services."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map(({ title, icon: Icon, description, audience, link }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#00b4d8] rounded-2xl p-6 shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Icons are decorative; hide them from screen readers */}
                <Icon size={32} className="text-[#00b4d8]" aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-[#00b4d8]">{title}</h2>
              </div>
              <p className="mb-3 text-[#adb5bd]">{description}</p>
              <p className="text-sm mb-4 italic text-[#dee2e6]">For: {audience}</p>
              <Link href={link} className="text-[#00b4d8] hover:text-white hover:underline text-sm">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Call to action after listing services */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">Need a custom solution? Our specialists are standing by to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
          >
            Get in Touch
          </Link>
        </div>
      </main>
    </>
  );
}