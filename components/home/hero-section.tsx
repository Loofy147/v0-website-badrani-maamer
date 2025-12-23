"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { WhatsappButton } from "@/components/ui/whatsapp-button"
import { ArrowRight, Landmark, Phone } from "lucide-react"

export function HeroSection() {
  const { t, language } = useLanguage()

  const whatsappNumbers = [
    { number: "213770621824", display: "0770 62 18 24" },
    { number: "213550032741", display: "0550 03 27 41" },
    { number: "213550029750", display: "0550 02 97 50" },
  ]

  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block mb-2 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">{t("home.hero.tagline")}</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
            {t("home.hero.title")}
            <br />
            <span className="text-primary">{t("home.hero.subtitle")}</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">{t("home.hero.description")}</p>

          <div className="flex flex-wrap gap-3">
            {whatsappNumbers.map((contact) => (
              <WhatsappButton
                key={contact.number}
                phoneNumber={contact.number}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {contact.display}
              </WhatsappButton>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/properties">
                {t("home.hero.ctaProperties")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/financing">
                <Landmark className="h-4 w-4 mr-2" />
                {t("home.hero.ctaFinancing")}
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="tel:+213275031331" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Phone className="h-4 w-4" />
              027 50 31 31
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="tel:+213275030030" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              📠 Fax: 027 50 30 30
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
