import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { departments, getSpasByDepartment } from "@/lib/spas-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title:
    "Spas par Département - Finistère, Morbihan, Côtes-d'Armor, Ille-et-Vilaine",
  description:
    "Explorez les spas et centres de bien-être par département breton. Découvrez les meilleures adresses du Finistère, Morbihan, Côtes-d'Armor et Ille-et-Vilaine.",
  alternates: {
    canonical: "/departements",
  },
};

export default function DepartementsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">
              Spas par Département
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              La Bretagne se compose de quatre départements, chacun avec ses
              paysages uniques et ses centres de bien-être d&apos;exception.
            </p>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept) => {
                const spaCount = getSpasByDepartment(dept.id).length;
                return (
                  <Link key={dept.id} href={`/departements/${dept.id}`}>
                    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative h-72 overflow-hidden">
                        <Image
                          src={dept.image || "/placeholder.svg"}
                          alt={dept.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {dept.name}
                          </h2>
                          <div className="flex items-center text-muted-foreground text-sm mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>
                              {spaCount} spa{spaCount > 1 ? "s" : ""} référencé
                              {spaCount > 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {dept.description}
                        </p>
                        <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                          <span>Découvrir les spas</span>
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              La Bretagne, terre de bien-être
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Des côtes sauvages du Finistère aux forêts légendaires
              d&apos;Ille-et-Vilaine, en passant par les îles du Morbihan et la
              Côte de Granit Rose des Côtes-d&apos;Armor, la Bretagne offre un
              cadre naturel exceptionnel pour se ressourcer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Les spas bretons tirent parti de ces richesses naturelles : eau de
              mer, algues, plantes sauvages et minéraux locaux composent des
              soins uniques, profondément ancrés dans le terroir.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
