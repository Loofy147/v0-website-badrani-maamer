import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, TrendingUp, Shield, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">À Propos de Nous</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Promotion Badrani Maamar, votre partenaire de confiance dans l'immobilier à Blida depuis plus de 15 ans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
              alt="Notre bureau"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Notre Mission</h2>
            <p className="text-muted-foreground">
              Faciliter l'accès à la propriété pour tous les Algériens en proposant des solutions immobilières de
              qualité avec des options de financement flexibles et transparentes.
            </p>
            <p className="text-muted-foreground">
              Nous croyons que chaque famille mérite un logement digne et nous nous engageons à rendre ce rêve
              accessible à travers nos projets innovants et notre accompagnement personnalisé.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Propriétés Vendues</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold">1500+</p>
              <p className="text-sm text-muted-foreground">Clients Satisfaits</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-muted-foreground">Années d'Expérience</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm text-muted-foreground">Taux de Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Transparence</h3>
                <p className="text-muted-foreground">
                  Nous croyons en une communication claire et honnête avec nos clients à chaque étape du processus.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Qualité</h3>
                <p className="text-muted-foreground">
                  Chaque projet est réalisé selon les plus hauts standards de construction et de finition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Accompagnement</h3>
                <p className="text-muted-foreground">
                  Notre équipe d'experts vous guide et vous conseille du premier contact jusqu'à la remise des clés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
