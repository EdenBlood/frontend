import type { TaskDraft } from "../types";

export const tasks: TaskDraft[] = [
  {
    id: "1",
    title: "Limpiar la pieza",
    description: "Limpiar mi pieza y ordenar la ropa.",
    status: "notStarted",
  },
  {
    id: "2",
    title: "Leer",
    description: "Empezar a leer y remarcar las partes de hábitos atómicos.",
    status: "notStarted",
  },
  {
    id: "3",
    title: "buscar libros",
    description: "Buscar libros para leer y para el canal de Youtube.",
    status: "notStarted",
  },
  {
    id: "4",
    title: "Example Task 4",
    description: "This is the fourth example task.",
    status: "inProgress",
  },
  {
    id: "5",
    title: "Example Task 5",
    description: "This is the fifth example task.",
    status: "completed",
  },
];
