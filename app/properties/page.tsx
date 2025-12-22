import { createClient } from "@/lib/supabase/server"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export default async function PropertiesPage() {
  const supabase = await createClient()

  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Toutes les Propriétés</h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filtrer
          </Button>
        </div>
      </div>

      {properties && properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucune propriété disponible pour le moment</p>
        </div>
      )}
    </div>
  )
}
