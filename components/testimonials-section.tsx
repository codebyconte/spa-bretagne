import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Marie Dupont",
    location: "Rennes",
    text: "Une expérience incroyable à Quiberon ! Le spa était magnifique et les soins d'une qualité exceptionnelle. Je recommande vivement.",
    rating: 5,
    spa: "Thalasso Quiberon",
  },
  {
    name: "Jean-Pierre Martin",
    location: "Nantes",
    text: "Grâce à Spas Bretagne, j'ai découvert un petit bijou à Dinard. L'équipe est aux petits soins et le cadre est sublime.",
    rating: 5,
    spa: "L'Instant Zen",
  },
  {
    name: "Sophie Leroux",
    location: "Paris",
    text: "Un week-end de détente parfait à Perros-Guirec. Les soins aux produits locaux sont exceptionnels et la vue sur la Côte de Granit Rose est à couper le souffle.",
    rating: 5,
    spa: "Spa Marin de Perros",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
            Témoignages
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Ce Qu&apos;en Disent Nos Visiteurs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Des centaines de visiteurs ont trouvé leur spa idéal grâce à notre guide. 
            Découvrez leurs expériences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.spa}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
