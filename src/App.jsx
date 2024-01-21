import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import initialTask from "./data/task.js";

export default function App() {
  const [tasks, setTasks] = useState(initialTask);

  const getNextId = (data) => {
    let maxId = data.reduce(
      (prevId, current) => (prevId > current.id ? prevId : current.id),
      data.length ? data[0].id : 0
    );
    return maxId + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...task,
          text: task.text,
        };
      } else {
        return t;
      }
    });

    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="m-4 w-1/2 min-w-72 mx-auto flex flex-col gap-4">
      <h1 className="text-center text-4xl">Prague itinerary</h1>

      <AddTask onAdd={handleAddTask} />

      <h2 className="text-3xl border-b-2 mt-2">Tasks : </h2>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
