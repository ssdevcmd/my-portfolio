"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BloodConnect",
    description:
      "A blood donation platform that connects blood donors with people who urgently need blood. Users can search donors, create donation requests, manage profiles, and support the platform through funding.",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Better Auth",
      "Stripe Payment Integration",
      "JWT"
    ],
    live: "https://bloodconnect-client-eta.vercel.app",
    github: "https://github.com/ssdevcmd/a10-bloodconnect-client",
    backend:
      "https://github.com/ssdevcmd/a10-bloodconnect-server",
  },

  {
    title: "DriveHub",
    description:
      "A modern car rental platform where users can explore available vehicles, view details, and make bookings through a responsive and user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Better Auth",
      "JWT"
    ],
    live: "https://drivehub-navy.vercel.app",
    github: "https://github.com/ssdevcmd/a09-drivehub-client",
    backend: "https://github.com/ssdevcmd/a09-drivehub-server",
  },
  {
    title: "SkillSphere",
    description:
      "A modern online learning platform where users can explore courses, discover learning opportunities, and build their skills through an intuitive and responsive interface.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "JWT"
    ],
    live: "https://my-eighth-assignment-iota.vercel.app",
    github: "https://github.com/ssdevcmd/skillSphere",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-24 bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Here are some of the projects I have built while learning and
            working with modern web technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-red-500/30 hover:bg-white/[0.05]"
            >
              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-[280px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                  {/* Project Number */}
                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm font-bold backdrop-blur-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-10">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium uppercase tracking-widest text-red-500">
                      Featured Project
                    </p>

                    <ArrowUpRight
                      className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                      size={24}
                    />
                  </div>

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Live Demo
                      <ExternalLink size={17} />
                    </Link>

                    <div className="flex flex-wrap gap-3">

                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
                      >
                        <FaGithub size={17} />
                        Client
                      </Link>

                      {project.backend && (
                        <Link
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
                        >
                          <FaGithub size={17} />
                          Server
                        </Link>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            More projects are coming soon.
          </p>
        </motion.div>

      </div>
    </section>
  );
}