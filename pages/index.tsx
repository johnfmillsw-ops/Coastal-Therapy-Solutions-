import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
/** ======= Constants / Styles ======= */
const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const COLORS = {
  primary: "#A7F3D0", // Soft green
  secondary: "#E0F2FE", // Light blue
  text: "#1F2937", // Dark gray
  background: "#F9FAFB", // Off-white
  accent: "#6B7280", // Warm gray
};
const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-[#A7F3D0] text-[#1F2937] hover:bg-[#6EE7B7] transition focus:outline-none focus:ring-2 focus:ring-[#E0F2FE]";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-8";
/** ======= Types ======= */
type ServiceCard = {
  title: string;
  summary: string;
  icon: string;
  bgImage: string; // Added for background image
};
/** ======= Helpers ======= */
const scrollInto = (el: HTMLElement | null) =>
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
/** ======= Content ======= */
const SERVICES: ServiceCard[] = [
  {
    title: "Eating Disorder Therapy",
    summary:
      "Personalized sessions using CBT and DBT to foster a healthy relationship with food and body image.",
    icon: "/eating-disorder-icon.png",
    bgImage: "/ed.png",
  },
  {
    title: "Anxiety Therapy",
    summary:
      "Evidence-based techniques like mindfulness and exposure therapy to manage anxiety and build resilience.",
    icon: "/anxiety-icon.png",
    bgImage: "/AT.png",
  },
  {
    title: "Family & Group Therapy",
    summary:
      "Supportive sessions to strengthen communication and aid recovery for loved ones and communities.",
    icon: "/group-therapy-icon.png",
    bgImage: "/FT.png",
  },
];
const TESTIMONIALS = [
  {
    quote:
      "Coastal Therapy Solutions gave me tools to manage my anxiety in a safe, supportive space.",
    author: "Sarah M., Client",
  },
  {
    quote: "Their compassionate approach helped me rebuild trust in myself.",
    author: "James T., Client",
  },
];
const FAQ = [
  {
    q: "How do I start therapy?",
    a: "Schedule a free consultation to discuss your needs and find the right approach.",
  },
  {
    q: "Are sessions virtual or in-person?",
    a: "We offer both options, tailored to your preference and location.",
  },
  {
    q: "Is therapy covered by insurance?",
    a: "We accept many plans and offer sliding scale fees. Contact us to verify.",
  },
];
/** ======= Form Component ======= */
function ContactForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitting(true);
    try {
      const params = new URLSearchParams({
        "form-name": "contact",
        subject: "New Inquiry — Coastal Therapy Solutions",
        name,
        email,
        message,
      });
      await fetch("https://jfm.app.n8n.cloud/webhook-test/get_data", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setDone(true);
      onSubmitted?.();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  if (done) {
    return (
      <div className="rounded-lg bg-[#E0F2FE] p-6 text-[#1F2937]">
        <h3 className="text-xl font-semibold">Thank You!</h3>
        <p className="mt-2 text-sm">We’ll reach out soon to schedule your consultation.</p>
      </div>
    );
  }
  return (
    <form
      name="contact"
      method="POST"
      action="https://jfm.app.n8n.cloud/webhook-test/get_data"
      onSubmit={handleSubmit}
      className="grid gap-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="New Inquiry — Coastal Therapy Solutions" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1F2937]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 focus:ring-2 focus:ring-[#A7F3D0] outline-none"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1F2937]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 focus:ring-2 focus:ring-[#A7F3D0] outline-none"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1F2937]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-4 py-2 focus:ring-2 focus:ring-[#A7F3D0] outline-none min-h-[120px]"
          placeholder="Tell us about your needs..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={submitting || !name || !email || !message}
          className={`${BTN_PRIMARY} disabled:opacity-50`}
        >
          {submitting ? "Submitting..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
/** ======= Page Component ======= */
export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const openForm = useCallback(() => {
    scrollInto(formRef.current);
  }, []);
  // Video debug listeners (no forced .load())
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleLoadedMetadata = () => {
      console.log("Video metadata loaded");
      video
        .play()
        .then(() => console.log("Autoplay OK"))
        .catch((err) => console.error("Video play failed:", err));
    };
    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      console.error("Video error:", target.error?.message || "Unknown error");
      console.error("Error code:", target.error?.code);
    };
    const handleCanPlayThrough = () => console.log("Video can play through");
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", handleError);
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);
  return (
    <div className="bg-[#F9FAFB] text-[#1F2937] font-sans">
      <Head>
        <title>Coastal Therapy Solutions | Eating Disorders & Anxiety Support</title>
        <meta
          name="description"
          content="Coastal Therapy Solutions offers compassionate, evidence-based treatment for eating disorders and anxiety. Start your journey with a free consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <style>{`
          html, body, #__next { margin: 0; padding: 0; min-height: 100vh; width: 100%; }
          html { scroll-behavior: smooth; }
          /* Keep top spacing so content doesn't hide under navbar */
          section:first-of-type { padding-top: 80px; }
          .service-card {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            color: white; /* Adjust text color for readability */
          }
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5); /* Dark overlay for text readability */
            z-index: 1;
          }
          .service-card > * {
            position: relative;
            z-index: 2; /* Ensure content is above overlay */
          }
        `}</style>
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* ======= Hero ======= */}
      <section className="relative py-16 md:py-24 min-h-[60vh] overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/logo.png"
        >
          <source src="/TH1.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
          }}
        />
        {/* Foreground content */}
        <div className={`${CONTAINER} text-center relative z-20`}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Begin Your Journey to Healing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Compassionate, evidence-based therapy for eating disorders and
            anxiety. Take the first step with a free consultation.
          </motion.p>
          <motion.button
            onClick={openForm}
            className={BTN_PRIMARY}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Schedule a Free Consultation
          </motion.button>
        </div>
      </section>
      {/* ======= Services ======= */}
      <section id="services" className="py-16 bg-[#F9FAFB]">
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                className="service-card rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                style={{ backgroundImage: `url(${service.bgImage})` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white">{service.summary}</p>
                <button onClick={openForm} className="mt-4 text-[#A7F3D0] hover:underline">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ======= Testimonials ======= */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE}>What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <p className="text-[#6B7280] italic mb-4">“{testimonial.quote}”</p>
                <p className="text-[#1F2937] font-medium">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ======= FAQ ======= */}
      <section id="faq" className="py-16 bg-[#F9FAFB]">
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <motion.div
                key={idx}
                className="border border-[#E5E7EB] rounded-lg bg-white p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span className="font-semibold text-[#1F2937]">{item.q}</span>
                  <span className="text-[#A7F3D0]">{openFAQ === idx ? "−" : "+"}</span>
                </button>
                {openFAQ === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-[#6B7280]"
                  >
                    {item.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ======= Contact ======= */}
      <section id="contact" className="py-16 bg-[#F9FAFB]">
        <div className={CONTAINER}>
          <h2 className={SECTION_TITLE}>Get in Touch</h2>
          <div ref={formRef} className="max-w-lg mx-auto">
            <ContactForm onSubmitted={() => scrollInto(formRef.current)} />
          </div>
        </div>
      </section>
      {/* ======= Footer ======= */}
      <footer className="bg-[#1F2937] text-white py-8">
        <div className={CONTAINER}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Coastal Therapy Solutions. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-[#A7F3D0] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#A7F3D0] hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export async function getStaticProps() {
  return { props: {} };
}