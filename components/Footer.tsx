import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F9FAFB] text-[#627027] py-12 px-6 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* ===== Contact Info ===== */}
        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: '"Forum", serif' }}
          >
            Contact Us
          </h3>
          <p className="leading-relaxed text-[#627027]">
            Phone:{" "}
            <a
              href="tel:+18332919332"
              className="hover:text-[#FF7E5F] transition"
            >
              (833) 291-9332
            </a>
          </p>
          <p className="leading-relaxed text-[#627027]">
            Email:{" "}
            <a
              href="mailto:info@coastaltherapysolutions.com"
              className="hover:text-[#FF7E5F] transition"
            >
              info@coastaltherapysolutions.com
            </a>
          </p>

          <button
            onClick={() =>
              document
                .getElementById("intake")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] transition"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            Schedule Consultation
          </button>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: '"Forum", serif' }}
          >
            Quick Links
          </h3>
          <ul
            className="space-y-2"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            <li>
              <Link
                href="/#services"
                className="hover:text-[#FF7E5F] transition"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-[#FF7E5F] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#FF7E5F] transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="hover:text-[#FF7E5F] transition"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Social Media ===== */}
        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: '"Forum", serif' }}
          >
            Connect With Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/coastaltherapysolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-[#FF7E5F] hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.instagram.com/coastaltherapysolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-[#FF7E5F] hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/coastaltherapysolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-[#FF7E5F] hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com/coastaltherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-[#FF7E5F] hover:text-white transition"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center mt-10 text-sm opacity-90"
        style={{
          fontFamily:
            '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
        }}
      >
        © {year} Coastal Therapy Solutions. All rights reserved.
      </div>
    </footer>
  );
}
