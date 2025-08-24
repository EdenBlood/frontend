import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./layouts/DashBoard";
import { TaskView } from "./views/TaskView";

export const router = createBrowserRouter([
  {
    path: "/tasks",
    element: <DashBoard />,
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
        path: ":taskId/edit",
        element: <TaskView />,
      },
    ],
  },
]);
