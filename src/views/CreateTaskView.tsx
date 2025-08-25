import { CardComponent } from "@/components/CardComponent";
import { TaskForm } from "@/components/TaskForm";
import type { TaskFormData } from "../types";
import { useState } from "react";
import { useCreateTask } from "@/hooks/useCreateTask";

export function CreateTaskView() {
  const initialValues: TaskFormData = {
    title: "",
    description: "",
    status: "notStarted",
    _id: "",
  };
  const [taskForm, setTaskForm] = useState<TaskFormData>(initialValues);

  const { mutate: taskMutate, isPending: taskIsPending } = useCreateTask();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskForm.title.trim() === "" || taskForm.description.trim() === "") {
      //Crear el error.
      return;
    }

    taskMutate({ task: taskForm });
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

  return (
    <>
      <CardComponent>
        <form onSubmit={handleSubmit} noValidate className="space-y-2">
          <TaskForm
            handleChange={handleChange}
            taskForm={taskForm}
            isPending={taskIsPending}
            inputValue={["Guardando...", "Guardar Tarea"]}
          />
        </form>
      </CardComponent>
    </>
  );
}
