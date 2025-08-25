import TaskService from "@/services/TaskService";
import { useQuery } from "@tanstack/react-query";

export function useGetAllTask() {
  const {
    data: tasks,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useQuery({
    queryFn: TaskService.getAllTask,
    queryKey: ["tasks"],
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { tasks, tasksLoading, tasksError };
}
