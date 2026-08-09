"use client";

import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-white/10
        bg-[#0f172a]/95
        backdrop-blur-md
        dark:bg-[#0f172a]/95
      "
    >
      <nav className="mx-auto max-w-7xl px-6">
        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="
              text-xl font-bold tracking-tight
              text-white
              transition
              hover:text-emerald-400
            "
          >
            Solayman
            <span className="text-emerald-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            <Link
              href="/"
              className="
                text-sm text-gray-300
                transition
                hover:text-emerald-400
              "
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="
                text-sm text-gray-300
                transition
                hover:text-emerald-400
              "
            >
              About
            </Link>

            <Link
              href="/#skills"
              className="
                text-sm text-gray-300
                transition
                hover:text-emerald-400
              "
            >
              Skills
            </Link>

            <Link
              href="/#projects"
              className="
                text-sm text-gray-300
                transition
                hover:text-emerald-400
              "
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              className="
                text-sm text-gray-300
                transition
                hover:text-emerald-400
              "
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                group
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-[#1e2b46]
                bg-[#080f21]
                text-gray-300
                transition-all duration-300
                hover:border-emerald-400/50
                hover:text-emerald-400
                hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]
              "
            >
              {mounted && theme === "dark" ? (
                <Sun
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              ) : (
                <Moon
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-rotate-12
                  "
                />
              )}
            </button>

            {/* Resume */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="
                rounded-lg
                border border-emerald-400/50
                px-4 py-2
                text-sm font-medium
                text-emerald-400
                transition-all duration-300
                hover:bg-emerald-400
                hover:text-black
                hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]
              "
            >
              Resume
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-[#1e2b46]
                bg-[#080f21]
                text-gray-300
                transition
                hover:border-emerald-400/50
                hover:text-emerald-400
              "
            >
              {mounted && theme === "dark" ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                rounded-xl
                border border-white/10
                p-2
                text-gray-300
                transition
                hover:border-emerald-400/50
                hover:text-emerald-400
              "
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
              border-t border-white/10
              py-5
              md:hidden
            "
          >
            <div className="flex flex-col gap-4">

              <Link
                href="/"
                onClick={closeMenu}
                className="
                  text-gray-300
                  transition
                  hover:text-emerald-400
                "
              >
                Home
              </Link>

              <Link
                href="/#about"
                onClick={closeMenu}
                className="
                  text-gray-300
                  transition
                  hover:text-emerald-400
                "
              >
                About
              </Link>

              <Link
                href="/#skills"
                onClick={closeMenu}
                className="
                  text-gray-300
                  transition
                  hover:text-emerald-400
                "
              >
                Skills
              </Link>

              <Link
                href="/#projects"
                onClick={closeMenu}
                className="
                  text-gray-300
                  transition
                  hover:text-emerald-400
                "
              >
                Projects
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="
                  text-gray-300
                  transition
                  hover:text-emerald-400
                "
              >
                Contact
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                onClick={closeMenu}
                className="
                  w-fit
                  rounded-lg
                  border border-emerald-400/50
                  px-4 py-2
                  text-sm font-medium
                  text-emerald-400
                  transition
                  hover:bg-emerald-400
                  hover:text-black
                "
              >
                Resume
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}