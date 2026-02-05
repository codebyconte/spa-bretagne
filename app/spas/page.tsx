import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock, Euro } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { spas, departments } from "@/lib/spas-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Tous les Spas de Bretagne - Annuaire complet | Spas Bretagne",
  description:
    "Découvrez tous les spas et centres de bien-être en Bretagne. Filtrez par département, type de soins et tarifs.",
  alternates: {
    canonical: "/spas",
  },
};

export default function SpasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">
              Tous les Spas de Bretagne
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explorez notre sélection complète des meilleurs établissements de
              bien-être à travers les quatre départements bretons.
            </p>
          </div>
        </section>

        {/* Departments Quick Links */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl font-medium text-foreground mb-6 text-center">
              Filtrer par département
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((dept) => (
                <Link key={dept.id} href={`/departements/${dept.id}`}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={dept.image || "/placeholder.svg"}
                        alt={dept.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {dept.name}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Spas Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  {spas.length}
                </span>{" "}
                spas trouvés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spas.map((spa) => (
                <Link key={spa.id} href={`/spas/${spa.slug}`}>
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={spa.image || "/placeholder.svg"}
                        alt={spa.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {spa.featured && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          Coup de coeur
                        </Badge>
                      )}
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        <span className="text-sm font-medium text-foreground">
                          {spa.rating}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {spa.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {spa.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {spa.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {spa.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{spa.hours}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Euro className="h-4 w-4" />
                          <span>{spa.priceRange}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
