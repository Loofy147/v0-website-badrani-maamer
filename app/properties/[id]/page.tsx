import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Bed, Bath, Maximize, MapPin, Building2 } from "lucide-react"

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const { data: property } = await supabase.from("properties").select("*").eq("id", params.id).single()

  if (!property) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={property.images[0] || "/placeholder.svg?height=400&width=600"}
                alt={property.title_fr}
                fill
                className="object-cover"
              />
            </div>
            {property.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {property.images.slice(1, 4).map((image: string, index: number) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title_fr} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{property.property_type}</Badge>
                <Badge variant={property.status === "available" ? "default" : "secondary"}>{property.status}</Badge>
                {property.featured && <Badge variant="destructive">Featured</Badge>}
              </div>
              <h1 className="text-3xl font-bold mb-4">{property.title_fr}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{property.address}</span>
              </div>
              <p className="text-4xl font-bold text-primary">{formatPrice(property.price)}</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.bedrooms && (
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Chambres</p>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Salles de bain</p>
                      <p className="font-semibold">{property.bathrooms}</p>
                    </div>
                  )}
                  <div className="text-center">
                    <Maximize className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Surface</p>
                    <p className="font-semibold">
                      {property.surface_area}m<sup>2</sup>
                    </p>
                  </div>
                  {property.floor_number !== null && (
                    <div className="text-center">
                      <Building2 className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Étage</p>
                      <p className="font-semibold">{property.floor_number}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground">{property.description_fr}</p>
            </div>

            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Équipements</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LeadForm propertyId={property.id} leadType="viewing" />
        </div>
      </div>
    </div>
  )
}
