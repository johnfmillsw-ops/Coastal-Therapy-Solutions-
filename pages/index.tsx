import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaSatellite,
  FaPeopleCarry,
  FaCode,
} from "react-icons/fa";

export default function Home() {
  const stats = [
    { value: "200,000+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  const services = [
    {
      title: "Power & Command Solutions",
      description:
        "Rapid deployment of mobile command units, micro‑grids and battery banks for any environment.",
      icon: <FaBolt size={32} className="text-[#0096c7]" />,
      audience: "Individuals, Contractors, Municipalities",
      link: "/services#power-command-solutions",
    },
    {
      title: "Security & Escort",
      description:
        "Licensed teams providing secure transport, perimeter defense and executive protection.",
      icon: <FaShieldAlt size={32} className="text-[#0096c7]" />,
      audience: "Executives, NGOs, Government",
      link: "/services#security-escort",
    },
    {
      title: "Satellite Infrastructure & Connectivity",
      description:
        "Voice, data and broadband solutions—from handheld phones to high‑bandwidth mesh networks.",
      icon: <FaSatellite size={32} className="text-[#0096c7]" />,
      audience: "Emergency Response, Remote Teams",
      link: "/services#satellite-infrastructure-connectivity",
    },
    {
      title: "Logistics & Deployment Support",
      description:
        "Staffing, transport and supply chain services to ensure people and equipment arrive mission‑ready.",
      icon: <FaPeopleCarry size={32} className="text-[#0096c7]" />,
      audience: "Disaster Relief, Large Organizations",
      link: "/services#logistics-deployment-support",
    },
    {
      title: "Software & Integration",
      description:
        "Custom software, automation and integration solutions for command and control.",
      icon: <FaCode size={32} className="text-[#0096c7]" />,
      audience: "Organizations seeking digital solutions",
      link: "/services#software-integration",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative font-sans">
      <Head>
        <title>Novator Group – Logistics & Emergency Solutions</title>
        <meta
          name="description"
          content="Discover how Novator Group delivers tailored logistics, power, tech, and security solutions for both day-to-day operations and emergencies."
        />
      </Head>

      {/* Hero Section with full video */}
      <section className="relative z-10 w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/testv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Mission‑Critical Solutions for Any Environment
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-10 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Serving individuals, small businesses, and enterprise clients across
            logistics, power, security, software, and tech—emergency or not.
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative z-10 px-6 py-16 bg-black text-center border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Who We Are
        </h2>
        <p className="max-w-4xl mx-auto text-gray-400">
          Novator Group is a veteran-owned provider of emergency and non-emergency
          logistics, security, power, and digital infrastructure. With deep roots
          in disaster response, defense, and infrastructure support, we deliver
          scalable, agile solutions for clients ranging from municipalities and NGOs
          to private contractors and federal agencies.
        </p>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-6 py-20 bg-black border-t border-gray-800 text-center">
        {/* “What We Do” title in white to match other section headings */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#0096c7] rounded-2xl p-6 shadow-lg transition hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0096c7]">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
                <p className="text-xs text-gray-400 italic">
                  For: {service.audience}
                </p>
              </div>
              <div className="pt-4 text-sm">
                <Link
                  href={service.link}
                  className="text-white hover:text-[#0096c7] font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="relative z-10 px-6 py-20 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Our Impact
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl font-extrabold text-[#0096c7]">
                {value}
              </div>
              <div className="text-sm text-gray-400 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
