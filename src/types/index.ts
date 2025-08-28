import z from "zod";

export const statusTypes = {
  COMPLETED: "completed",
  IN_PROGRESS: "inProgress",
  NOT_STARTED: "notStarted",
} as const;

export type StatusTypes = (typeof statusTypes)[keyof typeof statusTypes];

export const taskDraftSchema = z.object({
  _id: z.string(),
  title: z.string().min(2).max(100),
  description: z.string().min(2),
  status: z.enum([
    statusTypes.COMPLETED,
    statusTypes.IN_PROGRESS,
    statusTypes.NOT_STARTED,
  ]),
  date: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskDraftSchema>;
export type TaskList = Task[];
export type TaskDraft = Pick<Task, "title" | "description" | "status" | "_id">;

export type TaskFormData = Pick<
  Task,
  "title" | "description" | "status" | "_id"
>;

//*  Api response
export const apiMsgResponseSchema = z.object({
  msg: z.string(),
});

export const apiTaskFullResponseSchema = z.object({
  msg: z.string(),
  task: taskDraftSchema,
});

export const apiTaskListResponseSchema = z.object({
  msg: z.string(),
  tasks: z.array(taskDraftSchema),
});

export type ApiTaskFullResponse = z.infer<typeof apiTaskFullResponseSchema>;
export type ApiTaskListResponse = z.infer<typeof apiTaskListResponseSchema>;
