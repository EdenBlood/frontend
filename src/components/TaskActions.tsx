import { useDeleteTask } from "@/hooks/useDeleteTask";
import { Link } from "react-router-dom";

interface TaskActionsProps {
  taskId: string;
}

export function TaskActions({ taskId }: TaskActionsProps) {
  const { taskDeleteMutate, taskDeleteIsPending } = useDeleteTask({ taskId });

  const handleDelete = () => {
    taskDeleteMutate({ taskId });
  };

  return (
    <div className=" flex justify-between gap-4 top-6 right-6 ">
      <Link
        className="bg-indigo-400 hover:bg-indigo-500 py-1 px-2 rounded-xl transition-colors duration-300"
        to={`edit`}
      >
        Editar
      </Link>
      <button
        onClick={handleDelete}
        disabled={taskDeleteIsPending}
        className="bg-red-400 not-disabled:hover:bg-red-500 py-1 px-2 rounded-xl transition-colors disabled:cursor-not-allowed disabled:opacity-75 duration-300"
      >
        {taskDeleteIsPending ? "Eliminando..." : "Eliminar"}
      </button>
    </div>
  );
}
