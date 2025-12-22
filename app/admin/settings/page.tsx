import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default async function AdminSettingsPage() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Paramètres</h1>
          <p className="text-muted-foreground">Gérez les paramètres de votre plateforme</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informations de l'entreprise</CardTitle>
            <CardDescription>Informations affichées sur le site</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company_name">Nom de l'entreprise</Label>
              <Input id="company_name" defaultValue="Promotion Badrani Maamar" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="contact@badrani.dz" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" type="tel" defaultValue="+213 25 43 21 00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Textarea id="address" defaultValue="Boulevard Larbi Tebessi, Blida, Algérie 09000" />
            </div>
            <Button>Sauvegarder</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Gérez vos préférences de notification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Nouvelles demandes</Label>
                <p className="text-sm text-muted-foreground">Recevoir une notification pour chaque nouvelle demande</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Visites programmées</Label>
                <p className="text-sm text-muted-foreground">Recevoir un rappel 24h avant chaque visite</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Nouveaux documents</Label>
                <p className="text-sm text-muted-foreground">Notification lors de l'upload de documents</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <Button>Sauvegarder les préférences</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profil administrateur</CardTitle>
            <CardDescription>Informations de votre compte</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin_name">Nom complet</Label>
              <Input id="admin_name" defaultValue={profile.full_name || ""} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin_email">Email</Label>
              <Input id="admin_email" type="email" defaultValue={profile.email} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin_phone">Téléphone</Label>
              <Input id="admin_phone" type="tel" defaultValue={profile.phone || ""} />
            </div>
            <Button>Mettre à jour</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
