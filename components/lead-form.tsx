"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import { createClient } from "@/lib/supabase/client"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2 } from "lucide-react"
import type { Lead } from "@/lib/types"

interface LeadFormProps {
  propertyId?: string
  leadType?: Lead["lead_type"]
}

export function LeadForm({ propertyId, leadType = "general" }: LeadFormProps) {
  const { t, language } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    preferred_contact: "phone" as Lead["preferred_contact"],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const leadData: Partial<Lead> = {
        ...formData,
        lead_type: leadType,
        property_id: propertyId,
        user_id: user?.id,
        source: "website",
      }

      const { error: insertError } = await supabase.from("leads").insert([leadData])

      if (insertError) throw insertError

      setSuccess(true)
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        message: "",
        preferred_contact: "phone",
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("contact.title")}</CardTitle>
        <CardDescription>
          {language === "ar"
            ? "املأ النموذج وسنتواصل معك في أقرب وقت"
            : "Remplissez le formulaire et nous vous contacterons rapidement"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">{t("contact.name")}</Label>
            <Input
              id="full_name"
              required
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t("contact.email")}</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t("contact.phone")}</Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+213"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferred_contact">
              {language === "ar" ? "طريقة الاتصال المفضلة" : "Méthode de contact préférée"}
            </Label>
            <Select
              value={formData.preferred_contact}
              onValueChange={(value) =>
                setFormData({ ...formData, preferred_contact: value as Lead["preferred_contact"] })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phone">{language === "ar" ? "هاتف" : "Téléphone"}</SelectItem>
                <SelectItem value="email">{language === "ar" ? "بريد إلكتروني" : "Email"}</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.message")}</Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>{t("contact.success")}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {language === "ar" ? "جاري الإرسال..." : "Envoi en cours..."}
              </>
            ) : (
              t("contact.submit")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
