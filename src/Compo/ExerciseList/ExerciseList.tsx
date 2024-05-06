import Exersice from "@/components/Exercise/Exercise";
import { Exercise } from "@/types";
import { deleteExercise } from "@/app/server/deleteExercise";

type ExerciceListProps = {
  query: string;
};

export default async function ExerciseList({ query }: ExerciceListProps) {
  const res = await fetch("http://localhost:8000/exercise?query=" + query);
  const exercises: Exercise[] = await res.json();

  return (
    <div className="flex flex-col gap-8 w-full justify-center items-center">
      {exercises.map((exercise) => (
        <Exersice key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
