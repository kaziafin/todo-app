import Image from "next/image";
import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className=" bg-orange-100 flex min-h-screen flex-col items-center justify-between p-24 text-3xl">
      <h1>Todo List</h1>
      <AddTask/>
    </main>
  );
}
