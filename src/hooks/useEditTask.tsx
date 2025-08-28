import TaskService from "@/services/TaskService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useEditTask() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: taskEditMutate, isPending: taskEditIsPending } = useMutation({
    mutationFn: TaskService.updateTask,
    onSuccess: (data) => {
      //* toastify data.msg
      //* queryclient actualizar con data.task
      queryClient.invalidateQueries({ queryKey: ["task", data?.task._id] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      navigate(`/tasks/${data?.task._id}`);
    },
  });

  return { taskEditIsPending, taskEditMutate };
}
