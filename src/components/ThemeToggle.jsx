"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-white/10
        bg-white/5
        text-gray-300
        transition-all duration-300
        hover:border-cyan-400/50
        hover:text-cyan-400
        dark:border-white/10
        dark:bg-white/5
        dark:text-gray-300
        light:border-gray-200
        light:bg-gray-100
        light:text-gray-700
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}