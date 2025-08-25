import { CardComponent } from "@/components/CardComponent";
import { TaskInfo } from "@/components/TaskInfo";

export function TaskView() {
  return (
    <>
      <CardComponent>
        <h2 className="text-xl font-bold text-center ">Detalles de la tarea</h2>
        <TaskInfo />
      </CardComponent>
    </>
  );
}
