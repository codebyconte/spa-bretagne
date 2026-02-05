import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <Droplets className="h-16 w-16 text-primary mb-6" />
      <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
        Page non trouvée
      </h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/">
        <Button size="lg">Retour à l&apos;accueil</Button>
      </Link>
    </div>
  );
}
