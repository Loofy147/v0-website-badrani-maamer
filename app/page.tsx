import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Landmark,
  CheckCircle2,
  MessageCircle,
  Phone,
  MapPin
} from "lucide-react"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "available")
    .eq("featured", true)
    .limit(6)

  const whatsappNumbers = [
    { number: "213770621824", display: "0770 62 18 24" },
    { number: "213550032741", display: "0550 03 27 41" },
    { number: "213550029750", display: "0550 02 97 50" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block mb-2 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-medium text-primary">مؤسسة الترقية العقارية بدراني معمر</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              21 مسكن ترقوي للبيع بالروينة
              <br />
              <span className="text-primary">مع إمكانية القرض البنكي المباشر</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              شقق F3 و F4 بتشطيبات عصرية • تمويل بنكي مضمون • مكتب مبيعات في الموقع
            </p>

            {/* WhatsApp Quick Contact */}
            <div className="flex flex-wrap gap-3">
              {whatsappNumbers.map((contact) => (
                <Button
                  key={contact.number}
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <a
                    href={`https://wa.me/${contact.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {contact.display}
                  </a>
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2" data-va-track="true" data-va-track-name="Hero CTA Click - Discover Properties">
                <Link href="/properties">
                  Découvrir Nos Biens
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-va-track="true" data-va-track-name="Hero CTA Click - Bank Financing">
                <Link href="/financing">
                  <Landmark className="h-4 w-4 mr-2" />
                  Financement Bancaire
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <a href="tel:+213275031331" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                027 50 31 31
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="tel:+213275030030" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                📠 Fax: 027 50 30 30
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Bank Financing Section - NEW! */}
      <section className="py-16 bg-gradient-to-br from-green-500/10 via-primary/5 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-500/10 rounded-full">
                <Landmark className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-700">إمكانية القرض البنكي المضمون</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                نتعامل مباشرة مع البنوك لتسهيل حصولك على القرض
              </h2>
              <p className="text-lg text-muted-foreground">
                نرافقك في جميع الإجراءات البنكية من الألف إلى الياء
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-green-500/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <Landmark className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-xl">تعامل مباشر مع البنوك</h3>
                  <p className="text-muted-foreground text-sm">
                    نعمل مع جميع البنوك الجزائرية لضمان أفضل شروط التمويل
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">مرافقة كاملة</h3>
                  <p className="text-muted-foreground text-sm">
                    نساعدك في تحضير الملف وإتمام جميع الإجراءات البنكية
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl">تمويل مرن</h3>
                  <p className="text-muted-foreground text-sm">
                    خيارات تمويل متعددة: كلاسيكي، إسلامي، أو دفع مباشر على 40 شهر
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🏦 البنوك الشريكة: BNA • CPA • Al Baraka • Al Salam • CNEP
                </h3>
                <p className="mb-6 opacity-90">
                  نضمن لك الحصول على أفضل شروط التمويل من خلال شراكتنا المباشرة مع البنوك
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/financing">
                    <Landmark className="h-5 w-5 mr-2" />
                    احسب التمويل الخاص بك
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">العقارات المميزة</h2>
            <p className="text-muted-foreground text-lg">21 مسكن ترقوي بالروينة - شقق F3 و F4</p>
          </div>

          {properties && properties.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/properties">Voir Toutes les Propriétés</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune propriété disponible pour le moment</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا مؤسسة بدراني معمر</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">مشروع حقيقي</h3>
              <p className="text-muted-foreground text-sm">21 مسكن ترقوي في الروينة قيد الإنجاز</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <Landmark className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl">تمويل بنكي مباشر</h3>
              <p className="text-muted-foreground text-sm">نعمل مباشرة مع البنوك لتسهيل القرض</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">مكتب في الموقع</h3>
              <p className="text-muted-foreground text-sm">زر المشروع وتفقد الشقق في أي وقت</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">8K+ متابع</h3>
              <p className="text-muted-foreground text-sm">مجتمع نشط على الفيسبوك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rouina Project Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-sm font-medium text-primary">مشروع 21 مسكن ترقوي</p>
              </div>
              <h2 className="text-3xl font-bold mb-4">مشروعنا في الروينة</h2>
              <p className="text-muted-foreground mb-6">
                اكتشف مشروعنا المكون من 21 مسكن ترقوي في بلدية الروينة، ولاية عين الدفلى. شقق F3 و F4
                بتشطيبات عصرية في حي سكني هادئ.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>مكتب مبيعات في الموقع مفتوح كل يوم</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>زيارات ممكنة بدون موعد مسبق</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>تمويل بنكي مباشر أو دفع مقسط على 40 شهر</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>التسليم خلال 6 أشهر</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span className="font-medium">الموقع: مقابل عيادة متعددة الخدمات - الروينة</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/properties?location=rouina">شاهد شقق الروينة</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    <MapPin className="h-4 w-4 mr-2" />
                    زر مكتبنا في الموقع
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Projet Rouina"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز لبدء رحلتك العقارية؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            تواصل معنا اليوم ودع خبراءنا يرشدونك نحو العقار المثالي مع تمويل بنكي مضمون
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">اتصل بنا الآن</Link>
            </Button>
            {whatsappNumbers.slice(0, 1).map((contact) => (
              <Button
                key={contact.number}
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white border-2 border-white"
              >
                <a
                  href={`https://wa.me/${contact.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساب: {contact.display}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
