import Head from "next/head";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

/**
 * Contact page with a simple form and company contact details.
 * Styling updated to match the site's new colour scheme.
 */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Head>
        <title>Contact Us – Novator Group</title>
        <meta
          name="description"
          content="Get in touch with Novator Group for emergency response, logistics and technology services."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0096c7]">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Message</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-2 bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-full transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="mt-2 text-green-400">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>

          {/* Contact details */}
          <div className="space-y-6 text-[#adb5bd]">
            <div className="flex items-start gap-4">
              <FaPhone className="text-[#0096c7] mt-1" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-xl text-[#0096c7] mb-1">Call Us</h3>
                <p>(123) 456‑7890</p>
                <p className="text-sm">Available 24/7 for emergencies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#0096c7] mt-1" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-xl text-[#0096c7] mb-1">Email</h3>
                <p>
                  <a
                    href="mailto:info@novatorgroup.com"
                    className="hover:text-white"
                  >
                    info@novatorgroup.com
                  </a>
                </p>
                <p className="text-sm">For general inquiries and support</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#0096c7] mt-1" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-xl text-[#0096c7] mb-1">Visit Us</h3>
                <p>1234 Mission Drive</p>
                <p>Tampa, FL 33602</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
