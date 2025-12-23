"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "fr" ? "ar" : "fr")} className="gap-2">
      <Languages className="h-4 w-4" />
      {language === "fr" ? "العربية" : "Français"}
    </Button>
  )
}
