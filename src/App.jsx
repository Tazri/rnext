import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import ListItem from "./ListItem";
import UlList from "./UlList";
import { data } from "./data";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(data);
  const ulRef = useRef(null);

  function handleAdd() {
    const newTask = {
      id: crypto.randomUUID(),
      text: value,
    };
    setValue("");

    // flush sync
    flushSync(() => {
      setTasks((tasks) => {
        return [...tasks, newTask];
      });
    });

    ulRef.current.showLastChild();
  }

  return (
    <>
      <div className="p-4 m-4 w-1/2 bg-slate-500 text-white text-center flex flex-col items-center gap-y-4 h-[500px] mx-auto">
        <h2 className="text-4xl">Task</h2>

        <div className="bg-slate-900 p-5 flex gap-x-4 flex-wrap">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the task"
            className="p-2 text-lg text-slate-900 focus:outline-none focus:outline-slate-400 focus:outline-4"
          />
          <button onClick={handleAdd} className="py-2 px-4 bg-green-800">
            Add
          </button>
        </div>

        <UlList
          className="bg-teal-800 p-4 flex-grow w-1/2 overflow-auto"
          ref={ulRef}
        >
          {tasks.map((task) => {
            return <ListItem key={task.id}>{task.text}</ListItem>;
          })}
        </UlList>
      </div>
    </>
  );
}
