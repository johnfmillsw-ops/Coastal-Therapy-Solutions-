// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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

  function linkClasses(href: string) {
    const isActive = pathname === href;
    return (
      "transition-colors duration-200 " +
      (isActive ? "text-[#0096c7]" : "text-white hover:text-[#0096c7]")
    );
  }

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 w-full">
        {/* Logo closer to the left edge (reduced padding) */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Novator Group logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop navigation aligned to the right */}
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
          className="md:hidden focus:outline-none ml-auto text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden bg-black border-t border-[#0096c7] text-white text-center overflow-hidden">
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
