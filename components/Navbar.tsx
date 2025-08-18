// components/Navbar.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Mission Solutions" }, // renamed
  { href: "/#fleet", label: "Fleet" },
  { href: "/careers", label: "Join Us" }, // renamed
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState<string>("");
  const router = useRouter();
  const { pathname, asPath } = router;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash || "");
      const onHashChange = () => setHash(window.location.hash || "");
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  function isActive(href: string) {
    const isAnchor = href.startsWith("/#");
    if (isAnchor) {
      const targetHash = href.replace("/", ""); // "/#services" -> "#services"
      return (pathname === "/" && hash === targetHash) || asPath === href;
    }
    return pathname === href;
  }

  function linkClasses(href: string) {
    return (
      "transition-colors duration-200 " +
      (isActive(href) ? "text-[#0096c7]" : "text-white hover:text-[#0096c7]")
    );
  }

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center" prefetch={false}>
          <img src="/logo.png" alt="Novator Group logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide ml-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className={linkClasses(href)}
              aria-current={isActive(href) ? "page" : undefined}
            >
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
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className={"block " + linkClasses(href)}
                    aria-current={isActive(href) ? "page" : undefined}
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
