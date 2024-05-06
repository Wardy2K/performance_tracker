"use client";

import { Exercise } from "@/types";
import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { deleteExercise } from "@/app/server/deleteExercise";
import EditExerciseModal from "../EditExerciseModal/EditExerciseModal";

export default function Exersice({ exercise }: { exercise: Exercise }) {
  const handleDelete = deleteExercise.bind(null, exercise.id);

  return (
    <div className="flex gap-3 items-center">
      <div className="font-bold border rounded flex items-center justify-center p-2">
        {exercise.name}
      </div>
      <div className="p-2 rounded cursor-pointer">
        <EditExerciseModal exercise={exercise} />
      </div>
      <form action={handleDelete}>
        <Button className="border p-2 rounded cursor-pointer" type="submit">
          <Trash />
        </Button>
      </form>
    </div>
  );
}
