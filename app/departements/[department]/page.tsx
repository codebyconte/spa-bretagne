import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Star, Clock, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  getSpasByDepartment,
  getDepartmentById,
  departments,
} from "@/lib/spas-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return departments.map((department) => ({
    department: department.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department } = await params;
  const dept = getDepartmentById(department);

  if (!dept) {
    return {
      title: "Département non trouvé - Spas Bretagne",
    };
  }

  return {
    title: `Spas en ${dept.name} - Les meilleurs spas | Spas Bretagne`,
    description: dept.description,
    alternates: {
      canonical: `/departements/${department.toLowerCase()}`,
    },
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department } = await params;
  const dept = getDepartmentById(department);
  const spasList = getSpasByDepartment(department);

  if (!dept) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src={dept.image || "/placeholder.svg"}
            alt={dept.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/#spas"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l&apos;accueil
              </Link>
              <h1 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-3">
                Spas en {dept.name}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {dept.description}
              </p>
            </div>
          </div>
        </div>

        {/* Spas Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {spasList.length}
              </span>{" "}
              spa{spasList.length > 1 ? "s" : ""} trouvé
              {spasList.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spasList.map((spa) => (
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
                        {spa.city}
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

          {spasList.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun spa trouvé dans ce département.
              </p>
              <Link href="/">
                <Button className="mt-4">Retour à l&apos;accueil</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Other Departments */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8 text-center">
              Explorer les autres départements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {departments
                .filter((d) => d.id !== department)
                .map((d) => (
                  <Link key={d.id} href={`/departements/${d.id}`}>
                    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={d.image || "/placeholder.svg"}
                          alt={d.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {d.name}
                          </h3>
                        </div>
                      </div>
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
