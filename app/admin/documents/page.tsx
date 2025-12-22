import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, Upload } from "lucide-react"
import Link from "next/link"

export default async function AdminDocumentsPage() {
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

  const { data: documents } = await supabase
    .from("documents")
    .select("*, properties(title_fr), leads(full_name), profiles!documents_user_id_fkey(full_name)")
    .order("created_at", { ascending: false })

  const documentTypeLabels = {
    contract: "Contrat",
    payment_plan: "Plan de paiement",
    id_card: "Carte d'identité",
    income_proof: "Justificatif de revenu",
    other: "Autre",
  } as const

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Documents</h1>
          <p className="text-muted-foreground">Gérez tous les documents et fichiers</p>
        </div>
        <Button asChild>
          <Link href="/admin/documents/upload">
            <Upload className="h-4 w-4 mr-2" />
            Télécharger un document
          </Link>
        </Button>
      </div>

      {documents && documents.length > 0 ? (
        <div className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{doc.file_name}</CardTitle>
                      <Badge variant="outline">
                        {documentTypeLabels[doc.document_type as keyof typeof documentTypeLabels]}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      {doc.properties && <span>Propriété: {doc.properties.title_fr}</span>}
                      {doc.leads && (
                        <>
                          <span>•</span>
                          <span>Client: {doc.leads.full_name}</span>
                        </>
                      )}
                      {doc.profiles && (
                        <>
                          <span>•</span>
                          <span>Utilisateur: {doc.profiles.full_name}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{new Date(doc.created_at).toLocaleDateString("fr-FR")}</p>
                    {doc.file_size && <p>{(doc.file_size / 1024).toFixed(2)} KB</p>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Voir
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Télécharger
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-4">Aucun document pour le moment</p>
            <Button asChild>
              <Link href="/admin/documents/upload">
                <Upload className="h-4 w-4 mr-2" />
                Télécharger votre premier document
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
