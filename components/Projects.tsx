"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const projects = [
  {
    title: "MERN Job Portal",
    description:
      "A full-stack job portal where jobseekers can search and apply for jobs, while employers can post and manage job opportunities.",
    image: "/images/job-portal.png",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST API",
    ],
    github: "https://github.com/pritmansuriya/Job-Portal",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking application for managing income, expenses, savings goals and financial transactions.",
    image: "/images/expense.jpg",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "MongoDB",
      "REST API",
    ],
    github: "https://github.com/pritmansuriya/ExpenseTracker",
    live: "#",
  },
  {
    title: "React-App",
    description:
      "A modern and responsive React web application built with reusable components, multiple pages, routing and a clean user-friendly interface.",
    image: "/images/react-app.jpg",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Vite",
    ],
    github: "https://github.com/pritmansuriya/React-App",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
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
          className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
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
            My Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-50 md:text-5xl">
            Projects I Have Built
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Here are some of the projects I have built while
            learning and working with modern web technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-blue-400/10 bg-[#111827]/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-[#0F172A]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-50">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="rounded-lg border border-blue-400/10 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500 hover:text-white"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-blue-400/20 bg-[#020617] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {/* Live Demo */}
                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-500">
                      <ExternalLink size={18} />
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
