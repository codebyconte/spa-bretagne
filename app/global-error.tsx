"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Une erreur critique s&apos;est produite
          </h2>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Le site a rencontré un problème. Vous pouvez réessayer.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
