import { useTasks } from "../contexts/TaskContexts";
import Task from "./Task";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
