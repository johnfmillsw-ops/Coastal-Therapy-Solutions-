import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

/**
 * A simple footer component containing contact information, quick links,
 * and social media icons. The layout collapses gracefully on small
 * screens. Feel free to add or remove items as needed.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0d1b2a] text-[#adb5bd] py-12 px-4 mt-16">
      <div className="max-w-screen-2xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Contact info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Locations and Contact</h3>
          
          <p>Westminster, SC </p>
          <p>Tampa, FL </p>
          <p className="mt-2">Phone: (833) 291-9332</p>
          <p>
            Email: {" "}
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
              <Link href="/services" className="hover:text-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Join Our Team
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
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
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#00b4d8] hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#00b4d8] hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#00b4d8] hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-[#6c757d]">
        © {year} Novator Group. All rights reserved.
      </p>
    </footer>
  );
}