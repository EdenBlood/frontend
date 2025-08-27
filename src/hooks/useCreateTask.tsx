import TaskService from "@/services/TaskService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreateTask() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: TaskService.createTask,
    onSuccess: (data) => {
      //mostrar el toast
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      if (!data?.task) {
        // Mostrar toast error
        navigate(`/tasks`);
      }
      navigate(`/tasks/${data?.task._id}`);
    },
    onError: ({ message }: { message: string }) => {
      //mostrar el toast
      console.log(message);
    },
  });

  return { mutate, isPending };
}
