import { CardComponent } from "@/components/CardComponent";
import { TaskDashBoard } from "@/components/TaskDashBoard";
import { TaskInfo } from "@/components/TaskInfo";
import { Link, useParams } from "react-router-dom";

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
            <div className="absolute top-6 right-6 bg-indigo-400 hover:bg-indigo-500 py-1 px-2 rounded-xl transition-colors duration-300">
              <Link to={`edit`}>Editar</Link>
            </div>
          </>
        ) : (
          <TaskDashBoard />
        )}
      </CardComponent>
    </>
  );
}
