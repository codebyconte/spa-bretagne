import { Waves, Leaf, Heart, Sparkles } from "lucide-react"

const services = [
  {
    icon: Waves,
    title: "Thalassothérapie",
    description: "Profitez des bienfaits de l'eau de mer et des produits marins. Bains hydromassants, jets et douches à affusion pour une détente totale.",
  },
  {
    icon: Leaf,
    title: "Soins Naturels",
    description: "Des soins à base de produits 100% naturels et locaux. Algues bretonnes, huiles essentielles et cosmétiques biologiques.",
  },
  {
    icon: Heart,
    title: "Massages",
    description: "Massages relaxants, tonifiants ou thérapeutiques. Nos praticiens experts vous offrent des moments de pure détente.",
  },
  {
    icon: Sparkles,
    title: "Rituels Bien-être",
    description: "Des rituels exclusifs inspirés des traditions bretonnes et du monde entier. Hammam, sauna et parcours sensoriels.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
            Nos Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Une Expérience Complète
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez la diversité des soins proposés par nos spas partenaires. 
            Chaque établissement vous offre une expérience unique et personnalisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
