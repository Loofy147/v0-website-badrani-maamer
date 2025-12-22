"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  displayText?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  className?: string
  showIcon?: boolean
}

export function WhatsAppButton({
  phoneNumber,
  message = "",
  displayText,
  size = "default",
  variant = "default",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  // Remove any + or 00 prefix and ensure it starts with country code
  const cleanNumber = phoneNumber.replace(/[\s+]/g, "").replace(/^00/, "")

  // Build WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  // Format display number
  const formattedNumber = displayText || phoneNumber

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(
        "bg-green-600 hover:bg-green-700 text-white",
        variant === "outline" && "border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
        className
      )}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {showIcon && <MessageCircle className="h-4 w-4" />}
        {formattedNumber}
      </a>
    </Button>
  )
}

// Floating WhatsApp Button (for persistent access)
export function FloatingWhatsAppButton({
  phoneNumber,
  message = "مرحباً، أريد الاستفسار عن العقارات",
}: {
  phoneNumber: string
  message?: string
}) {
  const cleanNumber = phoneNumber.replace(/[\s+]/g, "").replace(/^00/, "")
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-200 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}

// Multiple WhatsApp Numbers Component
export function WhatsAppContactGroup({
  contacts,
  title,
  subtitle,
}: {
  contacts: Array<{ number: string; display: string; label?: string }>
  title?: string
  subtitle?: string
}) {
  return (
    <div className="space-y-4">
      {title && (
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <div className="flex flex-wrap gap-3 justify-center">
        {contacts.map((contact) => (
          <div key={contact.number} className="flex flex-col items-center gap-1">
            {contact.label && (
              <span className="text-xs text-muted-foreground">{contact.label}</span>
            )}
            <WhatsAppButton
              phoneNumber={contact.number}
              displayText={contact.display}
              size="lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
