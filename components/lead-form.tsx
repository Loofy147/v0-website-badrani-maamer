"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useLanguage } from "@/lib/language-context"
import { createClient } from "@/lib/supabase/client"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2 } from "lucide-react"
import type { Lead } from "@/lib/types"

interface LeadFormProps {
  propertyId?: string
  leadType?: Lead["lead_type"]
}

// Zod Schema for validation with specific messages
const leadFormSchema = z.object({
  full_name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^(?:\+213|0)(?:5|6|7)\d{8}$/, { message: "Please enter a valid Algerian phone number (e.g., 05/06/07... or +213...)." }),
  preferred_contact: z.enum(["phone", "email", "whatsapp"]),
  message: z.string().optional(),
})

export function LeadForm({ propertyId, leadType = "general" }: LeadFormProps) {
  const { t, language } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      preferred_contact: "phone",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof leadFormSchema>) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const leadData: Partial<Lead> = {
        ...values,
        lead_type: leadType,
        property_id: propertyId,
        user_id: user?.id,
        source: "website",
      }

      const { error: insertError } = await supabase.from("leads").insert([leadData])

      if (insertError) throw insertError

      setSuccess(true)
      form.reset() // Reset form on success

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.name")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.email")}</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.phone")}</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+213" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferred_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === "ar" ? "طريقة الاتصال المفضلة" : "Méthode de contact préférée"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="phone">{language === "ar" ? "هاتف" : "Téléphone"}</SelectItem>
                      <SelectItem value="email">{language === "ar" ? "بريد إلكتروني" : "Email"}</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.message")}</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
        </Form>
      </CardContent>
    </Card>
  )
}