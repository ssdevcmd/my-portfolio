"use client";

import { motion } from "motion/react";
import {
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const infoCards = [
  {
    icon: Code2,
    label: "Focus",
    title: "React & Next.js",
    description: "Full-Stack Web Development",
  },
  {
    icon: BriefcaseBusiness,
    label: "Role",
    title: "Full Stack Developer",
    description: "Modern Web Applications",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "MBA in Accounting",
    description: "National University, Bangladesh",
  },
  {
    icon: MapPin,
    label: "Location",
    title: "Narayanganj, Bangladesh",
    description: "Available for Remote Work",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-24 px-6 py-24 bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            Section Heading
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Get to Know Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
        </motion.div>

        {/* =========================
            Main Content
        ========================== */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* =========================
              Left - Introduction
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-lg leading-8 text-gray-300">
              Hi, I'm{" "}
              <span className="font-semibold text-white">
                Solayman Sani
              </span>
              , a passionate Full Stack Web Developer who enjoys
              building modern, responsive, and user-friendly web
              applications.
            </p>

            <p className="mb-5 text-lg leading-8 text-gray-400">
              I work mainly with modern JavaScript technologies and
              enjoy turning ideas into functional and visually
              appealing digital experiences. I always try to write
              clean, maintainable code and continuously improve my
              skills.
            </p>

            <p className="text-lg leading-8 text-gray-400">
              I'm currently focused on growing as a professional web
              developer and building real-world projects that solve
              meaningful problems.
            </p>

            {/* =========================
                Always Learning
            ========================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <Sparkles size={22} />
              </div>

              <div>
                <p className="font-semibold text-white">
                  Always Learning
                </p>

                <p className="text-sm text-gray-400">
                  Improving my skills one project at a time.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              Right - Info Cards
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {infoCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    group
                    min-h-[145px]
                    rounded-xl
                    border
                    border-[#1c2942]
                    bg-[#080f21]
                    p-5
                    transition-all
                    duration-300
                    hover:border-red-500/50
                    hover:shadow-[0_0_25px_rgba(239,68,68,0.10)]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-red-500/10
                      text-red-500
                      transition-all
                      duration-300
                      group-hover:bg-red-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={21} />
                  </div>

                  {/* Label */}
                  <p className="text-sm text-gray-400">
                    {item.label}
                  </p>

                  {/* Title */}
                  <h4 className="mt-1 text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}