"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Building2, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Promotion Badrani</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="hover:text-primary transition-colors">
                  {t("nav.properties")}
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-primary transition-colors">
                  {t("nav.financing")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("nav.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+213 25 43 21 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@badrani.dz</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Blida, {language === "fr" ? "Algérie" : "الجزائر"}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.followUs")}</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Promotion Badrani Maamar. {t("footer.rights")}.</p>
        </div>
      </div>
    </footer>
  )
}
