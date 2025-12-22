"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Building2, Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  const whatsappNumber = "213770621824"

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
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063585837831"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
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
                <Link href="/services" className="hover:text-primary transition-colors">
                  {t("nav.services")}
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
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+213275031331" className="hover:text-primary">027 50 31 31</a>
                  <a href="tel:+213770621824" className="hover:text-primary">0770 62 18 24</a>
                  <a href="tel:+213550032741" className="hover:text-primary">0550 03 27 41</a>
                  <a href="tel:+213550029750" className="hover:text-primary">0550 02 97 50</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:[email protected]" className="hover:text-primary">
                  contact@badrani.dz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Hay Mohamed Nadjem, Ain Defla</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {language === "ar" ? "مكتب المبيعات" : "Bureau de Vente"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Projet Rouina</p>
                  <p className="text-muted-foreground">
                    {language === "ar" ? "مقابل عيادة متعددة الخدمات" : "En face de la polyclinique"}
                  </p>
                  <p className="text-muted-foreground">Commune de Rouina, Wilaya de Aïn Defla</p>
                  <p className="text-xs text-primary mt-1">
                    {language === "ar" ? "مفتوح كل يوم" : "Ouvert tous les jours"}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Promotion Badrani Maamar. {t("footer.rights")}.</p>
            <p className="text-xs">
              {language === "ar"
                ? "🏦 نتعامل مباشرة مع البنوك لتسهيل القرض"
                : "🏦 Financement bancaire direct garanti"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
