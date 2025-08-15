import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceRequestForm from "../components/ServiceRequestForm";
import { FaBolt, FaShieldAlt, FaCode } from "react-icons/fa";

const STEEL = "#1b263b";
const CONTAINER = "max-w-7xl mx-auto";

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
        {/* Header */}
        <header className="w-full h-[80px] flex items-center bg-black z-20">
          <div className="max-w-7xl px-6 mx-auto flex items-center w-full">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Our Services
            </h1>
          </div>
        </header>
        {/* Content section */}
        <section className="bg-black flex-1 px-6 pb-20 pt-0 m-0 z-10">
          <div className={CONTAINER}>
            {/* Services cards */}
            <div className="space-y-12">
              {services.map(({ title, Icon, description, keyPoints }) => {
                const slug = title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");
                return (
                  <motion.div
                    key={title}
                    id={slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 20px rgba(0,180,216,0.2)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full rounded-3xl border border-white/10 p-5 text-left shadow-xl transition-colors hover:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    style={{ backgroundColor: STEEL }}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                      }}
                    />
                    <div className="flex items-center gap-4 mb-4">
                      <Icon size={32} className="text-[#00b4d8]" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    </div>
                    <p className="mb-4 text-[#adb5bd]">{description}</p>
                    <ul className="list-disc list-inside space-y-2 text-[#adb5bd] mb-6">
                      {keyPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <motion.button
                        type="button"
                        onClick={() => {
                          const mapped = SERVICE_TITLE_TO_FORM_OPTION[title] ?? title;
                          openModal(mapped);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
                      >
                        Request a Quote
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* Unified Emergency Response section */}
            <motion.section
              id="emergency-response-solutions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 20px rgba(0,180,216,0.2)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-12 relative w-full rounded-3xl border border-white/10 p-5 text-left shadow-xl transition-colors hover:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400"
              style={{ backgroundColor: STEEL }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(1200px 200px at 20% 0%, rgba(0,180,216,0.25), transparent 60%), radial-gradient(900px 300px at 100% 100%, rgba(0,180,216,0.18), transparent 60%)",
                }}
              />
              <h2 className="text-2xl font-semibold text-white mb-4 text-center">
                Emergency Response Solutions
              </h2>
              <p className="text-[#adb5bd] mb-4 text-center">
                When crises strike, you need a partner who can deliver power,
                security, communications and software simultaneously.
                Novator can combine any of our services into a unified emergency
                response package tailored to your situation.
              </p>
              <p className="text-[#adb5bd] text-center">
                Our experts mobilise rapidly to restore power, secure personnel and
                sites, establish communications and deploy critical supplies—keeping
                your operations and communities safe.
              </p>
              <div className="mt-6 text-center">
                <motion.button
                  type="button"
                  onClick={() => openModal("")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
                >
                  Request Emergency Support
                </motion.button>
              </div>
            </motion.section>
            {/* Final call-to-action */}
            <div className="mt-12 text-center">
              <p className="mb-4 text-lg text-[#adb5bd]">
                Need a custom solution? Our specialists are standing by to help.
              </p>
              <motion.button
                type="button"
                onClick={() => openModal("")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="inline-block bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </section>
        {/* Modal with ServiceRequestForm */}
        <AnimatePresence>
          {formOpen && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 overflow-y-auto"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.3, exit: { duration: 0.15 }, ease: "easeOut" }}
                className="relative w-full max-w-[90vw] sm:max-w-3xl max-h-[80vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d1b2a] p-4 sm:p-6 shadow-2xl"
              >
                <button
                  onClick={() => closeModal()}
                  aria-label="Close"
                  className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20 z-10"
                >
                  ✕
                </button>
                <ServiceRequestForm
                  defaultService={selectedService}
                  compact
                  onSubmitted={closeModal}
                  onClose={closeModal}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}