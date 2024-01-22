import { useState } from "react";

export default function Task({ task, onDeleteTask, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);

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
              onChangeTask({
                ...task,
                done: e.target.checked,
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
              onChangeTask({ ...task, text: e.target.value });
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
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
