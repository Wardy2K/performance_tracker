"use server";

import { revalidatePath } from "next/cache";

export async function deleteExercise(id: string) {
  const deletedExercise = await fetch(`http://localhost:8000/exercise/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/");
  return deletedExercise;
}
