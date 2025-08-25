import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./layouts/DashBoard";
import { TaskView } from "./views/TaskView";
import { ListLayout } from "./layouts/ListLayout";
import { CreateTaskView } from "./views/CreateTaskView";

export const router = createBrowserRouter([
  {
    path: "/tasks",
    element: <DashBoard />,
    children: [
      {
        element: <ListLayout />,
        children: [
          {
            index: true,
            element: <TaskView />,
          },
          {
            path: ":taskId",
            element: <TaskView />,
          },
          {
            path: "create-task",
            element: <CreateTaskView />,
          },
          {
            path: ":taskId/edit",
            element: <TaskView />,
          },
        ],
      },
    ],
  },
]);
