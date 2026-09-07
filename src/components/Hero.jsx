"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Mail,
    Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Hero() {
    const texts = [
        "Junior Full Stack Developer",
        "Frontend Developer",
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (!isDeleting && displayText.length < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            }, 100);
        }
        else if (!isDeleting && displayText.length === currentText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
        }
        else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length - 1));
            }, 50);
        }
        else if (isDeleting && displayText.length === 0) {
            setTextIndex((prev) => (prev + 1) % texts.length);
            setIsDeleting(false);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);
    return (
        <section className="relative overflow-hidden bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

                {/* ================= LEFT ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Availability */}
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                        Available for opportunities
                    </div>

                    {/* Heading */}
                    <p className="mb-3 text-lg text-gray-400">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Solayman
                        <span className="block text-emerald-400">
                            Sani.
                        </span>
                    </h1>

                    {/* Role */}
                    <motion.h2
                        className="mt-6 min-h-[42px] text-2xl font-semibold text-gray-200 sm:text-3xl"
                    >
                        {displayText}
                        <span className="ml-1 animate-pulse text-emerald-400">
                            |
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        I build modern, responsive and user-friendly web
                        applications with clean code and thoughtful
                        interfaces. I enjoy turning ideas into real-world
                        digital experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                        >
                            View My Work

                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
                        >
                            <Mail size={18} />
                            Get In Touch
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="mt-10 flex items-center gap-5">
                        <span className="text-sm text-gray-500">
                            Find me on
                        </span>

                        <a
                            href="https://github.com/ssdevcmd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition hover:text-emerald-400"
                            aria-label="GitHub"
                        >
                            <FaGithub size={21} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/solayman-sani-933810428"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition hover:text-emerald-400"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={21} />
                        </a>

                        <a
                            href="mailto:saniahmed5484@gmail.com"
                            className="text-gray-400 transition hover:text-emerald-400"
                            aria-label="Email"
                        >
                            <Mail size={21} />
                        </a>
                    </div>
                </motion.div>

                {/* ================= RIGHT ================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">

                        {/* Image glow */}
                        <div className="absolute -inset-6 rounded-3xl bg-emerald-400/10 blur-3xl" />

                        {/* Image */}
                        <div className="relative h-[430px] w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:h-[500px] sm:w-[370px]">

                            <img
                                src="/profile.png"
                                alt="Solayman Sani"
                                className="h-full w-full object-cover object-top grayscale-[15%]"
                            />

                            {/* Bottom gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>

                        {/* Floating developer card */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-[#111]/95 px-5 py-4 shadow-2xl backdrop-blur"
                        >
                            <p className="text-xs text-gray-500">
                                Currently working with
                            </p>

                            <p className="mt-1 text-sm font-semibold text-white">
                                React • Next.js • Node.js
                            </p>
                        </motion.div>

                        {/* Small accent */}
                        <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full border-4 border-[#0a0a0a] bg-emerald-400" />

                    </div>
                </motion.div>
            </div>

            {/* Bottom stats */}
            <div className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-8 lg:px-8">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

                    <div>
                        <p className="text-2xl font-bold text-white">
                            10+
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Projects Built
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-white">
                            5+
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Technologies
                        </p>
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-2xl font-bold text-white">
                            100%
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Passion for Learning
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";
// import { ArrowUpRight, Mail, Download } from "lucide-react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const TERMINAL_LINES = [
//   { prompt: "whoami", output: "Solayman Sani" },
//   { prompt: "role --current", output: "Full Stack Developer" },
//   { prompt: "stack --list", output: "React · Next.js · Node.js · MongoDB" },
//   { prompt: "status", output: "Available for opportunities" },
// ];

// export default function Hero() {
//   const texts = ["Full Stack Developer", "Frontend Developer"];

//   const [textIndex, setTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentText = texts[textIndex];
//     let timeout;

//     if (!isDeleting && displayText.length < currentText.length) {
//       timeout = setTimeout(() => {
//         setDisplayText(currentText.slice(0, displayText.length + 1));
//       }, 100);
//     } else if (!isDeleting && displayText.length === currentText.length) {
//       timeout = setTimeout(() => setIsDeleting(true), 1500);
//     } else if (isDeleting && displayText.length > 0) {
//       timeout = setTimeout(() => {
//         setDisplayText(currentText.slice(0, displayText.length - 1));
//       }, 50);
//     } else if (isDeleting && displayText.length === 0) {
//       setTextIndex((prev) => (prev + 1) % texts.length);
//       setIsDeleting(false);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, textIndex]);

//   return (
//     <section className="relative overflow-hidden bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

//       <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

//         {/* ================= LEFT ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           {/* Availability */}
//           <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm text-gray-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">
//             <span className="relative flex h-2 w-2">
//               <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//             </span>
//             Available for opportunities
//           </div>

//           {/* Heading */}
//           <p className="mb-3 text-lg text-gray-500 dark:text-gray-400">Hello, I&apos;m</p>

//           <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
//             Solayman
//             <span className="block text-emerald-500 dark:text-emerald-400">Sani.</span>
//           </h1>

//           {/* Role */}
//           <h2 className="mt-6 min-h-[42px] text-2xl font-semibold text-gray-700 dark:text-gray-200 sm:text-3xl">
//             {displayText}
//             <span className="ml-1 text-emerald-500 motion-safe:animate-pulse dark:text-emerald-400">|</span>
//           </h2>

//           {/* Description */}
//           <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
//             I build modern, responsive and user-friendly web applications with
//             clean code and thoughtful interfaces. I enjoy turning ideas into
//             real-world digital experiences.
//           </p>

//           {/* Buttons */}
//           <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//             <Link
//               href="/#projects"
//               className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-400"
//             >
//               View My Work
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>

//             <Link
//               href="/#contact"
//               className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 px-6 py-3.5 font-semibold text-gray-900 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400"
//             >
//               <Mail size={18} />
//               Get In Touch
//             </Link>

//             <a
//               href="/resume.pdf"
//               download
//               className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 px-6 py-3.5 font-semibold text-gray-600 transition hover:bg-black/5 hover:text-gray-900 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
//             >
//               <Download size={18} />
//               Resume
//             </a>
//           </div>

//           {/* Social links */}
//           <div className="mt-10 flex items-center gap-5">
//             <span className="text-sm text-gray-500">Find me on</span>

//             <a
//               href="https://github.com/ssdevcmd"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 transition hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
//               aria-label="GitHub"
//             >
//               <FaGithub size={21} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/solayman-sani-933810428"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 transition hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin size={21} />
//             </a>

//             <a
//               href="mailto:saniahmed5484@gmail.com"
//               className="text-gray-500 transition hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
//               aria-label="Email"
//             >
//               <Mail size={21} />
//             </a>
//           </div>
//         </motion.div>

//         {/* ================= RIGHT — terminal card ================= */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.15 }}
//           className="flex justify-center lg:justify-end"
//         >
//           <div className="relative w-full max-w-[400px]">
//             <div className="absolute -inset-6 rounded-3xl bg-emerald-400/10 blur-3xl" />

//             {/* Terminal window — intentionally dark regardless of site theme */}
//             <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl">

//               {/* Chrome bar */}
//               <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
//                 <span className="ml-2 font-mono text-xs text-gray-500">~/solayman-sani</span>
//               </div>

//               {/* Framed photo */}
//               <div className="relative h-66 w-full overflow-hidden">
//                 <img
//                   src="/profile.png"
//                   alt="Solayman Sani"
//                   className="h-full w-full object-cover object-top grayscale-[10%]"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d1117] to-transparent" />
//               </div>

//               {/* Simulated command output */}
//               <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
//                 {TERMINAL_LINES.map((line, i) => (
//                   <div key={line.prompt}>
//                     <span className="text-emerald-400">$ </span>
//                     <span className="text-gray-400">{line.prompt}</span>
//                     <div className="text-gray-200">
//                       {"> "}
//                       {line.output}
//                       {i === TERMINAL_LINES.length - 1 && (
//                         <span className="ml-1 inline-block h-3.5 w-2 motion-safe:animate-pulse bg-emerald-400 align-middle" />
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom stats */}
//       <div className="relative mx-auto max-w-7xl border-t border-black/10 px-6 py-8 dark:border-white/10 lg:px-8">
//         <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
//           <div>
//             <p className="text-2xl font-bold text-gray-900 dark:text-white">10+</p>
//             <p className="mt-1 text-sm text-gray-500">Projects Built</p>
//           </div>

//           <div>
//             <p className="text-2xl font-bold text-gray-900 dark:text-white">5+</p>
//             <p className="mt-1 text-sm text-gray-500">Technologies</p>
//           </div>

//           <div className="hidden sm:block">
//             <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
//             <p className="mt-1 text-sm text-gray-500">Passion for Learning</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// Hero.jsx
// "use client";

// import Link from "next/link";
// import { ArrowRight, Mail } from "lucide-react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section className="bg-[#FAF8F4] text-[#1C1917] dark:bg-[#161513] dark:text-[#F2EEE7]">
//       <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_auto] lg:py-32">

//         {/* Text */}
//         <div>
//           <p
//             className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8C4A3B] dark:text-[#C77B5F]"
//           >
//             Full Stack Developer
//           </p>

//           <h1
//             className="text-5xl leading-[1.1] sm:text-6xl"
//             style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
//           >
//             Solayman Sani
//           </h1>

//           <p className="mt-7 max-w-lg text-[17px] leading-8 text-[#57534E] dark:text-[#A8A29E]">
//             I build clean, considered web applications — React and Next.js
//             on the front end, Node.js and MongoDB underneath. I care as
//             much about the small details as the overall structure.
//           </p>

//           <div className="mt-9 flex flex-wrap items-center gap-5">
//             <Link
//               href="/#projects"
//               className="inline-flex items-center gap-2 bg-[#1C1917] px-6 py-3 text-sm text-[#FAF8F4] transition-colors hover:bg-[#3a3532] dark:bg-[#F2EEE7] dark:text-[#1C1917] dark:hover:bg-white"
//             >
//               View my work
//               <ArrowRight size={15} />
//             </Link>

//             <Link
//               href="/#contact"
//               className="inline-flex items-center gap-2 text-sm text-[#1C1917] underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-[#8C4A3B] dark:text-[#F2EEE7] dark:decoration-white/20 dark:hover:decoration-[#C77B5F]"
//             >
//               <Mail size={15} />
//               Get in touch
//             </Link>
//           </div>

//           <div className="mt-14 flex items-center gap-6 border-t border-black/10 pt-6 dark:border-white/10">
//             <span className="text-xs uppercase tracking-wide text-[#78716C] dark:text-[#8A8580]">
//               Find me on
//             </span>
            
//             <a
//               href="https://github.com/ssdevcmd"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="text-[#57534E] transition-colors hover:text-[#1C1917] dark:text-[#A8A29E] dark:hover:text-[#F2EEE7]"
//             >
//               <FaGithub size={18} />
//             </a>
            
//             <a
//               href="https://www.linkedin.com/in/solayman-sani-933810428"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-[#57534E] transition-colors hover:text-[#1C1917] dark:text-[#A8A29E] dark:hover:text-[#F2EEE7]"
//             >
//               <FaLinkedin size={18} />
//             </a>
            
//             <a
//               href="mailto:saniahmed5484@gmail.com"
//               aria-label="Email"
//               className="text-[#57534E] transition-colors hover:text-[#1C1917] dark:text-[#A8A29E] dark:hover:text-[#F2EEE7]"
//             >
//               <Mail size={18} />
//             </a>
//           </div>
//         </div>

//         {/* Portrait */}
//         <div className="justify-self-center lg:justify-self-end">
//           <figure>
//             <div className="h-[380px] w-[300px] overflow-hidden border border-black/10 dark:border-white/10">
//               <img
//                 src="/profile.png"
//                 alt="Solayman Sani"
//                 className="h-full w-full object-cover object-top grayscale-[35%] contrast-[1.02]"
//               />
//             </div>
//             <figcaption className="mt-3 text-xs italic text-[#78716C] dark:text-[#8A8580]">
//               Solayman Sani — Dhaka, Bangladesh
//             </figcaption>
//           </figure>
//         </div>
//       </div>

//       {/* Stats — quiet, rule-separated */}
//       <div className="border-t border-black/10 dark:border-white/10">
//         <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-black/10 px-6 dark:divide-white/10">
//           {[
//             ["10+", "Projects built"],
//             ["5+", "Technologies"],
//             ["100%", "Passion for learning"],
//           ].map(([num, label]) => (
//             <div key={label} className="px-2 py-8 text-center sm:px-6">
//               <p className="text-2xl" style={{ fontFamily: "Georgia, serif" }}>
//                 {num}
//               </p>
//               <p className="mt-1 text-xs uppercase tracking-wide text-[#78716C] dark:text-[#8A8580]">
//                 {label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
