import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Star,
  Phone,
  Mail,
  Globe,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSpaBySlug, spas } from "@/lib/spas-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return spas.map((spa) => ({
    slug: spa.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spa = getSpaBySlug(slug);

  if (!spa) {
    return {
      title: "Spa non trouvé - Spas Bretagne",
    };
  }

  return {
    title: `${spa.name} - ${spa.location} | Spas Bretagne`,
    description: spa.description,
    alternates: {
      canonical: `/spas/${slug}`,
    },
  };
}

export default async function SpaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spa = getSpaBySlug(slug);

  if (!spa) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src={spa.image || "/placeholder.svg"}
            alt={spa.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/spas"
                className="inline-flex items-center text-gray-400 hover:text-gray-500 mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2 " />
                Retour aux spas
              </Link>
              {spa.featured && (
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Coup de coeur
                </Badge>
              )}
              <h1 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-3">
                {spa.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{spa.location}</span>
                </div>
                <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-accent fill-accent mr-1" />
                  <span className="font-medium text-foreground">
                    {spa.rating}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    ({spa.reviewCount} avis)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    À propos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {spa.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="prose prose-neutral max-w-none">
                    {spa.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Treatments */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    Soins proposés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {spa.treatments.map((treatment) => (
                      <div key={treatment} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    Équipements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {spa.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              {spa.gallery.length > 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Galerie photos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {spa.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${spa.name} - Photo ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Adresse
                    </p>
                    <p className="text-foreground">{spa.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href={`tel:${spa.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {spa.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href={`mailto:${spa.email}`}
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {spa.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-green-700" />
                    <a
                      href={`https://${spa.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {spa.website}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Department Link */}
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Explorer le département
                  </p>
                  <Link href={`/departements/${spa.department}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent hover:cursor-pointer"
                    >
                      Voir tous les spas du {spa.departmentName}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
