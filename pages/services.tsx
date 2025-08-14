import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import ServiceRequestForm from "../components/ServiceRequestForm";
import { FaBolt, FaShieldAlt, FaCode } from "react-icons/fa";

/** Map display titles -> form option titles (so preselect matches your form options) */
const SERVICE_TITLE_TO_FORM_OPTION: Record<string, string> = {
  "Rapid Power & Comms Kits": "Power & Connectivity Solutions",
  "Search & Rescue + Security": "Emergency Response Package",
  "Command Dashboards & AI Tools": "Software & AI Solutions",
};

/**
 * Defines expanded service cards with detailed descriptions and key points.
 */
const services = [
  {
    title: "Rapid Power & Comms Kits",
    Icon: FaBolt,
    description:
      "Stackable power and communications kits ready for any mission. Our rapid kits combine diesel and solar generators with modular battery banks, scalable micro-grids and mobile command vehicles. Each unit comes equipped with Starlink kits and satphones so you can restore power, water and connectivity after a disaster or spin up a remote base camp in hours. We also provide shelters, base-camp setup and remote monitoring to keep operations running smoothly.",
    keyPoints: [
      "Scalable microgrids, diesel & solar generators and battery banks",
      "Mobile command vehicles with integrated power, comms, water and workspace",
      "Starlink kits and satphones for connectivity",
      "Shelters, base-camp setup and mission support infrastructure",
      "Remote monitoring, fuel management and rapid deployment",
    ],
  },
  {
    title: "Search & Rescue + Security",
    Icon: FaShieldAlt,
    description:
      "From reconnaissance to armed protection, our teams are ready. We conduct search and rescue operations on land and water, provide armed guards to protect people and assets, and act as liaisons with government agencies to secure permits and coordinate joint responses. Rapid mobilisation and threat assessments ensure your team and mission remain safe. Our logistics expertise means we can staff, transport and sustain these missions anywhere.",
    keyPoints: [
      "Search & recon teams and boat rescue for flood and coastal emergencies",
      "Armed guards and close protection for personnel and assets",
      "Government liaison to coordinate with authorities and secure permits",
      "Rapid staffing, transport and evacuation planning",
      "Intelligence-led threat assessment and surveillance",
    ],
  },
  {
    title: "Command Dashboards & AI Tools",
    Icon: FaCode,
    description:
      "Unify data streams and automate workflows with lightweight software solutions. We build custom dashboards that bring together sensor feeds, satellite links, GPS and field reports into a single picture. Smart dispatch tools prioritise calls and tasks, while simple AI modules and chatbots handle routine questions and reporting—freeing your team for critical decisions.",
    keyPoints: [
      "Custom command dashboards and analytics modules",
      "Integration of sensors, satellite feeds, GPS and field reports",
      "Smart dispatch tools for call triage and tasking",
      "Automation scripts and chatbots to reduce manual workload",
      "Secure APIs and data interfaces for cloud or edge deployments",
    ],
  },
] as const;

export default function ServicesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const scrollYRef = useRef(0);

  // ESC to close (restore scroll)
  useEffect(() => {
    if (!formOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formOpen]);

  const openModal = (svc: string) => {
    setSelectedService(svc);
    // capture current scroll position
    scrollYRef.current = window.scrollY || window.pageYOffset || 0;

    // lock body to prevent background scroll, without jump
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    setFormOpen(true);
  };

  const closeModal = () => {
    setFormOpen(false);

    // restore body styles and scroll
    const body = document.body;
    const top = body.style.top;
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";

    const y = top ? -parseInt(top || "0", 10) : scrollYRef.current;
    window.scrollTo(0, y);
  };

  return (
    <>
      <Head>
        <title>Our Services – Novator Group</title>
        <meta
          name="description"
          content="Explore Novator Group's services—rapid power and mobile command kits, search and rescue with security, and command dashboards with AI tools."
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
                  <button
                    type="button"
                    onClick={() => {
                      const mapped = SERVICE_TITLE_TO_FORM_OPTION[title] ?? title;
                      openModal(mapped);
                    }}
                    className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Emergency Response section */}
        <section
          id="emergency-response-solutions"
          className="mt-16 bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#0096c7] rounded-2xl p-8 shadow-lg text-center"
        >
          <h2 className="text-2xl font-semibold text-[#0096c7] mb-4">
            Emergency Response Solutions
          </h2>
          <p className="text-[#adb5bd] mb-4">
            When crises strike, you need a partner who can deliver power,
            security, communications and software simultaneously.
            Novator can combine any of our services into a unified emergency
            response package tailored to your situation.
          </p>
          <p className="text-[#adb5bd]">
            Our experts mobilise rapidly to restore power, secure personnel and
            sites, establish communications and deploy critical supplies—keeping
            your operations and communities safe.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => openModal("")}
              className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
            >
              Request Emergency Support
            </button>
          </div>
        </section>

        {/* Final call-to-action */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg">
            Need a custom solution? Our specialists are standing by to help.
          </p>
          <button
            type="button"
            onClick={() => openModal("")}
            className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
          >
            Get in Touch
          </button>
        </div>

        {/* Modal with ServiceRequestForm (scrollable on mobile) */}
        {formOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] bg-black/70 p-4 overflow-y-auto"
            onMouseDown={(e) => {
              // click outside the card closes
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="relative mx-auto my-8 w-full max-w-3xl">
              {/* The form's own X calls onClose → closeModal(), logo goes home */}
              <ServiceRequestForm
                defaultService={selectedService}
                compact
                onSubmitted={closeModal}
                onClose={closeModal}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
