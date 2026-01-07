import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask({
      id: Date.now(),
      title,
      status: "Pending",
    }));

    setTitle("");
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-col sm:flex-row gap-2"
    >
      <input
        className="border p-3 rounded w-full dark:bg-gray-800"
        placeholder="Add a new task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-5 py-3 rounded w-full sm:w-auto">
        Add Task
      </button>
    </form>
  );
}
