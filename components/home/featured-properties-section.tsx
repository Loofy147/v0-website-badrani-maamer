"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import type { Property } from "@/lib/types"

interface FeaturedPropertiesSectionProps {
  properties: Property[]
}

export function FeaturedPropertiesSection({ properties }: FeaturedPropertiesSectionProps) {
  const { t, language } = useLanguage()

  return (
    <section
      className="py-16 bg-muted/30"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">{t("home.featuredProperties.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("home.featuredProperties.subtitle")}</p>
        </div>

        {properties && properties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/properties">{t("home.featuredProperties.viewAll")}</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("home.featuredProperties.noneAvailable")}</p>
          </div>
        )}
      </div>
    </section>
  )
}
