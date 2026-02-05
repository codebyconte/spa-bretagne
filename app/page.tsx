import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SpasSection } from "@/components/spas-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SpasSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
