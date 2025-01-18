'use client'

import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeButton() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <button></button>
    )

    if  (resolvedTheme === 'dark') {
        return <Sun onClick={() => setTheme('light')} className="cursor-pointer"></Sun> 
    }

    if (resolvedTheme === 'light') {
        return <Moon onClick={() => setTheme('dark')} className="cursor-pointer"></Moon>
    }
}