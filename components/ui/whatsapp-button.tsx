"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsappButtonProps {
  phoneNumber: string
  message?: string
  className?: string
  children: React.ReactNode
}

export function WhatsappButton({
  phoneNumber,
  message,
  className,
  children,
}: WhatsappButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <Button asChild className={className}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        {children}
      </a>
    </Button>
  )
}
