import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
// Use icons from react-icons instead of lucide-react to avoid bundling
// issues with sourcemaps (e.g., missing chevron-down.js.map). These
// icons provide similar visuals for the mobile menu button.
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

// Define the primary navigation structure in one place. This makes it
// easy to add or remove pages later without duplicating markup.
const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  // Determine classes for each link based on whether it's active
  function linkClasses(href: string) {
    const isActive = pathname === href;
    return (
      "transition-colors duration-200 " +
      (isActive ? "text-[#00b4d8]" : "text-white hover:text-[#00b4d8]")
    );
  }

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/novator-group-logo.png" alt="Novator Group logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide ml-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClasses(href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none ml-auto"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          // Wrap the animated dropdown in a div to apply styling. Passing
          // className directly to motion.div causes a TypeScript type error.
          <div className="md:hidden bg-neutral-900 border-t border-gray-700 text-white text-center overflow-hidden">
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="py-4 space-y-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={"block " + linkClasses(href)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}