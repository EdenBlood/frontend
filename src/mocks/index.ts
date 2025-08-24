import type { TaskDraft } from "../types";

export const tasks: TaskDraft[] = [
  {
    id: "1",
    title: "Example Task 1",
    description: "This is the first example task.",
    status: "completed",
  },
  {
    id: "2",
    title: "Example Task 2",
    description: "This is the second example task.",
    status: "inProgress",
  },
  {
    id: "3",
    title: "Example Task 3",
    description: "This is the third example task.",
    status: "notStarted",
  },
];
