import TaskService from "@/services/TaskService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreateTask() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: TaskService.createTask,
    onSuccess: (data) => {
      //mostrar el toast

      if (!data?.task) {
        // Mostrar toast error
        navigate(`/tasks`);
      }
      navigate(`/tasks/${data?.task.id}`);
    },
    onError: ({ message }: { message: string }) => {
      //mostrar el toast
      console.log(message);
    },
  });

  return { mutate, isPending };
}
