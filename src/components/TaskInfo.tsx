import { useParams } from "react-router-dom";
// import { tasks } from "@/mocks/index";
import { useEffect, useState } from "react";
import type { TaskDraft } from "../types";

export function TaskInfo() {
  const params = useParams();
  const taskId = params.taskId!;

  const [task, setTask] = useState<TaskDraft | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTask(tasks.find((task) => task.id === taskId)!);
  //   setIsLoading(false);
  // }, [taskId]);

  if (!taskId) return null;
  if (isLoading) return <div>Cargando...</div>;
  return (
    <div>
      <h3 className="text-4xl font-black">{task?.title}</h3>
      <p>{task?.description}</p>
      <p>Estado: {task?.status}</p>
      <p>Fecha de creación: 01/01/2025</p>
    </div>
  );
}
