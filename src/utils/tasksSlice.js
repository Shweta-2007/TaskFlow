import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },

    updateTask: (state, action) => {
      const { id, title, description, dueDate, priority, status } =
        action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        state[taskIndex] = {
          id,
          title,
          description,
          dueDate,
          priority,
          status,
        };
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
