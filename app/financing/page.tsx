import { createClient } from "@/lib/supabase/server"
import { FinancingCalculator } from "@/components/financing-calculator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Building2 } from "lucide-react"

export default async function FinancingPage() {
  const supabase = await createClient()

  const { data: financingOptions } = await supabase
    .from("financing_options")
    .select("*")
    .eq("active", true)
    .order("down_payment_percentage", { ascending: true })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Solutions de Financement</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez parmi nos options de financement flexibles et calculez vos mensualités en quelques clics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FinancingCalculator financingOptions={financingOptions || []} />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Options Disponibles</CardTitle>
                <CardDescription>Nos partenaires financiers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {financingOptions?.map((option) => (
                  <div key={option.id} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{option.name_fr}</h3>
                      {option.is_islamic && <Badge variant="secondary">Conforme Charia</Badge>}
                    </div>
                    {option.description_fr && <p className="text-sm text-muted-foreground">{option.description_fr}</p>}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Acompte</p>
                        <p className="font-semibold">{option.down_payment_percentage}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Durée</p>
                        <p className="font-semibold">{option.duration_months} mois</p>
                      </div>
                    </div>
                    {option.bank_partner && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                        <Building2 className="h-4 w-4" />
                        <span>{option.bank_partner}</span>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avantages de Notre Financement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Taux Compétitifs</p>
                    <p className="text-sm text-muted-foreground">Parmi les meilleurs du marché algérien</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Processus Simplifié</p>
                    <p className="text-sm text-muted-foreground">Documentation minimale et traitement rapide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Options Islamiques</p>
                    <p className="text-sm text-muted-foreground">Financement conforme à la Charia disponible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Accompagnement Personnalisé</p>
                    <p className="text-sm text-muted-foreground">Notre équipe vous guide à chaque étape</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold">Besoin d'Aide avec le Financement ?</h3>
                <p className="opacity-90">Nos experts sont là pour vous conseiller et vous accompagner</p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Contactez un Expert
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
