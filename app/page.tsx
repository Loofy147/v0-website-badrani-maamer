import { createClient } from "@/lib/supabase/server"
import { HeroSection } from "@/components/home/hero-section"
import { DirectBankFinancing } from "@/components/home/direct-bank-financing"
import { FeaturedPropertiesSection } from "@/components/home/featured-properties-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { RouinaProjectSection } from "@/components/home/rouina-project-section"
import { CtaSection } from "@/components/home/cta-section"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "available")
    .eq("featured", true)
    .limit(6)

  return (
    <div className="flex flex-col">
      <HeroSection />
      <DirectBankFinancing />
      <FeaturedPropertiesSection properties={properties || []} />
      <WhyChooseUsSection />
      <RouinaProjectSection />
      <CtaSection />
    </div>
  )
}
