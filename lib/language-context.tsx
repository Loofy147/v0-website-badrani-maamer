"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./types"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import { getTranslation } from "./i18n"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "ar" || saved === "fr")) {
      setLanguageState(saved)
      document.documentElement.setAttribute("lang", saved)
      document.documentElement.setAttribute("dir", saved === "ar" ? "rtl" : "ltr")
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.setAttribute("lang", lang)
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")
  }

  const t = (key: string) => getTranslation(language, key)

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
