"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useThemeStore } from "@/store/useThemeStore";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true once the component has mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the children when mounted to prevent SSR issues
  if (!mounted) {
    return null; // or a loading spinner if needed
  }

  return (
    <NextThemesProvider attribute="data-theme" defaultTheme={theme} enableSystem>
      {children}
    </NextThemesProvider>
  );
}
