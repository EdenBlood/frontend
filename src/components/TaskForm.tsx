import { taskStatuses } from "@/utils/status";
import type { TaskFormData } from "../types";

type TaskFormProps = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  taskForm: TaskFormData;
  isPending: boolean;
  inputValue: string[];
};

export function TaskForm({
  handleChange,
  taskForm,
  isPending,
  inputValue,
}: TaskFormProps) {
  return (
    <>
      <div className="flex items-center">
        <input
          className="w-full text-4xl font-bold outline-none border-none focus:outline-none"
          name="title"
          id="title"
          type="text"
          placeholder="Titulo de la tarea, ej: Lavar la ropa..."
          onChange={handleChange}
          value={taskForm.title}
        />
      </div>
      <div>
        <textarea
          className="w-full min-h-26 border-none outline-none focus:outline-none resize-none "
          name="description"
          id="description"
          placeholder="Descripción de la Tarea..."
          cols={4}
          onChange={handleChange}
          value={taskForm.description}
        ></textarea>
      </div>
      <div>
        <label className="font-bold" htmlFor="status">
          Estado:{" "}
        </label>
        <select
          defaultValue={taskStatuses[0].value}
          name="status"
          id="status"
          className="bg-black"
          onChange={handleChange}
          value={taskForm.status}
        >
          {taskStatuses.map((status) => (
            <option key={status.id} value={status.value}>
              {status.name}
            </option>
          ))}
        </select>
      </div>

      <input
        className="px-2 py-2 uppercase bg-green-200 not-disabled:hover:bg-green-400 text-black font-bold w-full rounded-xl not-disabled:cursor-pointer disabled:cursor-not-allowed mt-4 text-lg"
        type="submit"
        value={isPending ? inputValue[0] : inputValue[1]}
        disabled={isPending}
      />
    </>
  );
}
