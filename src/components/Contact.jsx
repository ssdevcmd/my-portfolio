"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              I&apos;m always open to discussing new projects,
              freelance opportunities, collaborations, or simply
              having a conversation about web development.
            </p>

            {/* Email */}
            <Link
              href="mailto:your-email@example.com"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-red-500/50 hover:bg-red-500/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium">
                  saniahmed5484@gmail.com
                </p>
              </div>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+8801682604208"
              className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-red-500/50 hover:bg-red-500/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-medium">
                  +880 1682-604208
                </p>
              </div>
            </Link>


            {/* Location */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-medium">
                  Narayanganj, Bangladesh
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-gray-400">
                Find me online
              </p>

              <div className="flex gap-3">

                <Link
                  href="https://github.com/ssdevcmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <FaGithub size={20} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/solayman-sani-933810428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <FaLinkedin size={20} />
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/8801682604208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <FaWhatsapp size={20} />
                </Link>

                <Link
                  href="mailto:saniahmed5484@gmail.com"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <Mail size={20} />
                </Link>

              </div>
            </div>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold">
              Send Me a Message
            </h3>

            <p className="mt-3 text-gray-400">
              Tell me a little about your project or idea.
            </p>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-red-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700"
              >
                Send Message
                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}