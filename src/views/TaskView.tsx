import { TaskInfo } from "@/components/TaskInfo";
import { TasksList } from "@/components/TasksList";

export function TaskView() {
  return (
    <>
      <div className="w-1/2 bg-black rounded-xl p-5 flex flex-col gap-4 shadow-xl h-full">
        <h2 className="text-xl font-bold text-center">Lista de tareas</h2>
        <TasksList />
      </div>
      <div className="w-1/2 bg-black rounded-xl p-5 flex flex-col gap-4 shadow-xl h-full">
        <h2 className="text-xl font-bold text-center ">Detalles de la tarea</h2>
        <TaskInfo />
      </div>
    </>
  );
}
