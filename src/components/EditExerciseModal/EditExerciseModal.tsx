import { Exercise } from "@/types";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { revalidatePath } from "next/cache";
import { editExercise } from "@/app/server/editExercise";
import { Pencil } from "lucide-react";

export default function EditExerciseModal({
  exercise,
}: {
  exercise: Exercise;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={editExercise.bind(null, exercise.id)}>
          <DialogHeader>
            <DialogTitle>Start editing</DialogTitle>
            <DialogDescription>Edit {exercise.name}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue={exercise.name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weight" className="text-right">
                Weight
              </Label>
              <Input
                id="weight"
                name="weight"
                className="col-span-3"
                defaultValue={exercise.weight}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="series" className="text-right">
                Number of series
              </Label>
              <Input
                id="series"
                type="number"
                name="series"
                className="col-span-3"
                defaultValue={exercise.series}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Number of reps
              </Label>
              <Input
                id="username"
                name="reps"
                type="number"
                defaultValue={exercise.reps}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
