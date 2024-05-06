import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { revalidatePath } from "next/cache";

export default function CreateExerciseModal() {
  async function addExercise(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);
    await fetch("http://localhost:8000/exercise", {
      method: "POST",
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add an exercise</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={addExercise}>
          <DialogHeader>
            <DialogTitle>Add an exercise</DialogTitle>
            <DialogDescription>
              Add an exercise to your performance tracker.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weight" className="text-right">
                Weight
              </Label>
              <Input id="weight" name="weight" className="col-span-3" />
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
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add the exercise</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
