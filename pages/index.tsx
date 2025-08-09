import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaSatellite,
  FaPeopleCarry,
  FaCode,
  FaHandsHelping,
} from "react-icons/fa";

export default function Home() {
  const stats = [
    { value: "200K+", label: "Personnel hours delivered" },
    { value: "27+",    label: "Disaster zones served" },
    { value: "10+",    label: "Years of crisis experience" },
  ];

  // Services array: Software & Integration second
  const services = [
    {
      title: "Power & Mobile JOC/TOC Solutions",
      description:
        "Rapid deployment of mobile ops centers, micro-grids and battery banks for any environment.",
      icon: <FaBolt size={32} className="text-[#0096c7]" />,
      audience: "Individuals, Contractors, Municipalities",
      link: "/services#power-command-solutions",
    },
    {
      title: "Software & A.I Integration",
      description:
        "Custom software, automation and integration solutions for command and control.",
      icon: <FaCode size={32} className="text-[#0096c7]" />,
      audience: "Organizations seeking digital solutions",
      link: "/services#software-integration",
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
        "Voice, data and broadband solutions—from handheld phones to high-bandwidth mesh networks.",
      icon: <FaSatellite size={32} className="text-[#0096c7]" />,
      audience: "Emergency Response, Remote Teams",
      link: "/services#satellite-infrastructure-connectivity",
    },
    {
      title: "Logistics & Deployment Support",
      description:
        "Staffing, transport and supply chain services to ensure people and equipment arrive mission-ready.",
      icon: <FaPeopleCarry size={32} className="text-[#0096c7]" />,
      audience: "Disaster Relief, Large Organizations",
      link: "/services#logistics-deployment-support",
    },
    {
      title: "Emergency Response Package",
      description:
        "Comprehensive package combining all our services for rapid emergency response.",
      icon: <FaHandsHelping size={32} className="text-[#0096c7]" />,
      audience: "Clients needing all-inclusive emergency response",
      link: "/services#emergency-response-package",
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

      {/* Hero Section */}
      <section className="relative z-10 w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center 15%" }}
        >
          <source src="/testv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Rapid Logistics, Power & Security Solutions
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-6 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Veteran-owned experts providing emergency and routine support across
            logistics, power, security and digital infrastructure.
          </motion.p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/careers"
              className="px-6 py-3 bg-[#0096c7] text-white font-semibold rounded-lg hover:bg-[#0077b6] transition"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#0096c7] text-[#0096c7] font-semibold rounded-lg hover:bg-[#0096c7] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-6 pb-20 pt-8 md:pt-12 bg-black text-center">
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
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
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

      {/* Impact Numbers (Counter) */}
      <section className="relative z-10 text-center overflow-hidden px-6 bg-black">
        <div
          className="relative mx-auto w-full max-w-7xl rounded-2xl overflow-hidden bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/guard.png')",
            aspectRatio: "16 / 9",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1b2a]/80" />
          <div className="relative h-full w-full flex items-center justify-center px-3 sm:px-6">
            <div className="max-w-7xl w-full">
              <div className="backdrop-blur-sm bg-black/25 rounded-2xl p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="px-1 sm:px-2">
                      <div className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        {value}
                      </div>
                      <div className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-200 mt-1 leading-snug">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section moved below the counter */}
<section className="relative z-10 px-6 py-16 bg-black">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Founder Image: flush left; shrunk ~10% on mobile by container width */}
    <div className="flex-shrink-0 w-[90%] md:w-1/3 flex justify-start">
      <img
        src="/founder.png"
        alt="Founder headshot"
        className="w-full h-60 md:h-72 object-contain rounded-2xl shadow-lg"
      />
    </div>
    {/* Founder Message */}
    <div className="w-full md:w-2/3 text-left">
      <h2 className="text-3xl font-bold mb-4 text-white">
        A Message from Our Founder
      </h2>
      <p className="text-gray-300 leading-relaxed">
        As founder and director of operations, I created Novator Group to
        empower first responders and organizations with the tools and
        expertise they need in times of crisis. Our veteran‑led team
        understands what it takes to deliver under pressure. Whether it’s
        deploying mobile command centers or integrating cutting‑edge
        software and AI, we’re here to serve those who serve others.
      </p>
      <p className="mt-4 text-[#0096c7] font-semibold">
        – John Mills, Founder & Director of Operations
      </p>
    </div>
  </div>
</section>


    </div>
  );
}
