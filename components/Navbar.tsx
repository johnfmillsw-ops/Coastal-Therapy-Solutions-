import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
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
      const targetHash = href.replace("/", "");
      return (pathname === "/" && hash === targetHash) || asPath === href;
    }
    return pathname === href;
  }

  function linkClasses(href: string) {
    return (
      "transition-colors duration-200 text-sm font-medium " +
      (isActive(href) ? "text-[#1F2937] font-semibold" : "text-[#6B7280] hover:text-[#1F2937]")
    );
  }

  return (
    <header className="bg-[#F9FAFB] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="/logo.png" // Maps to public/logo.png in Next.js
            alt="Coastal Therapy Solutions logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="ml-3 text-xl font-semibold text-[#1F2937]">
            Coastal Therapy Solutions
          </span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
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
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-[#A7F3D0] text-[#1F2937] hover:bg-[#6EE7B7] transition"
            prefetch={false}
          >
            Schedule Consultation
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1F2937] focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#F9FAFB] border-t border-[#E5E7EB] text-center"
          >
            <div className="py-4 space-y-4">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className={"block text-[#1F2937] " + linkClasses(href)}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="block text-[#1F2937] bg-[#A7F3D0] rounded-full mx-4 py-2 text-sm font-medium hover:bg-[#6EE7B7] transition"
                prefetch={false}
                onClick={() => setIsOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}