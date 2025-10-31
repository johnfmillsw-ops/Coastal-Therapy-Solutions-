// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/treatment", label: "Treatment" }, // ← now routes to treatment page
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const BTN_SUNSET =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] hover:from-[#FEB47B] hover:to-[#FF7E5F] focus:outline-none focus:ring-2 focus:ring-pink-300 transition";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return hash && href.endsWith(hash);
    }
    return router.pathname === href || router.asPath === href;
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#F9FAFB]/95 backdrop-blur-md shadow-md border-b border-[#E5E7EB]"
      role="navigation"
      aria-label="Main"
    >
      {/* Removed the colored accent gradient line at the base of the nav bar */}

      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo7.png"
            alt="Coastal Therapy Solutions"
            width={140}
            height={40}
            className="h-80 w-auto object-contain select-none"
            priority
          />
        </Link>

        {/* ===== Desktop Nav ===== */}
        <div
          className="hidden md:flex items-center gap-1"
          style={{
            fontFamily:
              '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium tracking-wide ${
                isActive(link.href)
                  ? "text-[#FF7E5F]"
                  : "text-[#627027] hover:text-[#FF7E5F]"
              }`}
            >
              <span>{link.label}</span>
              {/* Replaced rainbow underline with a solid brand line */}
              <span
                className={`absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full transition-opacity ${
                  isActive(link.href) ? "opacity-100" : "opacity-0"
                }`}
                style={{ background: "#627027" }}
              />
            </Link>
          ))}

          <Link href="/#intake" className={`${BTN_SUNSET} ml-2`}>
            Start Intake
          </Link>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden ml-auto text-[#627027] focus:outline-none focus:ring-2 focus:ring-[#00b4d8] rounded"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-[#F9FAFB]/95 backdrop-blur-md shadow-lg border-t border-[#E5E7EB]"
            style={{
              fontFamily:
                '"Gabriel Sans", system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif',
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full rounded-lg px-4 py-3 text-base font-medium flex items-center justify-between ${
                    isActive(link.href)
                      ? "text-[#FF7E5F] bg-white/70"
                      : "text-[#627027] hover:text-[#FF7E5F] hover:bg-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Keeping the small right-side marker as-is, per "change nothing else" */}
                  <span
                    className="ml-3 h-1.5 w-6 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #00b4d8 0%, #FF7E5F 50%, #FEB47B 100%)",
                    }}
                  />
                </Link>
              ))}

              <Link
                href="/#intake"
                onClick={() => setIsOpen(false)}
                className={`${BTN_SUNSET} mt-2`}
              >
                Start Intake
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
