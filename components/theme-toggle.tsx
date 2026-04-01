"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative p-2 rounded-lg transition-colors hover:bg-white/10 ${className ?? ""}`}
      aria-label="Toggle theme"
    >
      <Sun className={`h-[18px] w-[18px] transition-all ${theme === "dark" ? "scale-0 rotate-90 absolute" : "scale-100 rotate-0 text-amber-500"}`} />
      <Moon className={`h-[18px] w-[18px] transition-all ${theme === "dark" ? "scale-100 rotate-0 text-purple-300" : "scale-0 -rotate-90 absolute"}`} />
    </button>
  )
}
