"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered after mounting on the client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return nothing during SSR, it will show up after mounting
  }

  return (
    <div className="flex items-center gap-2 bg-white/30 dark:bg-white/10 backdrop-blur-lg p-2 rounded-xl shadow-lg border border-white/40 dark:border-white/20">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg transition ${
          theme === "light"
            ? "bg-white dark:bg-gray-700 shadow"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Sun className="w-5 h-5 text-yellow-400 drop-shadow-md" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg transition ${
          theme === "dark"
            ? "bg-white dark:bg-gray-700 shadow"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Moon className="w-5 h-5 text-gray-300 drop-shadow-sm" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-lg transition ${
          theme === "system"
            ? "bg-white dark:bg-gray-700 shadow"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Monitor className="w-5 h-5 text-blue-400 drop-shadow-md" />
      </button>
    </div>
  );
}