"use client";

export default function MovieDetailsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 text-red-600">
      <h2 className="font-semibold text-lg mb-2">Could not load this movie.</h2>
      <p className="mb-4">{error.message}</p>

      <button
        onClick={reset}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
