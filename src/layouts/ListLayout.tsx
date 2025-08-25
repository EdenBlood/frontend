import { CardComponent } from "@/components/CardComponent";
import { TasksList } from "@/components/TasksList";
import { Outlet } from "react-router-dom";

export function ListLayout() {
  return (
    <>
      <CardComponent>
        <h2 className="text-xl font-bold text-center">Lista de tareas</h2>

        <TasksList />
      </CardComponent>
      <Outlet />
    </>
  );
}
