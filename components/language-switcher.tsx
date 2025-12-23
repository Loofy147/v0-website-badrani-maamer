"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "ar" : "fr")
  }

  return (
    <Button variant="ghost" onClick={toggleLanguage} className="text-sm font-medium">
      {language === "fr" ? "العربية" : "Français"}
    </Button>
  )
}
