import { useState } from "react";
import { useTasksDispatch } from "../contexts/TaskContexts";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  return (
    <li>
      <div className="w-full flex gap-x-4 items-center">
        <label htmlFor={task.id} className="cursor-pointer flex gap-2">
          <input
            type="checkbox"
            id={task.id}
            className="cursor-pointer"
            checked={task.done ? true : false}
            onChange={(e) => {
              dispatch({
                type: "changed",
                task: {
                  ...task,
                  done: e.target.checked,
                },
              });
            }}
          />
          {!isEditing && task.text}
        </label>

        {isEditing && (
          <input
            className="p-2 text-slate-900"
            value={task.text}
            onChange={(e) => {
              dispatch({
                type: "changed",
                task: {
                  ...task,
                  text: e.target.value,
                },
              });
            }}
          />
        )}
        <button
          className="py-1 px-3 bg-green-600"
          onClick={() => setIsEditing((ie) => !ie)}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="py-1 px-3 bg-red-600"
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
