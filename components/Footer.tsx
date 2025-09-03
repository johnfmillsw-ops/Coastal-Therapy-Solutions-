import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0d1b2a] text-[#adb5bd] py-12 px-4 mt-16">
      <div className="max-w-screen-2xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Contact info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Locations and Contact</h3>
          <p>Westminster, SC</p>
          <p>Tampa, FL</p>
          <p className="mt-2">Phone: (833) 291-9332</p>
          <p>
            Email:{" "}
            <a href="mailto:ngr@novatorgroupllc.com" className="hover:text-white">
              ngr@novatorgroupllc.com
            </a>
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/careers" className="hover:text-white">
                Join Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-3">
            {/* Inert LinkedIn button (present but not connected) */}
            <button
              type="button"
              onClick={() => {}}
              aria-disabled="true"
              title="LinkedIn (coming soon)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#adb5bd] hover:text-white hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <FaLinkedinIn size={18} />
              <span className="sr-only">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-[#6c757d]">
        © {year} Novator Group. All rights reserved.
      </p>
    </footer>
  );
}
