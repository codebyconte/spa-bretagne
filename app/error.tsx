"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
        Une erreur s&apos;est produite
      </h2>
      <p className="text-muted-foreground text-center max-w-md mb-6">
        Nous n&apos;avons pas pu charger cette page. Vous pouvez réessayer.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Réessayer
      </button>
    </div>
  );
}
