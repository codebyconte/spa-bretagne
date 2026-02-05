import Link from "next/link";
import { Droplets, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-semibold">
                Spas Bretagne
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Votre guide de référence pour découvrir les meilleurs spas et
              centres de bien-être en Bretagne.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#spas"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Nos Spas
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/spas"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Tous les spas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Départements</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/departements/finistere"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Finistère
                </Link>
              </li>
              <li>
                <Link
                  href="/departements/morbihan"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Morbihan
                </Link>
              </li>
              <li>
                <Link
                  href="/departements/cotes-d-armor"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Côtes-d&apos;Armor
                </Link>
              </li>
              <li>
                <Link
                  href="/departements/ille-et-vilaine"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Ille-et-Vilaine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/70" />
                <a
                  href="mailto:contact@spasbretagne.fr"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  contact@spasbretagne.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-background/70" />
                <a
                  href="tel:+33299000000"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  02 99 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Spas Bretagne. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-background/50 hover:text-background transition-colors text-sm"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-background/50 hover:text-background transition-colors text-sm"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
