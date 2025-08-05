import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
// Icons for our service highlights
import { FaBolt, FaShieldAlt, FaSatellite, FaPeopleCarry } from "react-icons/fa";
// Import custom animation styles for landing page

/**
 * The home page introduces visitors to Novator Group with a striking
 * video hero section and highlights the core strengths of the
 * organization. It uses scroll‑based animations to create engagement
 * without sacrificing performance. At the bottom of the page, clear
 * calls to action guide users toward exploring services or getting in touch.
 */
export default function Home() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  const features = [
    {
      title: "Rapid Deployment",
      description: "Mobilize critical resources within hours to disaster zones around the globe.",
    },
    {
      title: "Integrated Command",
      description: "Mobile command centers with satellite connectivity ensure seamless coordination.",
    },
    {
      title: "Veteran Expertise",
      description: "Teams with extensive military and civilian crisis experience lead every mission.",
    },
    {
      title: "Autonomous Tech",
      description: "Drones and robotics enhance reconnaissance and deliver supplies efficiently.",
    },
    {
      title: "Scalable Logistics",
      description: "From small teams to large operations, our logistics scale to meet any need.",
    },
  ];

  // Key company statistics displayed below the hero section. Feel free
  // to update these values as your organization grows.
  const stats = [
    { value: "200,000+", label: "Personnel hours delivered" },
    { value: "27+", label: "Disaster zones served" },
    { value: "10+", label: "Years of crisis experience" },
  ];

  // A concise summary of our core services for quick reference on the
  // landing page. Each entry includes a title, icon component and
  // description matching the full Services page.
  const serviceHighlights = [
    {
      title: "Emergency Power",
      icon: FaBolt,
      description: "Rapid deployment of mobile power units and grids in remote or disaster‑hit zones.",
      link: "/services/power",
    },
    {
      title: "Private Security",
      icon: FaShieldAlt,
      description: "Armed escorts and protective services for high‑risk personnel and sensitive cargo.",
      link: "/services/security",
    },
    {
      title: "Satellite Comms",
      icon: FaSatellite,
      description: "Field‑ready satellite communication and broadband connectivity for off‑grid ops.",
      link: "/services/satellite",
    },
    {
      title: "Logistics Personnel",
      icon: FaPeopleCarry,
      description: "Scalable staffing and resource movement to meet the urgent needs of any operation.",
      link: "/services/logistics",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Head>
        <title>Novator Group – Emergency Response & Logistics</title>
        <meta
          name="description"
          content="Veteran‑owned and debt‑free, Novator Group delivers mission‑critical solutions at the speed of need."
        />
      </Head>
      {/* Background video scales subtly on scroll for a parallax effect */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-screen object-cover z-0"
        style={{ scale, opacity }}
      >
        <source src="/video-background.mp4" type="video/mp4" />
        Your browser does not support the background video.
      </motion.video>
      {/* Semi‑transparent overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Hero headline and subheadline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          When Every Second Counts, We Deliver
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-2xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Veteran‑owned and debt‑free, Novator Group deploys rapid logistics and emergency response when and where it’s needed most.
        </motion.p>
        {/* Calls to action */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-3 px-6 rounded-full transition"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white hover:bg-white hover:text-black py-3 px-6 rounded-full transition"
          >
            Get Support
          </Link>
          <Link
            href="/careers"
            className="border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black py-3 px-6 rounded-full transition"
          >
            Join Our Team
          </Link>
        </motion.div>
        {/* Impact statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-[#00b4d8]">{stat.value}</span>
              <span className="text-sm md:text-base text-gray-300 mt-1 text-center max-w-[10rem]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main content area: key features and service highlights */}
      <div className="relative z-20 bg-[#0d1b2a] text-white px-6 py-28 space-y-24">
        {/* Feature sections triggered as the user scrolls */}
        <div className="space-y-24">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              className="max-w-4xl mx-auto text-center bg-[#1b263b] p-10 rounded-3xl shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#00b4d8]">{feat.title}</h2>
              <p className="text-lg text-[#adb5bd]">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service highlights section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map(({ title, icon: Icon, description, link }, idx) => (
              <motion.div
                key={title}
                className="bg-[#1b263b] border border-[#00b4d8] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <Icon size={32} className="mx-auto mb-3 text-[#00b4d8]" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-[#00b4d8] mb-2">{title}</h3>
                <p className="text-sm text-[#adb5bd] mb-4">{description}</p>
                <Link href={link} className="text-sm text-[#00b4d8] hover:underline">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}