export const api = {
  addTask: async (task) => {
    const newTask = { ...task, id: Date.now() };
    return newTask;
  },

  deleteTask: async (taskId) => {
    return { id: taskId };
  },

  updateTask: async (updatedTask) => {
    return updatedTask;
  },

  fetchTasks: async () => {
    return [];
  },
};
