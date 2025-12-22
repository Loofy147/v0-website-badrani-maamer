import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const rouinaImages = [
    {
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      title: "Vue extérieure du projet Rouina",
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Façade des appartements",
    },
    {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      title: "Salon spacieux avec finitions modernes",
    },
    {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      title: "Cuisine équipée",
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      title: "Chambre principale",
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      title: "Salle de bain moderne",
    },
  ]

  const commercialImages = [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      title: "Local commercial sur RN4",
    },
    {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      title: "Intérieur spacieux",
    },
    {
      url: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
      title: "Grande surface commerciale",
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      title: "Espace de vente moderne",
    },
  ]

  const conferenceImages = [
    {
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      title: "Salle de conférences BAB AL-EMAAR",
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      title: "Configuration en théâtre",
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      title: "Espace de réunion moderne",
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      title: "Équipement audiovisuel",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Galerie Photos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos projets et réalisations en images
          </p>
        </div>

        <Tabs defaultValue="rouina" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rouina">Projet Rouina</TabsTrigger>
            <TabsTrigger value="commercial">Locaux Commerciaux</TabsTrigger>
            <TabsTrigger value="conference">BAB AL-EMAAR</TabsTrigger>
          </TabsList>

          <TabsContent value="rouina" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rouinaImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conference" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferenceImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
