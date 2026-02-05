import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Spas Bretagne.",
  robots: "index, follow",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-3xl font-medium text-foreground mb-8">
            Mentions légales
          </h1>
          <div className="prose prose-neutral text-muted-foreground space-y-4">
            <p>
              Ce site est édité par Spas Bretagne. Pour toute question
              concernant les mentions légales, contactez-nous à{" "}
              <a
                href="mailto:contact@codebyconte.fr"
                className="text-primary hover:underline"
              >
                contact@codebyconte.fr
              </a>
              .
            </p>
            <p>
              <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave
              #4133, Covina, CA 91723, États-Unis.
            </p>
            <p>
              Les informations présentées sur ce site le sont à titre indicatif.
              Spas Bretagne s’efforce de maintenir les contenus à jour mais ne
              peut garantir l’exactitude permanente des données des
              établissements.
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
