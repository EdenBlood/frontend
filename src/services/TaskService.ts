import api from "@/libs/api";
import { isAxiosError } from "axios";
import {
  apiTaskFullResponseSchema,
  apiTaskListResponseSchema,
  type TaskFormData,
} from "../types";

export default {
  createTask: async ({ task }: { task: TaskFormData }) => {
    const url = "/tasks";

    try {
      const { data } = await api.post(url, task);

      const response = apiTaskFullResponseSchema.safeParse(data);
      if (response.success) return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      }
    }
  },

  getAllTask: async () => {
    const url = "/tasks";

    try {
      const { data } = await api.get(url);
      const response = apiTaskListResponseSchema.safeParse(data);
      if (response.success) return response.data.tasks;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      }
    }
  },

  getTaskById: async ({ taskId }: { taskId: string }) => {
    const url = `/tasks/${taskId}`;

    try {
      const { data } = await api.get(url);

      const response = apiTaskFullResponseSchema.safeParse(data);
      if (response.success) return response.data.task;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      }
    }
  },

  updateTask: async ({
    taskId,
    task,
  }: {
    taskId: string;
    task: TaskFormData;
  }) => {
    const url = `/tasks/${taskId}`;
    try {
      const { data } = await api.put(url, task);

      const response = apiTaskFullResponseSchema.safeParse(data);
      if (response.success) return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      }
    }
  },
};
