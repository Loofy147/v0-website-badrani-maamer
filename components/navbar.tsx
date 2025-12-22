"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { NotificationBell } from "./notification-bell"
import { Button } from "./ui/button"
import { Building2, Menu, User } from "lucide-react"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

export function Navbar() {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">Promotion Badrani</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/properties" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.properties")}
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.gallery")}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/financing" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.financing")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            {user && <NotificationBell />}
            {user ? (
              <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
                <Link href="/dashboard">
                  <User className="h-4 w-4 mr-2" />
                  {t("nav.dashboard")}
                </Link>
              </Button>
            ) : (
              <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
                <Link href="/auth/login">{t("nav.login")}</Link>
              </Button>
            )}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/properties"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.properties")}
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.gallery")}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/financing"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.financing")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            {user ? (
              <Button asChild variant="default" size="sm" className="w-full">
                <Link href="/dashboard">{t("nav.dashboard")}</Link>
              </Button>
            ) : (
              <Button asChild variant="default" size="sm" className="w-full">
                <Link href="/auth/login">{t("nav.login")}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
