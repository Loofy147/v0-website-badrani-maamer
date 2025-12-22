export type Language = "ar" | "fr"

export interface Property {
  id: string
  title_fr: string
  title_ar: string
  description_fr: string
  description_ar: string
  property_type: "apartment" | "commercial" | "villa" | "office"
  status: "available" | "reserved" | "sold"
  price: number
  surface_area: number
  bedrooms?: number
  bathrooms?: number
  floor_number?: number
  building_name?: string
  address: string
  city: string
  wilaya: string
  latitude?: number
  longitude?: number
  featured: boolean
  images: string[]
  amenities: string[]
  video_url?: string
  virtual_tour_url?: string
  created_at: string
  updated_at: string
}

export interface FinancingOption {
  id: string
  name_fr: string
  name_ar: string
  description_fr?: string
  description_ar?: string
  down_payment_percentage: number
  interest_rate: number
  duration_months: number
  is_islamic: boolean
  bank_partner?: string
  active: boolean
  created_at: string
}

export interface Lead {
  id?: string
  user_id?: string
  full_name: string
  email: string
  phone: string
  property_id?: string
  lead_type: "viewing" | "financing" | "callback" | "general"
  message?: string
  preferred_contact?: "email" | "phone" | "whatsapp"
  status?: string
  source?: string
}
