import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, FileText, LogOut } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const { data: favorites } = await supabase
    .from("favorites")
    .select("*, properties(*)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(3)

  const { data: viewings } = await supabase
    .from("viewings")
    .select("*, properties(*)")
    .eq("user_id", user.id)
    .order("scheduled_date", { ascending: false })
    .limit(3)

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(3)

  async function handleSignOut() {
    "use server"
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect("/")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tableau de Bord</h1>
          <p className="text-muted-foreground">Bienvenue, {profile?.full_name || user.email}</p>
        </div>
        <form action={handleSignOut}>
          <Button variant="outline" type="submit">
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favoris</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{favorites?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Propriétés sauvegardées</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visites</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{viewings?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Rendez-vous programmés</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demandes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads?.length || 0}</div>
            <p className="text-xs text-muted-foreground">En cours de traitement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mes Favoris</CardTitle>
            <CardDescription>Propriétés que vous avez sauvegardées</CardDescription>
          </CardHeader>
          <CardContent>
            {favorites && favorites.length > 0 ? (
              <div className="space-y-4">
                {favorites.map((favorite) => (
                  <div key={favorite.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium line-clamp-1">{favorite.properties?.title_fr}</p>
                      <p className="text-sm text-muted-foreground">{favorite.properties?.address}</p>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/properties/${favorite.property_id}`}>Voir</Link>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">Aucun favori pour le moment</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prochaines Visites</CardTitle>
            <CardDescription>Vos rendez-vous à venir</CardDescription>
          </CardHeader>
          <CardContent>
            {viewings && viewings.length > 0 ? (
              <div className="space-y-4">
                {viewings.map((viewing) => (
                  <div key={viewing.id} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium line-clamp-1">{viewing.properties?.title_fr}</p>
                      <Badge variant={viewing.status === "scheduled" ? "default" : "secondary"}>{viewing.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(viewing.scheduled_date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">Aucune visite programmée</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Mes Demandes</CardTitle>
            <CardDescription>Historique de vos demandes et contacts</CardDescription>
          </CardHeader>
          <CardContent>
            {leads && leads.length > 0 ? (
              <div className="space-y-3">
                {leads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{lead.lead_type}</Badge>
                        <Badge variant={lead.status === "new" ? "default" : "secondary"}>{lead.status}</Badge>
                      </div>
                      {lead.message && <p className="text-sm text-muted-foreground line-clamp-1">{lead.message}</p>}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">Aucune demande pour le moment</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
