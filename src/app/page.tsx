import ExerciseList from "@/Compo/ExerciseList/ExerciseList";
import SearchBar from "@/Compo/SearchBar/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <div className="flex flex-col gap-8 w-1/2 justify-center items-center">
      <SearchBar />
      <ExerciseList query={query} />
    </div>
  );
}
