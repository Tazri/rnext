import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/TaskContexts";
import { getNextId } from "../utils/utils";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        placeholder="Add Task"
        className="p-2 text-slate-900"
        value={text}
        onChange={handleChangeText}
      />
      <button
        className="py-2 bg-amber-800"
        onClick={() => {
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
