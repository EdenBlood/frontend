const statusTypes = {
  COMPLETED: "completed",
  IN_PROGRESS: "inProgress",
  NOT_STARTED: "notStarted",
} as const;

export type StatusTypes = (typeof statusTypes)[keyof typeof statusTypes];

export type Task = {
  id: string;
  title: string;
  description: string;
  status: StatusTypes;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type TaskList = Task[];

export type TaskDraft = Pick<Task, "title" | "description" | "status" | "id">;
