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
              <p className="text-sm font-medium text-primary">Promotion Badrani Maamar - Aïn Defla</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Sکنات ترقوية و محلات تجارية للبيع
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Projet de 21 logements à Rouina + Locaux commerciaux sur RN4. Financement bancaire ou paiement échelonné
              sur 40 mois disponible
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/properties">
                  Découvrir Nos Biens
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/financing">Financement sur 40 Mois</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="tel:+213770621824" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                📞 0770 62 18 24
              </a>
              <a href="tel:+213550032741" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                📞 0550 03 27 41
              </a>
              <span className="text-muted-foreground">Fax: 027 50 30 30</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Promotion Badrani Maamar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Projets Réels</h3>
              <p className="text-muted-foreground text-sm">21 logements promotionnels à Rouina + Locaux sur RN4</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Bureau sur Site</h3>
              <p className="text-muted-foreground text-sm">Visitez notre bureau à Rouina pour voir les appartements</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Paiement sur 40 Mois</h3>
              <p className="text-muted-foreground text-sm">Options flexibles sans banque avec le promoteur</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">8K+ Abonnés</h3>
              <p className="text-muted-foreground text-sm">Communauté active sur les réseaux sociaux</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Projet à Rouina</h2>
              <p className="text-muted-foreground mb-6">
                Découvrez notre projet de 21 logements promotionnels dans la commune de Rouina, wilaya d'Aïn Defla.
                Appartements F3 et F4 avec finitions modernes dans un quartier résidentiel calme.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Bureau de vente sur site ouvert tous les jours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Visites possibles sans rendez-vous</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Financement bancaire ou paiement direct arrangé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Livraison sous 6 mois</span>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/properties?location=rouina">Voir les Appartements Rouina</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Projet Rouina"
                className="object-cover w-full h-full"
              />
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
