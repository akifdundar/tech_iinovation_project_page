"use client"

import { useEffect } from "react"

const DEMO_MODE = true
const DEMO_TOKEN = "demo-mock-token-for-local-development"

export function DemoProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!DEMO_MODE) return

    const existing = localStorage.getItem("dynamic_authentication_token")
    if (!existing) {
      localStorage.setItem("dynamic_authentication_token", DEMO_TOKEN)
    }
  }, [])

  return <>{children}</>
}
