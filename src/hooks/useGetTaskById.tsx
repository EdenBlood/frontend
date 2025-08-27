import TaskService from "@/services/TaskService";
import { useQuery } from "@tanstack/react-query";

export function useGetTaskById({ taskId }: { taskId: string }) {
  const {
    data: taskData,
    isLoading: taskLoading,
    isError: taskError,
  } = useQuery({
    queryFn: () => TaskService.getTaskById({ taskId }),
    queryKey: ["task", taskId],
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { taskData, taskLoading, taskError };
}
