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
        "Full Stack Developer",
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
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition hover:text-emerald-400"
                            aria-label="GitHub"
                        >
                            <FaGithub size={21} />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition hover:text-emerald-400"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={21} />
                        </a>

                        <a
                            href="mailto:your-email@example.com"
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