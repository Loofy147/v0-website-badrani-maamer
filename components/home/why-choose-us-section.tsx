"use client"

import { useLanguage } from "@/lib/language-context"
import { Building2, Users, Shield, Landmark } from "lucide-react"

export function WhyChooseUsSection() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: t("home.whyChooseUs.feature1Title"),
      description: t("home.whyChooseUs.feature1Desc"),
    },
    {
      icon: <Landmark className="h-8 w-8 text-green-600" />,
      title: t("home.whyChooseUs.feature2Title"),
      description: t("home.whyChooseUs.feature2Desc"),
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t("home.whyChooseUs.feature3Title"),
      description: t("home.whyChooseUs.feature3Desc"),
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t("home.whyChooseUs.feature4Title"),
      description: t("home.whyChooseUs.feature4Desc"),
    },
  ]

  return (
    <section
      className="py-16"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.whyChooseUs.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
