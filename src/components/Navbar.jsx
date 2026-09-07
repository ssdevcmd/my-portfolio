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

// "use client";

// import Link from "next/link";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { useTheme } from "next-themes";

// const NAV_LINKS = [
//   { href: "/", label: "Home", id: "home" },
//   { href: "/#about", label: "About", id: "about" },
//   { href: "/#skills", label: "Skills", id: "skills" },
//   { href: "/#projects", label: "Projects", id: "projects" },
//   { href: "/#contact", label: "Contact", id: "contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

//   const linkRefs = useRef({});
//   const pillRef = useRef(null);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   // Scroll-aware chrome
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Scrollspy
//   useEffect(() => {
//     const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
//     if (sections.length === 0) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
//         if (visible) setActiveId(visible.target.id);
//       },
//       { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
//     );
//     sections.forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, []);

//   // Slide the pill indicator to the active link
//   useLayoutEffect(() => {
//     const el = linkRefs.current[activeId];
//     const pill = pillRef.current;
//     if (!el || !pill) return;
//     const elRect = el.getBoundingClientRect();
//     const pillRect = pill.getBoundingClientRect();
//     setIndicator({
//       left: elRect.left - pillRect.left,
//       width: elRect.width,
//       opacity: 1,
//     });
//   }, [activeId, mounted]);

//   useEffect(() => {
//     const onResize = () => {
//       const el = linkRefs.current[activeId];
//       const pill = pillRef.current;
//       if (!el || !pill) return;
//       const elRect = el.getBoundingClientRect();
//       const pillRect = pill.getBoundingClientRect();
//       setIndicator((prev) => ({ ...prev, left: elRect.left - pillRect.left, width: elRect.width }));
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [activeId]);

//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && setIsOpen(false);
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <header className="fixed top-0 z-50 w-full px-4 pt-4">
//       <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">

//         {/* Wordmark + availability status */}
//         <Link href="/" className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white/80 px-4 py-2.5 backdrop-blur-md dark:border-white/10 dark:bg-[#0f172a]/80">
//           <span className="relative flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//           </span>
//           <span className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
//             Solayman
//           </span>
//         </Link>

//         {/* Desktop pill nav with sliding indicator */}
//         <nav
//           ref={pillRef}
//           className={`
//             relative hidden items-center gap-1 rounded-full border backdrop-blur-md
//             px-1.5 py-1.5 transition-all duration-300 md:flex
//             ${scrolled
//               ? "border-black/10 bg-white/90 shadow-sm dark:border-white/10 dark:bg-[#0f172a]/90"
//               : "border-black/5 bg-white/70 dark:border-white/5 dark:bg-[#0f172a]/60"}
//           `}
//         >
//           <span
//             className="absolute h-8 rounded-full bg-emerald-400/15 transition-all duration-300 ease-out dark:bg-emerald-400/10"
//             style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
//           />
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.id}
//               href={link.href}
//               ref={(el) => (linkRefs.current[link.id] = el)}
//               className={`
//                 relative z-10 rounded-full px-3.5 py-1.5 text-sm transition-colors
//                 ${activeId === link.id
//                   ? "text-emerald-600 dark:text-emerald-400"
//                   : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}
//               `}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Right controls */}
//         <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/80 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-[#0f172a]/80">
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             className="group flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-black/5 hover:text-emerald-500 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-emerald-400"
//           >
//             {mounted && theme === "dark" ? (
//               <Sun size={17} className="transition-transform duration-300 group-hover:rotate-45" />
//             ) : (
//               <Moon size={17} className="transition-transform duration-300 group-hover:-rotate-12" />
//             )}
//           </button>

//           <Link
//             href="/resume.pdf"
//             target="_blank"
//             className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400 md:block"
//           >
//             Resume
//           </Link>

//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-black/5 hover:text-emerald-500 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-emerald-400 md:hidden"
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile dropdown panel */}
//       <div
//         className={`mx-auto mt-2 grid max-w-5xl overflow-hidden px-0 transition-all duration-300 ease-out md:hidden ${
//           isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//         }`}
//       >
//         <div className="min-h-0 rounded-2xl border border-black/10 bg-white/95 p-4 backdrop-blur-md dark:border-white/10 dark:bg-[#0f172a]/95">
//           <div className="flex flex-col gap-1">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.id}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className={`rounded-lg px-3 py-2 text-sm transition ${
//                   activeId === link.id
//                     ? "bg-emerald-400/10 text-emerald-600 dark:text-emerald-400"
//                     : "text-gray-600 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/5"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               href="/resume.pdf"
//               target="_blank"
//               onClick={closeMenu}
//               className="mt-2 w-fit rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400"
//             >
//               Resume
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// Navbar.jsx
// "use client";

// import Link from "next/link";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const NAV_LINKS = [
//   { href: "/", label: "Home", id: "home" },
//   { href: "/#about", label: "About", id: "about" },
//   { href: "/#skills", label: "Skills", id: "skills" },
//   { href: "/#projects", label: "Projects", id: "projects" },
//   { href: "/#contact", label: "Contact", id: "contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const { theme, setTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   useEffect(() => {
//     const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
//     if (sections.length === 0) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
//         if (visible) setActiveId(visible.target.id);
//       },
//       { rootMargin: "-40% 0px -50% 0px" }
//     );
//     sections.forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && setIsOpen(false);
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#FAF8F4]/95 backdrop-blur-sm dark:border-white/10 dark:bg-[#161513]/95">
//       <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">

//         <Link
//           href="/"
//           className="font-serif text-xl tracking-tight text-[#1C1917] dark:text-[#F2EEE7]"
//           style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
//         >
//           Solayman Sani
//         </Link>

//         <div className="hidden items-center gap-9 md:flex">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.id}
//               href={link.href}
//               className={`relative text-sm text-[#57534E] transition-colors hover:text-[#1C1917] dark:text-[#A8A29E] dark:hover:text-[#F2EEE7] ${
//                 activeId === link.id ? "text-[#1C1917] dark:text-[#F2EEE7]" : ""
//               }`}
//             >
//               {link.label}
//               {activeId === link.id && (
//                 <span className="absolute -bottom-[25px] left-0 h-px w-full bg-[#8C4A3B] dark:bg-[#C77B5F]" />
//               )}
//             </Link>
//           ))}

//           <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             className="text-[#57534E] transition-colors hover:text-[#1C1917] dark:text-[#A8A29E] dark:hover:text-[#F2EEE7]"
//           >
//             {mounted && theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
//           </button>

//           <Link
//             href="/resume.pdf"
//             target="_blank"
//             className="border border-[#1C1917] px-4 py-2 text-sm text-[#1C1917] transition-colors hover:bg-[#1C1917] hover:text-[#FAF8F4] dark:border-[#F2EEE7] dark:text-[#F2EEE7] dark:hover:bg-[#F2EEE7] dark:hover:text-[#1C1917]"
//           >
//             Resume
//           </Link>
//         </div>

//         <div className="flex items-center gap-4 md:hidden">
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             className="text-[#57534E] dark:text-[#A8A29E]"
//           >
//             {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//             className="text-[#1C1917] dark:text-[#F2EEE7]"
//           >
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </nav>

//       <div
//         className={`grid overflow-hidden border-t border-black/10 transition-all duration-300 ease-out dark:border-white/10 md:hidden ${
//           isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-0 opacity-0"
//         }`}
//       >
//         <div className="min-h-0">
//           <div className="flex flex-col gap-4 px-6 py-6">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.id}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className={`text-sm ${
//                   activeId === link.id
//                     ? "text-[#1C1917] dark:text-[#F2EEE7]"
//                     : "text-[#57534E] dark:text-[#A8A29E]"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               href="/resume.pdf"
//               target="_blank"
//               onClick={closeMenu}
//               className="mt-2 w-fit border border-[#1C1917] px-4 py-2 text-sm text-[#1C1917] dark:border-[#F2EEE7] dark:text-[#F2EEE7]"
//             >
//               Resume
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }