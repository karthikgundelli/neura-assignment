import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../features/tasks/taskSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
      
      {/* Filter buttons */}
      <div className="flex gap-2">
        {["all", "Pending", "Completed"].map(f => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className="border px-3 py-2 rounded text-sm"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        placeholder="Search tasks..."
        className="border p-2 rounded w-full sm:w-64 dark:bg-gray-800"
        onChange={e => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}
