"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Bed, Bath, Maximize, MapPin, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Property } from "@/lib/types"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { t, language } = useLanguage()

  const title = language === "ar" ? property.title_ar : property.title_fr
  const propertyType = t(`properties.${property.property_type}`)
  const status = t(`properties.${property.status}`)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-DZ" : "fr-DZ", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0] || "/placeholder.svg?height=300&width=400"}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant={property.status === "available" ? "default" : "secondary"}>{status}</Badge>
            {property.featured && <Badge variant="destructive">{language === "ar" ? "مميز" : "Vedette"}</Badge>}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground">{propertyType}</p>
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{property.address}</span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4 text-muted-foreground" />
            <span>
              {property.surface_area}m<sup>2</sup>
            </span>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-2xl font-bold text-primary">{formatPrice(property.price)}</p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-transparent" variant="outline" data-va-track="true" data-va-track-name={`Property Card Click - ${property.title_fr}`}>
          <Link href={`/properties/${property.id}`}>
            <Eye className="h-4 w-4 mr-2" />
            {t("properties.viewDetails")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
