import TaskService from "@/services/TaskService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTask({ taskId }: { taskId: string }) {
  const queryClient = useQueryClient();

  const {
    mutate: taskDeleteMutate,
    isPending: taskDeleteIsPending,
    isError: taskDeleteIsError,
  } = useMutation({
    mutationFn: TaskService.deleteTask,
    onSuccess: (msg) => {
      //* toastify
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: ({ message }) => {
      //* toastify
    },
  });

  return { taskDeleteMutate, taskDeleteIsPending, taskDeleteIsError };
}
