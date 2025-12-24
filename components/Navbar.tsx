"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, Menu, X } from "lucide-react";

import { CommandGamePalette } from "./CommandGamePalette";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Initial state is visible
  const [hidden, setHidden] = useState(false);
  const router = useRouter();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide if scrolling down and scrolled more than 150px
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelect = useCallback(
    (id: string) => {
      console.log(`Selected command: ${id}`);
      if (id.startsWith("/")) {
        router.push(id);
      }
      handleClose();
    },
    [router, handleClose]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        } else {
          handleOpen();
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, handleOpen, handleClose]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 z-50 w-full"
      >
        {/* Ambient top shadow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/40 to-transparent" />

        <div
          className="
            mx-auto mt-4 flex h-16 max-w-7xl items-center justify-between px-6
            rounded-2xl
            bg-black/50 backdrop-blur-md border border-white/5
            shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          "
        >
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-white">
            Gyra<span className="text-purple-400">Labs</span>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="/dashboard"
              className="
                  relative text-white font-medium
                  transition-all duration-300
                  hover:-translate-y-[1px]
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full
                  after:bg-gradient-to-r after:from-purple-400 after:to-violet-500
                  after:scale-x-100
                "
            >
              Dashboard
            </a>
            {[
              { name: "About", href: "/#about" },
              { name: "Blog", href: "/blog" },
              { name: "Peanut", href: "/peanut" },
              { name: "Contact", href: "/contact" },
              { name: "Pricing", href: "/#pricing" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative text-neutral-400
                  transition-all duration-300
                  hover:-translate-y-[1px]
                  hover:text-white
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                  after:bg-gradient-to-r after:from-purple-400 after:to-violet-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cmd + K Button */}
            <button
              onClick={handleOpen}
              className="
                flex items-center gap-2
                rounded-xl px-3 py-2 text-sm
                text-neutral-300

                bg-[#0b0f0c]
                shadow-[inset_2px_2px_6px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_rgba(0,0,0,0.6)]

                transition-all duration-300
                hover:text-white
              "
            >
              <span className="text-neutral-400">Search</span>
              <span className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-xs text-neutral-400">
                ⌘ K
              </span>
            </button>


          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={handleOpen}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-6 py-6 flex flex-col gap-6">
                <nav className="flex flex-col gap-4">
                  <a
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-white transition-colors"
                  >
                    Dashboard
                  </a>
                  {[
                    { name: "About", href: "/#about" },
                    { name: "Blog", href: "/blog" },
                    { name: "Peanut", href: "/peanut" },
                    { name: "Contact", href: "/contact" },
                    { name: "Pricing", href: "/#pricing" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-4">

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <CommandGamePalette
            key="palette"
            onClose={handleClose}
            onSelect={handleSelect}
          />
        )}
      </AnimatePresence>
    </>
  );
}
