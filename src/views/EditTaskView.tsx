import { CardComponent } from "@/components/CardComponent";
import { TaskForm } from "@/components/TaskForm";
import { Navigate, useParams } from "react-router-dom";
import type { TaskFormData } from "../types";
import { useGetTaskById } from "@/hooks/useGetTaskById";
import { useEffect, useState } from "react";
import { useEditTask } from "@/hooks/useEditTask";

export function EditTaskView() {
  const params = useParams();
  const taskId: string = params.taskId!;

  const { taskData, taskLoading, taskError } = useGetTaskById({ taskId });

  useEffect(() => {}, [taskData, taskLoading]);
  const initialValues: TaskFormData = {
    title: taskData!.title!,
    description: taskData!.description!,
    status: taskData!.status!,
    _id: taskData!._id!,
  };
  const [taskForm, setTaskForm] = useState<TaskFormData>(initialValues);

  const { taskEditMutate, taskEditIsPending } = useEditTask();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskForm.title.trim() === "" || taskForm.description.trim() === "") {
      //Crear el error.
      return;
    }

    taskEditMutate({ task: taskForm, taskId });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTaskForm((prevTaskForm) => ({
      ...prevTaskForm,
      [e.target.name]: e.target.value,
    }));
  };

  if (taskLoading || taskEditIsPending) return <div>Cargando...</div>;
  if (taskError) return <Navigate to={"/tasks"} />;
  return (
    <>
      <CardComponent>
        <form onSubmit={handleSubmit} noValidate className="space-y-2">
          <TaskForm
            handleChange={handleChange}
            taskForm={taskForm}
            isPending={taskEditIsPending}
            inputValue={["Guardando...", "Guardar Tarea"]}
          />
        </form>
      </CardComponent>
    </>
  );
}
