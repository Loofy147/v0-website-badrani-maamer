import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare } from "lucide-react"

export default async function AdminLeadsPage() {
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

  const { data: leads } = await supabase
    .from("leads")
    .select("*, properties(title_fr), profiles(full_name)")
    .order("created_at", { ascending: false })

  const statusColors = {
    new: "default",
    contacted: "secondary",
    qualified: "outline",
    converted: "default",
    closed: "secondary",
  } as const

  const leadTypeLabels = {
    viewing: "Visite",
    financing: "Financement",
    callback: "Rappel",
    general: "Général",
  } as const

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Gestion des Demandes</h1>
        <p className="text-muted-foreground">Suivez et gérez les demandes clients</p>
      </div>

      {leads && leads.length > 0 ? (
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{lead.full_name}</CardTitle>
                      <Badge variant={statusColors[lead.status as keyof typeof statusColors]}>{lead.status}</Badge>
                      <Badge variant="outline">{leadTypeLabels[lead.lead_type as keyof typeof leadTypeLabels]}</Badge>
                    </div>
                    {lead.properties && (
                      <p className="text-sm text-muted-foreground">Propriété intéressée: {lead.properties.title_fr}</p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${lead.email}`} className="hover:underline">
                        {lead.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${lead.phone}`} className="hover:underline">
                        {lead.phone}
                      </a>
                    </div>
                    {lead.preferred_contact && <Badge variant="secondary">{lead.preferred_contact}</Badge>}
                  </div>

                  {lead.message && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <p className="text-sm">{lead.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Marquer comme contacté
                    </Button>
                    <Button size="sm" variant="outline">
                      Assigner
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Aucune demande pour le moment</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
