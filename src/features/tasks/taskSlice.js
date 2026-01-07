import { createSlice } from "@reduxjs/toolkit";
import { getTasks, saveTasks } from "../../api/taskApi";

const initialState = {
  list: getTasks(),
  filter: "all",
  search: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.list.push(action.payload);
      saveTasks(state.list);
    },
    deleteTask(state, action) {
      state.list = state.list.filter(t => t.id !== action.payload);
      saveTasks(state.list);
    },
    toggleStatus(state, action) {
      const task = state.list.find(t => t.id === action.payload);
      task.status = task.status === "Pending" ? "Completed" : "Pending";
      saveTasks(state.list);
    },
    editTask(state, action) {
      const { id, title } = action.payload;
      const task = state.list.find(t => t.id === id);
      task.title = title;
      saveTasks(state.list);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleStatus,
  editTask,
  setFilter,
  setSearch,
} = taskSlice.actions;

export default taskSlice.reducer;
