interface TaskStatusState {
  id: number;
  name: string;
  value: string;
}

export const taskStatuses: TaskStatusState[] = [
  {
    id: 1,
    name: "Pendiente",
    value: "notStarted",
  },
  {
    id: 2,
    name: "En Progreso",
    value: "inProgress",
  },
  {
    id: 3,
    name: "Completado",
    value: "completed",
  },
];
