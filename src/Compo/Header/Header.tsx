import Link from "next/link";
import CreateExerciseModal from "../CreateExerciseModal/CreateExerciseModal";

export default function Header() {
  return (
    <header className="w-full h-16 flex justify-center items-center gap-28 mb-20">
      <Link href={"/"} className="text-xl font-bold">
        Exercises
      </Link>
      <Link href={"/dashboard"} className="text-xl font-bold">
        Performance Tracker
      </Link>

      <CreateExerciseModal />
    </header>
  );
}
