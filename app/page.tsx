import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SpasSection } from "@/components/spas-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spas Bretagne - Les Meilleurs Spas de Bretagne",
  description:
    "Découvrez les meilleurs spas et centres de bien-être en Bretagne. Thalassothérapie, massages, soins du corps et moments de détente face à la mer.",
  robots: "index, follow",
  alternates: { canonical: "/" },
};

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
  );
}
