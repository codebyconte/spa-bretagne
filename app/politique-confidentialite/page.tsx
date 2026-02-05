import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données du site Spas Bretagne.",
  robots: "index, follow",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-3xl font-medium text-foreground mb-8">
            Politique de confidentialité
          </h1>
          <div className="prose prose-neutral text-muted-foreground space-y-4">
            <p>
              Spas Bretagne respecte votre vie privée. Cette page décrit la
              manière dont nous traitons les données collectées sur ce site.
            </p>
            <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-2">
              Données collectées
            </h2>
            <p>
              Nous pouvons collecter des données de navigation (cookies, pages
              vues) pour mesurer l’audience et améliorer le site. Si vous nous
              contactez par formulaire ou e-mail, nous conservons les
              informations nécessaires pour vous répondre.
            </p>
            <h2 className="font-serif text-xl font-medium text-foreground mt-8 mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification et de suppression de vos données. Contact :{" "}
              <a
                href="mailto:contact@spasbretagne.fr"
                className="text-primary hover:underline"
              >
                contact@spasbretagne.fr
              </a>
              .
            </p>
          </div>
          <Link
            href="/"
            className="inline-block mt-8 text-primary font-medium hover:underline"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
