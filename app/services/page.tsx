import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Store, Presentation, Calculator, FileText, Users, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Nos Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions immobilières complètes adaptées à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Logements résidentiels"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Logements Promotionnels</h2>
              </div>
              <p className="text-muted-foreground">
                21 logements promotionnels à Rouina avec appartements F3 (85m²) et F4 (110m²). Finitions de qualité,
                parking inclus, livraison sous 6 mois.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Appartements F3 (85m²) et F4 (110m²)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Quartier résidentiel calme à Rouina</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Paiement sur 40 mois disponible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Bureau de vente sur site</span>
                </li>
              </ul>
              <Link href="/properties">
                <Button className="w-full">Voir les Appartements</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Locaux commerciaux"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Locaux Commerciaux RN4</h2>
              </div>
              <p className="text-muted-foreground">
                Locaux commerciaux stratégiques sur la Route Nationale N°4. Superficies de 45m² à 150m². Visibilité
                maximale avec flux constant de clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Sur Route Nationale N°4</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Superficies: 45m², 80m², 150m²</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Parking et accès facile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Prix compétitifs</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full bg-transparent">
                  Demander Plus d'Infos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Skcnats résidentiels"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Skcnats Résidentiels</h2>
              </div>
              <p className="text-muted-foreground">
                Appartements F3 et F4 avec des finitions de haute qualité, situés dans des emplacements stratégiques à
                Rouina, Ain Defla. Possibilité de financement jusqu'à 40 ans.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Appartements F3 et F4</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Finitions modernes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Options de financement flexibles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Visite sur place disponible</span>
                </li>
              </ul>
              <Link href="/properties">
                <Button className="w-full">Voir les Propriétés</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Locaux commerciaux"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Locaux Commerciaux</h2>
              </div>
              <p className="text-muted-foreground">
                Locaux commerciaux de différentes tailles situés sur la Route Nationale N°4, avec une visibilité
                optimale et des prix compétitifs pour votre activité commerciale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Emplacement sur RN4</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Diverses superficies disponibles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Prix compétitifs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Visibilité maximale</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full bg-transparent">
                  Demander Plus d'Infos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Presentation className="h-24 w-24 text-primary" />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Presentation className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">BAB AL-EMAAR</h2>
              </div>
              <p className="text-muted-foreground">
                Salle de conférences et réunions moderne, équipée des dernières technologies audiovisuelles. Idéale pour
                formations, séminaires, réunions d'entreprise et événements professionnels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Équipement audiovisuel moderne</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Capacité flexible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Service de restauration disponible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Location à la journée ou demi-journée</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full">Réserver une Visite</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center">
              <Calculator className="h-24 w-24 text-green-600" />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Solutions de Financement</h2>
              </div>
              <p className="text-muted-foreground">
                Accompagnement complet pour le financement de votre projet immobilier. Options conventionnelles et
                islamiques disponibles, avec des durées de remboursement flexibles jusqu'à 40 ans.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Financement conventionnel et islamique</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Durées jusqu'à 40 ans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Accompagnement personnalisé</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Calculateur en ligne gratuit</span>
                </li>
              </ul>
              <Link href="/financing">
                <Button variant="outline" className="w-full bg-transparent">
                  Calculer Mon Financement
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Accompagnement Complet</h2>
              <p className="text-muted-foreground">
                De la première visite jusqu'à la remise des clés, notre équipe vous accompagne à chaque étape de votre
                projet immobilier.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Assistance Administrative</p>
                    <p className="text-sm text-muted-foreground">Aide avec tous les documents et démarches légales</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Conseil Personnalisé</p>
                    <p className="text-sm text-muted-foreground">
                      Experts à votre écoute pour trouver la solution idéale
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Suivi Post-Vente</p>
                    <p className="text-sm text-muted-foreground">Service client disponible même après la transaction</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Notre équipe"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Prêt à Commencer Votre Projet?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à
            réaliser votre projet immobilier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Nous Contacter</Button>
            </Link>
            <Link href="/properties">
              <Button size="lg" variant="outline">
                Voir Nos Propriétés
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
