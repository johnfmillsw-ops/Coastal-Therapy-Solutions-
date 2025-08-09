import Head from "next/head";
import Link from "next/link";
import {
  FaBolt,
  FaShieldAlt,
  FaSatellite,
  FaPeopleCarry,
  FaCode,
} from "react-icons/fa";

/**
 * Defines expanded service cards with detailed descriptions and key points.
 */
const services = [
  {
    title: "Power & Mobile JOC/TOC Solutions",
    Icon: FaBolt,
    description:
      "Reliable power and command capability are vital for mission success, not just in emergencies, but for any remote or austere operation. Novator delivers Mobile JOC/TOC Solutions, micro‑grids and battery banks that integrate communications, control systems and scalable energy output. Whether restoring electricity after a hurricane or powering a remote base camp, our solutions ensure your teams stay operational and connected.",
    keyPoints: [
      "Mobile command units with onboard power, satellite connectivity, fresh water and generators",
      "High‑capacity generators, micro‑grids and modular battery storage",
      "Portable solar arrays and renewable options for sustainable operations",
      "Remote monitoring, fuel management and technical support",
      "Rapid deployment and scalable power distribution for any mission size",
    ],
  },
  {
    // Moved this card up, directly after Power & Mobile JOC/TOC
    title: "Software & A.I. Integration",
    Icon: FaCode,
    description:
      "Digital infrastructure is the backbone of modern operations. Novator designs and builds custom software platforms that bring together disparate data sources—from sensors and satellites to unmanned systems and field personnel—into unified command and control environments. Our engineers develop intuitive interfaces, automation scripts and analytics tools that give you real‑time insight and actionable intelligence when it matters most.",
    keyPoints: [
      "Development of custom command and control software and dashboards",
      "Integration of sensors, satellite feeds and robotics data streams",
      "Real‑time analytics, mapping and reporting tools for operational insight",
      "Secure APIs, data interfaces and automation workflows",
      "Cloud and edge computing solutions for remote and austere environments",
    ],
  },
  {
    title: "Security & Escort",
    Icon: FaShieldAlt,
    description:
      "Safety is non‑negotiable in any environment. Novator’s security personnel are licensed, insured and extensively trained to protect people and assets across the globe. Our experts provide executive protection, convoy escorts, site security and intelligence support, leveraging local partnerships and advanced surveillance technology—including drones and autonomous systems—to keep you secure.",
    keyPoints: [
      "Armed escorts and secure transport for personnel and sensitive shipments",
      "Perimeter security, access control and base defense for field operations",
      "Close protection for VIPs, diplomats, aid workers and corporate executives",
      "Intelligence‑led threat assessment, surveillance and evacuation planning",
      "Integration of unmanned aerial systems and remote monitoring",
    ],
  },
  {
    title: "Satellite Infrastructure & Connectivity",
    Icon: FaSatellite,
    description:
      "Reliable connectivity underpins every successful mission. Novator delivers full‑spectrum satellite infrastructure—from handheld voice terminals to high‑bandwidth broadband and mesh networks—ensuring uninterrupted communications for teams operating off the grid. We design, deploy and maintain networks that integrate sensors, drones and remote IoT devices, with training and support to keep you connected around the clock.",
    keyPoints: [
      "Iridium, Inmarsat and other multi‑orbit voice/data terminals",
      "Portable VSAT broadband dishes and high‑bandwidth satellite links",
      "Starlink kits and rapid‑deploy satellite solutions",
      "Mesh networking, remote IoT gateways and sensor integration",
      "Network architecture design, 24/7 monitoring and technical support",
    ],
  },
  {
    title: "Logistics & Deployment Support",
    Icon: FaPeopleCarry,
    description:
      "Every operation hinges on seamless logistics. Novator coordinates global transportation, warehousing, procurement and staffing to ensure people and equipment arrive where they’re needed—on time and ready to work. Our teams integrate with military, humanitarian and corporate partners, bringing expertise in supply chains, fleet management and field infrastructure.",
    keyPoints: [
      "Rapid staffing for specialized roles—from medics and engineers to drivers and logisticians",
      "Multi‑modal transport solutions (air, sea and ground) for supplies, equipment and personnel",
      "End‑to‑end supply chain coordination, procurement and asset tracking",
      "Base camp setup, field kitchens, shelters and mission support infrastructure",
      "Fleet management and maintenance for vehicles and equipment",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services – Novator Group</title>
        <meta
          name="description"
          content="Explore Novator Group's expanded services—power and command, security, satellite infrastructure, logistics support and software integration—featuring detailed capabilities and a unified emergency response option."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="space-y-12">
          {services.map(({ title, Icon, description, keyPoints }) => {
            const slug = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            return (
              <div
                key={title}
                id={slug}
                className="bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#0096c7] rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon size={32} className="text-[#0096c7]" aria-hidden="true" />
                  <h2 className="text-2xl font-semibold text-[#0096c7]">
                    {title}
                  </h2>
                </div>
                <p className="mb-4 text-[#adb5bd]">{description}</p>
                <ul className="list-disc list-inside space-y-2 text-[#adb5bd] mb-6">
                  {keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Emergency Response section */}
        <section className="mt-16 bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#0096c7] rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-[#0096c7] mb-4">
            Emergency Response Solutions
          </h2>
          <p className="text-[#adb5bd] mb-4">
            When crises strike, you need a partner who can deliver power,
            security, communications, logistics and software simultaneously.
            Novator can combine any of our services into a unified emergency
            response package tailored to your situation.
          </p>
          <p className="text-[#adb5bd]">
            Our experts mobilize rapidly to restore power, secure personnel and
            sites, establish communications and deploy critical supplies—keeping
            your operations and communities safe.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
            >
              Request Emergency Support
            </Link>
          </div>
        </section>

        {/* Final call-to-action */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg">
            Need a custom solution? Our specialists are standing by to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
          >
            Get in Touch
          </Link>
        </div>
      </main>
    </>
  );
}
