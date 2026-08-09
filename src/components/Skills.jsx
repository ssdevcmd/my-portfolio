"use client";

import { motion } from "motion/react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { MdApi } from "react-icons/md";

/* =========================================================
   FRONTEND SKILLS
========================================================= */

const frontendSkills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    border: "hover:border-white/40",
    glow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]",
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "text-cyan-400",
    border: "hover:border-cyan-400/50",
    glow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    border: "hover:border-yellow-400/50",
    glow: "hover:shadow-[0_0_25px_rgba(250,204,21,0.18)]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
    border: "hover:border-sky-400/50",
    glow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.18)]",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    border: "hover:border-orange-500/50",
    glow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.18)]",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
    border: "hover:border-blue-500/50",
    glow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]",
  },
];

/* =========================================================
   BACKEND & DATABASE
========================================================= */

const backendSkills = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    border: "hover:border-green-500/50",
    glow: "hover:shadow-[0_0_25px_rgba(34,197,94,0.18)]",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-200",
    border: "hover:border-gray-400/50",
    glow: "hover:shadow-[0_0_25px_rgba(156,163,175,0.15)]",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
    border: "hover:border-green-400/50",
    glow: "hover:shadow-[0_0_25px_rgba(74,222,128,0.18)]",
  },
  {
    name: "REST API",
    icon: MdApi,
    color: "text-cyan-400",
    border: "hover:border-cyan-400/50",
    glow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]",
  },
];

/* =========================================================
   TOOLS & PLATFORMS
========================================================= */

const tools = [
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    border: "hover:border-orange-500/50",
    glow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.18)]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white",
    border: "hover:border-white/40",
    glow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "text-orange-500",
    border: "hover:border-orange-500/50",
    glow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.18)]",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-white",
    border: "hover:border-white/40",
    glow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]",
  },
];

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
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
        delay: index * 0.06,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={`
        group
        flex
        h-[102px]
        w-[140px]
        shrink-0
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-[#1c2942]
        bg-[#080f21]
        transition-all
        duration-300
        ${skill.border}
        ${skill.glow}
      `}
    >
      {/* Icon */}
      <Icon
        className={`
          text-[34px]
          transition-transform
          duration-300
          group-hover:scale-110
          ${skill.color}
        `}
      />

      {/* Skill Name */}
      <p
        className="
          mt-3
          text-sm
          font-medium
          text-gray-300
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {skill.name}
      </p>
    </motion.div>
  );
}

/* =========================================================
   SKILL CATEGORY
========================================================= */

function SkillCategory({ title, icon, skills }) {
  return (
    <motion.div
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-12"
    >
      {/* Category Heading */}
      <div className="mb-7 flex items-center gap-3">
        <span className="text-xl font-bold text-cyan-400">
          {icon}
        </span>

        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {title}
        </h3>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   SKILLS SECTION
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24
        px-6
        py-24
        bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            My Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technologies I work with
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I use modern technologies and tools to build
            responsive, scalable, and user-friendly web
            applications.
          </p>
        </motion.div>

        {/* =================================================
            FRONTEND
        ================================================= */}

        <SkillCategory
          title="Frontend Development"
          icon="•"
          skills={frontendSkills}
        />

        {/* =================================================
            BACKEND
        ================================================= */}

        <SkillCategory
          title="Backend & Database"
          icon="•"
          skills={backendSkills}
        />

        {/* =================================================
            TOOLS
        ================================================= */}

        <SkillCategory
          title="Tools & Platforms"
          icon="•"
          skills={tools}
        />

      </div>
    </section>
  );
}