"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSending(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "9001facb-276d-4b6d-b8ca-413d12203906"
    );

    formData.append(
      "subject",
      "New Contact Message - Portfolio"
    );

    try {
      const object = Object.fromEntries(formData);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(object),
        }
      );

      const result = await response.json();

      console.log("Web3Forms response:", result);

      if (result.success) {
        setMessage(
          "Message sent successfully! Thank you for contacting me."
        );

        form.reset();
      } else {
        setMessage(
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setMessage(
        "Unable to send message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
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
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
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
            Contact Me
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-50 md:text-5xl">
           Let&apos;s Work Together
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            I&apos;m currently open to frontend developer opportunities.
            If you have a project, job opportunity, or just want to
            connect, feel free to get in touch.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-slate-50">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Have a question or want to discuss an opportunity?
              You can reach me using the contact details below.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-5">

              {/* Email */}
              <a
                href="mailto:pritmansuriya15@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-blue-400/10 bg-[#111827]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="font-medium text-slate-200">
                    pritmansuriya15@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916356324903"
                className="group flex items-center gap-4 rounded-xl border border-blue-400/10 bg-[#111827]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="font-medium text-slate-200">
                    +91 63563 24903
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-blue-400/10 bg-[#111827]/80 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="font-medium text-slate-200">
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/pritmansuriya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-400/10 bg-[#111827] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <FaGithub size={21} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-400/10 bg-[#111827] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedinIn size={21} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-blue-400/10 bg-[#111827]/80 p-6 shadow-xl backdrop-blur-md md:p-8"
          >
            <h3 className="text-2xl font-bold text-slate-50">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border border-blue-400/10 bg-[#020617] px-4 py-3 text-slate-100 placeholder:text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-blue-400/10 bg-[#020617] px-4 py-3 text-slate-100 placeholder:text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job Opportunity"
                  required
                  className="w-full rounded-lg border border-blue-400/10 bg-[#020617] px-4 py-3 text-slate-100 placeholder:text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-lg border border-blue-400/10 bg-[#020617] px-4 py-3 text-slate-100 placeholder:text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              {/* Status Message */}
              {message && (
                <div className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-300">
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={18} />

                {isSending
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
