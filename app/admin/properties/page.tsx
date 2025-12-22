import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Plus, Edit, Eye } from "lucide-react"
import Image from "next/image"

export default async function AdminPropertiesPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (!profile || profile.user_type !== "admin") {
    redirect("/dashboard")
  }

  const { data: properties } = await supabase.from("properties").select("*").order("created_at", { ascending: false })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Propriétés</h1>
          <p className="text-muted-foreground">Gérez votre catalogue immobilier</p>
        </div>
        <Button asChild>
          <Link href="/admin/properties/new">
            <Plus className="h-4 w-4 mr-2" />
            Nouvelle Propriété
          </Link>
        </Button>
      </div>

      {properties && properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={property.images[0] || "/placeholder.svg?height=300&width=400"}
                  alt={property.title_fr}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={property.status === "available" ? "default" : "secondary"}>{property.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{property.title_fr}</CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{property.property_type}</span>
                  <span className="font-bold text-primary">
                    {new Intl.NumberFormat("fr-DZ", {
                      style: "currency",
                      currency: "DZD",
                      minimumFractionDigits: 0,
                    }).format(property.price)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`/properties/${property.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      Voir
                    </Link>
                  </Button>
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <Link href={`/admin/properties/${property.id}/edit`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Éditer
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">Aucune propriété pour le moment</p>
            <Button asChild>
              <Link href="/admin/properties/new">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une propriété
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
