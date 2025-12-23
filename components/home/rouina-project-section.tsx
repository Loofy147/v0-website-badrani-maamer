"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin } from "lucide-react"

export function RouinaProjectSection() {
  const { t, language } = useLanguage()

  const listItems = [
    t("home.rouinaProject.listItem1"),
    t("home.rouinaProject.listItem2"),
    t("home.rouinaProject.listItem3"),
    t("home.rouinaProject.listItem4"),
  ]

  return (
    <section
      className="py-16 bg-muted/30"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-medium text-primary">{t("home.rouinaProject.tagline")}</p>
            </div>
            <h2 className="text-3xl font-bold mb-4">{t("home.rouinaProject.title")}</h2>
            <p className="text-muted-foreground mb-6">{t("home.rouinaProject.description")}</p>
            <ul className="space-y-3">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span className="font-medium">{t("home.rouinaProject.location")}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/properties?location=rouina">{t("home.rouinaProject.ctaView")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t("home.rouinaProject.ctaVisit")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
              alt="Projet Rouina"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
