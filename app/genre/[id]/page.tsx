import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: String;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);
  return (
    <div>
      {/* Azure OPENAI service Suggestion */}
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-5xl font-bold px-10">Results for {genre}</h1>
      </div>
      <MoviesCarousel title={`Genre`} movies={movies} isVertical />
    </div>
  );
}

export default GenrePage;
