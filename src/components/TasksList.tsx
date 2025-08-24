import { NavLink } from "react-router-dom";
import { tasksColorStatus } from "@/colors/tasks";
import { tasks } from "@/mocks/index";

export function TasksList() {
  return (
    <nav>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <NavLink
              to={`/tasks/${task.id}`}
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
