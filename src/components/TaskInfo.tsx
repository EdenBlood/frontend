import { Navigate } from "react-router-dom";
import { useGetTaskById } from "@/hooks/useGetTaskById";
import { tasksColorStatusText } from "@/colors/tasks";

interface TaskInfoProps {
  taskId: string;
}

export function TaskInfo({ taskId }: TaskInfoProps) {
  const { taskData, taskError, taskLoading } = useGetTaskById({ taskId });

  if (taskLoading) return <div>Cargando...</div>;
  if (taskError) return <Navigate to={"/tasks"} />;
  return (
    <div className="space-y-4">
      <h3 className="text-4xl font-black">{taskData?.title}</h3>

      <p>{taskData?.description}</p>

      <div>
        <p className="font-bold">
          Estado:{" "}
          <span
            className={tasksColorStatusText[taskData!.status!] + " font-normal"}
          >
            {taskData?.status}
          </span>
        </p>

        <p className="font-bold">
          Fecha de creación:{" "}
          <span className="font-normal">{taskData?.createdAt}</span>
        </p>

        <p className="font-bold">
          Ultima edición:{" "}
          <span className="font-normal">{taskData?.updatedAt}</span>
        </p>
      </div>
    </div>
  );
}
