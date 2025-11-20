import Link from "next/link";

type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
};

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
    const { id } = await params; 
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to load movie details");
  }

  const movie: MovieDetails = await res.json();

    return (
    <div className="max-w-4xl mx-auto py-6">

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Image */}
            <div className="md:w-1/3">
                <img
                src={
                    movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.png"
                }
                alt={movie.title}
                className="w-full rounded-lg shadow"
                />
            </div>

            {/* Text Content */}
            <div className="md:w-2/3">
                <h1 className="text-3xl font-semibold mb-4">{movie.title}</h1>
                <p className="text-gray-700 mb-4">{movie.overview}</p>
                <p className="text-gray-600 text-sm">Release Date: {movie.release_date}</p>
                <p className="mt-4">
                    <Link href="/movies" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Back to Movies
                    </Link>
                </p>
            </div>
        </div>
    </div>
    );   
}
