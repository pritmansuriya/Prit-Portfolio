"use client";

import { Code2, Monitor, Rocket } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I focus on writing clean, reusable, and maintainable code that is easy to understand and scale.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description:
      "I build responsive websites that provide a smooth and consistent experience across mobile, tablet, and desktop devices.",
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description:
      "I work with modern technologies such as React, Next.js, TypeScript, JavaScript, Tailwind CSS, and React Native.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] px-6 py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">

        {/* Electric Blue Glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Bright Blue Glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
        />

        {/* Center Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-medium uppercase tracking-wider text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-50 md:text-5xl">
            Who I Am
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            I&apos;m a passionate Frontend Developer focused on creating modern,
            responsive, and user-friendly web applications. I enjoy learning
            new technologies, solving problems, and turning ideas into
            real-world projects.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-blue-400/10 bg-[#111827]/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-50">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
