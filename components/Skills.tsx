"use client";

import { motion } from "motion/react";
import {
  Database,
  GitBranch,
  Globe,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "VS Code",
      "Postman",
      "npm",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Bright Blue Glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
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
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-50 md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            I work with modern web technologies and tools to
            build responsive, user-friendly, and interactive
            digital experiences.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-blue-400/10 bg-[#111827]/90 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={25} />
                </div>

                {/* Category */}
                <h3 className="text-xl font-semibold text-slate-50">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="rounded-lg border border-blue-400/10 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
