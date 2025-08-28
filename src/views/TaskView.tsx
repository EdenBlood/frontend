import { CardComponent } from "@/components/CardComponent";
import { TaskActions } from "@/components/TaskActions";
import { TaskDashBoard } from "@/components/TaskDashBoard";
import { TaskInfo } from "@/components/TaskInfo";
import { useParams } from "react-router-dom";

export function TaskView() {
  const params = useParams();
  const taskId: string | undefined = params.taskId;

  return (
    <>
      <CardComponent>
        {taskId ? (
          <>
            <h2 className="text-xl font-bold text-center ">
              Detalles de la tarea
            </h2>
            <TaskInfo taskId={taskId} />
            <TaskActions taskId={taskId} />
          </>
        ) : (
          <TaskDashBoard />
        )}
      </CardComponent>
    </>
  );
}
