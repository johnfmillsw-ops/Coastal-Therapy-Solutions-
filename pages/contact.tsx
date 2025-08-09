import Head from "next/head";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us – Novator Group</title>
        <meta
          name="description"
          content="Get in touch with Novator Group for emergency response, logistics and technology services."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-16">
        {/* The heading is now centered */}
        <h1 className="text-4xl font-bold mb-12 text-white text-center">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className="block">
              <span className="text-sm">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Message</span>
              <textarea
                name="message"
                rows={5}
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
          </form>

          {/* Contact details */}
          <div className="space-y-6 text-[#adb5bd]">
            <div className="flex items-start gap-4">
              <FaPhone className="text-[#0096c7] mt-1" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-xl text-[#0096c7] mb-1">Call Us</h3>
                <p>(123) 456-7890</p>
                <p className="text-sm">Available 24/7 for emergencies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#0096c7] mt-1" size={24} aria-hidden="true" />
              <div>
                <h3 className="text-xl text-[#0096c7] mb-1">Email</h3>
                <p>
                  <a
                    href="mailto:ngr@novatorgroupllc.com"
                    className="hover:text-white"
                  >
                    ngr@novatorgroupllc.com
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
                <p>Tampa, FL 33602</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
