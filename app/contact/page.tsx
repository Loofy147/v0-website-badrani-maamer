import { LeadForm } from "@/components/lead-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Fan as Fax } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contactez-Nous</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <LeadForm />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+213770621824" className="text-muted-foreground hover:text-primary block">
                      +213 770 62 18 24
                    </a>
                    <a href="tel:+213550032741" className="text-muted-foreground hover:text-primary block">
                      +213 550 03 27 41
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Fax className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fax</h3>
                    <p className="text-muted-foreground">+213 27 50 30 30</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:[email protected]" className="text-muted-foreground hover:text-primary block">
                      [email protected]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Siège Social</h3>
                    <p className="text-muted-foreground">Cité 234 logts Hotel Doui</p>
                    <p className="text-muted-foreground">Commune de Aïn Defla</p>
                    <p className="text-muted-foreground">Wilaya de Aïn Defla, Algérie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Bureau de Vente - Projet Rouina</h3>
                    <p className="text-muted-foreground">Sur site du projet</p>
                    <p className="text-muted-foreground">Commune de Rouina</p>
                    <p className="text-muted-foreground">Wilaya de Aïn Defla</p>
                    <p className="text-xs text-primary mt-1">Ouvert tous les jours pour visites</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-muted-foreground">Samedi - Jeudi: 8h00 - 17h00</p>
                    <p className="text-muted-foreground">Vendredi: Fermé</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51618.32!2d1.96!3d36.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fade3ae1df665%3A0x6e7e4c5e3e8f8f8f!2sAin%20Defla%2C%20Algeria!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
