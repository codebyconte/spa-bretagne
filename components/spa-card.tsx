import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Clock, Euro } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Spa } from "@/lib/spas-data"

interface SpaCardProps {
  spa: Spa
}

export function SpaCard({ spa }: SpaCardProps) {
  return (
    <Link href={`/spas/${spa.slug}`}>
      <Card className={`overflow-hidden group hover:shadow-xl transition-all duration-300 h-full ${spa.featured ? 'ring-2 ring-primary' : ''}`}>
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
            <span className="text-sm font-medium text-foreground">{spa.rating}</span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {spa.name}
              </h3>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {spa.location}
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{spa.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {spa.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
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
  )
}
