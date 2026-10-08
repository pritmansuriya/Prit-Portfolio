"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-blue-400/10 bg-[#020617]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300"
        >
          Prit<span className="text-blue-300">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}

          {/* Download CV */}
          <Link
            href="/resume/Prit resume 1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Download CV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-blue-400/10 p-2 text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-blue-400/10 bg-[#020617]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-blue-400/10 py-3 text-slate-300 transition duration-300 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Download CV */}
              <Link
                href="/resume/Prit resume 1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-lg bg-blue-500 px-5 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
