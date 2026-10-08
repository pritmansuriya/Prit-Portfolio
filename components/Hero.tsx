"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] px-6 pt-20"
    >
      {/* Animated Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Electric Blue Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
        />

        {/* Bright Blue Glow */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl"
        />

        {/* Small Blue Glow */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/3 top-20 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl"
        />

        {/* Center Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <p className="mb-4 text-lg font-medium text-blue-400">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight text-slate-50 md:text-6xl">
            Prit Mansuriya
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl font-semibold text-blue-300 md:text-3xl">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
           I&apos;m a frontend-focused developer passionate about building
            responsive and scalable web experiences. I work with HTML, CSS,
            JavaScript, TypeScript, Tailwind CSS, React, and Next.js, while
            also exploring full-stack development with Node.js, Express.js,
            MongoDB, and React Native.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* View Projects */}
            <Link
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              View Projects
            </Link>

            {/* Download CV */}
            <Link
              href="/resume/Prit resume 1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-400/20 bg-[#0F172A]/70 px-6 py-3 font-medium text-blue-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
            >
              Download CV
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-5">

            {/* GitHub */}
            <Link
              href="https://github.com/pritmansuriya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-blue-400"
            >
              <FaGithub size={25} />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-blue-400"
            >
              <FaLinkedin size={25} />
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative flex justify-center"
        >
          {/* Outer Circle */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-72 w-72 items-center justify-center rounded-full bg-blue-500/10 md:h-96 md:w-96"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl" />

            {/* Profile Image */}
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-8 border-blue-400/20 bg-[#0F172A] shadow-[0_0_60px_rgba(59,130,246,0.20)] md:h-80 md:w-80">
              <Image
                src="/images/Prit.jpg"
                alt="Prit Mansuriya - Frontend Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="group flex flex-col items-center gap-2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-blue-400/30 p-1 transition-colors duration-300 group-hover:border-blue-400">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-1.5 rounded-full bg-blue-400"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
