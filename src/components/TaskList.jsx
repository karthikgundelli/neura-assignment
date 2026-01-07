import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { list, filter, search } = useSelector(state => state.tasks);

  const filtered = list.filter(task => {
    const matchFilter =
      filter === "all" || task.status === filter;
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No tasks found
      </p>
    );
  }

  return (
    <div className="grid gap-3 mt-4">
      {filtered.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
