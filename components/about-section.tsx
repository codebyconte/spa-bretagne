import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Sélection rigoureuse des établissements",
  "Visites et tests réguliers",
  "Avis vérifiés et authentiques",
  "Réservation facilitée",
  "Service client disponible",
  "Partenariats exclusifs",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/spa-2.jpg"
                alt="Intérieur spa en Bretagne"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-serif font-bold">50+</div>
              <div className="text-sm opacity-90">Spas référencés</div>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              À Propos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6 text-balance">
              Votre Guide du Bien-être en Bretagne
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Depuis 2018, nous parcourons la Bretagne à la recherche des plus beaux 
              établissements de bien-être. Notre mission : vous faire découvrir des 
              lieux d&apos;exception où la qualité des soins rencontre la beauté des paysages bretons.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Chaque spa de notre sélection est visité, testé et validé par notre équipe 
              d&apos;experts. Nous évaluons la qualité des soins, l&apos;accueil, les infrastructures 
              et l&apos;ambiance générale pour vous garantir une expérience inoubliable.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
