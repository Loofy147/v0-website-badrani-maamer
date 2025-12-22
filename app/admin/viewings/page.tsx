import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User } from "lucide-react"

export default async function AdminViewingsPage() {
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

  const { data: viewings } = await supabase
    .from("viewings")
    .select("*, properties(title_fr, address), profiles(full_name, phone)")
    .order("scheduled_date", { ascending: true })

  const statusColors = {
    scheduled: "default",
    confirmed: "default",
    completed: "secondary",
    cancelled: "destructive",
  } as const

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Gestion des Visites</h1>
        <p className="text-muted-foreground">Planifiez et suivez les rendez-vous</p>
      </div>

      {viewings && viewings.length > 0 ? (
        <div className="space-y-4">
          {viewings.map((viewing) => (
            <Card key={viewing.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{viewing.properties?.title_fr}</CardTitle>
                      <Badge variant={statusColors[viewing.status as keyof typeof statusColors]}>
                        {viewing.status}
                      </Badge>
                    </div>
                    {viewing.properties?.address && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{viewing.properties.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(viewing.scheduled_date).toLocaleString("fr-FR", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  {viewing.profiles && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{viewing.profiles.full_name}</span>
                        {viewing.profiles.phone && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <a href={`tel:${viewing.profiles.phone}`} className="hover:underline">
                              {viewing.profiles.phone}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {viewing.notes && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm">{viewing.notes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Aucune visite programmée</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
