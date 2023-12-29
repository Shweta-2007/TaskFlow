import React from "react";

const TaskTable = ({ tasks, handleEditTask, handleDeleteTask }) => {
  return (
    <table className="m-4 mt-20 p-4 text-center w-full border-collapse border border-white">
      <thead>
        <tr className=" border border-b-white">
          <th className="p-2 border-r border-white text-xl">No</th>
          <th className="p-2 border-r border-white text-xl">Title</th>
          <th className="p-2 border-r border-white text-xl">Description</th>
          <th className="p-2 border-r border-white text-xl">Due Date</th>
          <th className="p-2 border-r border-white text-xl">Task Priority</th>
          <th className="p-2 border-r border-white text-xl">Task Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id} className="border-b border-white">
            <td className="p-2 border-r border-white">{index + 1}</td>
            <td className="p-2 border-r border-white">{task.title}</td>
            <td className="p-2 border-r border-white">{task.description}</td>
            <td className="p-2 border-r border-white">{task.dueDate}</td>
            <td className="p-2 border-r border-white">{task.priority}</td>
            <td className="p-2 border-r border-white">{task.status}</td>
            <td className="p-2">
              <button
                onClick={() => handleEditTask(task)}
                className="bg-green-800 text-white px-4 mr-3 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task)}
                className="bg-green-800 text-white px-4 rounded-md"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
