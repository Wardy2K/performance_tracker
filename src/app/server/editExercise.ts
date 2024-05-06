"use server";

import { revalidatePath } from "next/cache";

export async function editExercise(id: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  await fetch("http://localhost:8000/exercise/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weight: parseInt(data.weight as string),
      reps: parseInt(data.reps as string),
      series: parseInt(data.series as string),
      name: data.name,
    }),
  });
  revalidatePath("/");
}
