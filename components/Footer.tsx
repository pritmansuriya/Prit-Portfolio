"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-blue-400/10 bg-[#01040D]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link
              href="#home"
              className="text-2xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300"
            >
              Prit<span className="text-blue-300">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Frontend Developer passionate about building
              responsive, modern and user-friendly web
              experiences.
            </p>
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition duration-300 hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* Email */}
            <a
              href="mailto:pritmansuriya15@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/10 bg-[#111827] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pritmansuriya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/10 bg-[#111827] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/10 bg-[#111827] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-blue-400/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">

          {/* Copyright */}
          <p>
            © 2026 Prit Mansuriya. All rights reserved.
          </p>

          {/* Back To Top */}
          <Link
            href="#home"
            className="group flex items-center gap-2 font-medium text-slate-400 transition duration-300 hover:text-blue-400"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/10 bg-[#111827] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <ArrowUp size={16} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
