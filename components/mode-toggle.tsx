"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Icons } from "./Icons"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <Button onClick={toggleTheme} className="w-9 px-0" variant="ghost" size="icon">
            <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>

    )
}
