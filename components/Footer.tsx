// components/Footer.tsx
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  // Replace with your actual LinkedIn URL or set in NEXT_PUBLIC_LINKEDIN_URL
  const LINKEDIN_URL =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/company/healing-path-therapy/";

  return (
    <footer className="bg-[#F9FAFB] text-[#1F2937] py-8 px-4 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Contact Us</h3>
          <p>Phone: <a href="tel:+18332919332" className="hover:text-[#A7F3D0]">(833) 291-9332</a></p>
          <p>
            Email: <a href="mailto:info@healingpaththerapy.com" className="hover:text-[#A7F3D0]">info@healingpaththerapy.com</a>
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-[#A7F3D0] text-[#1F2937] hover:bg-[#6EE7B7] transition"
          >
            Schedule Consultation
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-[#6B7280] hover:text-[#A7F3D0]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[#6B7280] hover:text-[#A7F3D0]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-[#6B7280] hover:text-[#A7F3D0]">
                Our Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Follow Us</h3>
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn — Healing Path Therapy"
              aria-label="LinkedIn — Healing Path Therapy"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#1F2937] hover:bg-[#A7F3D0] hover:text-[#1F2937] transition"
            >
              <FaLinkedinIn size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-[#6B7280]">
        © {year} Healing Path Therapy. All rights reserved.
      </p>
    </footer>
  );
}