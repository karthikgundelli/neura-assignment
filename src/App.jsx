import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-bold">
            Task Dashboard
          </h1>
          <ThemeToggle />
        </div>

        <AddTask />
        <Filters />
        <TaskList />

      </div>
    </div>
  );
}
