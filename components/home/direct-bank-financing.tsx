"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Landmark, CheckCircle2, TrendingUp } from "lucide-react"
import Link from "next/link"

export function DirectBankFinancing() {
  const { t, language } = useLanguage()

  return (
    <section
      className="py-16 bg-gradient-to-br from-green-500/10 via-primary/5 to-blue-500/10"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-500/10 rounded-full">
              <Landmark className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">{t("home.financing.tagline")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.financing.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("home.financing.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-green-500/20">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <Landmark className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-xl">{t("home.financing.card1Title")}</h3>
                <p className="text-muted-foreground text-sm">{t("home.financing.card1Desc")}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">{t("home.financing.card2Title")}</h3>
                <p className="text-muted-foreground text-sm">{t("home.financing.card2Desc")}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/20">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl">{t("home.financing.card3Title")}</h3>
                <p className="text-muted-foreground text-sm">{t("home.financing.card3Desc")}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t("home.financing.partnerBanks")}</h3>
              <p className="mb-6 opacity-90">{t("home.financing.partnerBanksDesc")}</p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/financing">
                  <Landmark className="h-5 w-5 mr-2" />
                  {t("home.financing.cta")}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
