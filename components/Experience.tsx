
"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  CalendarDays,
  MapPin,
} from "lucide-react";

const responsibilities = [
  "Developed responsive web pages using HTML, CSS, JavaScript, React, and Tailwind CSS.",
  "Created reusable and maintainable React components.",
  "Integrated REST APIs with frontend applications.",
  "Worked with JavaScript and TypeScript to build interactive web interfaces.",
  "Used Git and GitHub for version control and project collaboration.",
  "Gained foundational knowledge of Next.js, Node.js, Express.js, and MongoDB through hands-on projects and learning.",
  "Focused on writing clean, reusable, and responsive code.",
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Git",
  "REST API",
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            x: [0, -40, 0],
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

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-medium uppercase tracking-wider text-blue-400">
            My Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-50 md:text-5xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            My professional journey and practical experience
            in frontend and web development.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-blue-400/10 bg-[#111827]/90 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10 md:p-8"
        >
          {/* Top Section */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            {/* Job Information */}
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Briefcase size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-50">
                  Web Developer Intern
                </h3>

                <p className="mt-1 font-medium text-blue-400">
                  DP INFOSOFT
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="text-blue-400" />
                  Ahmedabad, India
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-blue-400/10 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <CalendarDays size={16} />
              2025 – 2026
            </div>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-blue-400/10" />

          {/* Description */}
          <p className="leading-7 text-slate-400">
            Worked on developing responsive and user-friendly web interfaces
            while gaining practical experience in frontend development, REST
            API integration, reusable components, and version control.
            Strengthened my knowledge of modern web technologies through
            hands-on development and real-world projects.
          </p>

          {/* Responsibilities */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-50">
              Responsibilities
            </h4>

            <ul className="mt-5 space-y-4">
              {responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="flex gap-3 text-slate-400"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]" />

                  <span className="leading-7">
                    {responsibility}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-50">
              Technologies
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <motion.span
                  key={technology}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  className="rounded-lg border border-blue-400/10 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500 hover:text-white"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
