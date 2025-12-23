"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { WhatsappButton } from "@/components/ui/whatsapp-button"

export function CtaSection() {
  const { t, language } = useLanguage()
  const whatsappNumber = { number: "213770621824", display: "0770 62 18 24" }

  return (
    <section
      className="py-16 bg-primary text-primary-foreground"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.cta.title")}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{t("home.cta.subtitle")}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{t("home.cta.contactUs")}</Link>
          </Button>
          <WhatsappButton
            phoneNumber={whatsappNumber.number}
            className="bg-green-600 hover:bg-green-700 text-white border-2 border-white"
          >
            {t("home.cta.whatsapp")} {whatsappNumber.display}
          </WhatsappButton>
        </div>
      </div>
    </section>
  )
}
