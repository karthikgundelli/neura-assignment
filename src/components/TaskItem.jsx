import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleStatus, editTask } from "../features/tasks/taskSlice";

export default function TaskItem({ task }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.title);
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col gap-3">

      {/* Title */}
      {edit ? (
        <input
          className="border p-2 rounded dark:bg-gray-700"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      ) : (
        <h3
          className={`text-base font-medium ${
            task.status === "Completed" ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        {edit ? (
          <button
            onClick={() => {
              dispatch(editTask({ id: task.id, title: text }));
              setEdit(false);
            }}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="border px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(toggleStatus(task.id))}
          className={`px-3 py-1 rounded text-white ${
            task.status === "Completed"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {task.status}
        </button>

        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
