"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-xl shadow-md">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg transition ${
          theme === "light"
            ? "bg-white dark:bg-gray-700 shadow"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg transition ${
          theme === "dark"
            ? "bg-white dark:bg-gray-700 shadow"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-lg transition ${
          theme === "system"
            ? "bg-white dark:bg-gray-700 shadow"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <Monitor className="w-5 h-5 text-blue-500" />
      </button>
    </div>
  );
}
