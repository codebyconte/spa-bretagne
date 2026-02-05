import Link from "next/link"
import { SpaCard } from "@/components/spa-card"
import { Button } from "@/components/ui/button"
import { spas } from "@/lib/spas-data"

export function SpasSection() {
  const displayedSpas = spas.slice(0, 6)
  
  return (
    <section id="spas" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
            Notre Sélection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Les Plus Beaux Spas de Bretagne
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Une sélection rigoureuse des meilleurs établissements de bien-être, 
            testés et approuvés pour leur qualité de service exceptionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSpas.map((spa) => (
            <SpaCard key={spa.id} spa={spa} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/spas">
            <Button size="lg" variant="outline">
              Voir tous les spas ({spas.length})
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
