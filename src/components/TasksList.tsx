import { NavLink } from "react-router-dom";
import { tasksColorStatus } from "@/colors/tasks";
import { useGetAllTask } from "@/hooks/useGetAllTask";

export function TasksList() {
  const { tasks, tasksError, tasksLoading } = useGetAllTask();

  if (tasksLoading) return <div>Cargando...</div>;
  if (tasksError) throw new Error("Error al cargar las tareas");
  return (
    <nav>
      <ul className="space-y-2">
        {tasks?.map((task) => (
          <li key={task._id}>
            <NavLink
              to={`/tasks/${task._id}`}
              className={({ isActive }) =>
                `block text-black font-semibold px-4 py-1 rounded-xl transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? `${tasksColorStatus[task.status].active}`
                    : `${tasksColorStatus[task.status].noActive}`
                }`
              }
            >
              {task.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
