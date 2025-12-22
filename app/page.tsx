import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { createClient } from "@/lib/supabase/server"
import { ArrowRight, Building2, Users, TrendingUp, Shield } from "lucide-react"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "available")
    .eq("featured", true)
    .limit(6)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Réalisez Votre Rêve Immobilier
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Trouvez votre propriété idéale à Blida avec des options de financement flexibles adaptées à vos besoins
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/properties">
                  Découvrir les Propriétés
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/financing">Options de Financement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Propriétés en Vedette</h2>
            <p className="text-muted-foreground text-lg">Découvrez notre sélection de biens immobiliers premium</p>
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
                  <Link href="/properties">Voir Toutes les Propriétés</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune propriété disponible pour le moment</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Nous Choisir</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Expérience Prouvée</h3>
              <p className="text-muted-foreground text-sm">Plus de 15 ans d'excellence dans l'immobilier à Blida</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Confiance & Transparence</h3>
              <p className="text-muted-foreground text-sm">Transactions sécurisées avec documentation complète</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Financement Flexible</h3>
              <p className="text-muted-foreground text-sm">Options de paiement adaptées à tous les budgets</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Support Dédié</h3>
              <p className="text-muted-foreground text-sm">Accompagnement personnalisé à chaque étape</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Commencer Votre Parcours ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd'hui et laissez nos experts vous guider vers la propriété de vos rêves
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contactez-Nous Maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
