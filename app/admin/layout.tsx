import type React from "react"
import { Building2, Home, FileText, Calendar, Settings, LayoutDashboard, File } from "lucide-react"
import Link from "next/link"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/30 p-6">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Admin Panel</span>
          </div>

          <nav className="space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <LayoutDashboard className="h-4 w-4" />
              Tableau de Bord
            </Link>
            <Link
              href="/admin/properties"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <Home className="h-4 w-4" />
              Propriétés
            </Link>
            <Link
              href="/admin/leads"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <FileText className="h-4 w-4" />
              Demandes
            </Link>
            <Link
              href="/admin/viewings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Visites
            </Link>
            <Link
              href="/admin/documents"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <File className="h-4 w-4" />
              Documents
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <Settings className="h-4 w-4" />
              Paramètres
            </Link>
          </nav>

          <div className="pt-6 border-t">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              Retour au site
            </Link>
          </div>
        </div>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  )
}
