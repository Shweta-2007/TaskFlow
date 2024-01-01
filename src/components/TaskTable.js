import React from "react";

const TaskTable = ({ tasks, handleEditTask, handleDeleteTask }) => {
  return (
    <div className=" md:overflow-x-hidden overflow-x-auto">
      <table className="m-4 md:mt-20 mt-10 p-4 text-center w-full border-collapse border border-white">
        <thead>
          <tr className=" border border-b-white">
            <th className="p-2 border-r border-white text-xl">No</th>
            <th className="p-2 border-r border-white text-xl">Title</th>
            <th className="p-2 border-r border-white text-xl">Description</th>
            <th className="p-2 border-r border-white text-xl">Due Date</th>
            <th className="p-2 border-r border-white text-xl">Task Priority</th>
            <th className="p-2 border-r border-white text-xl">Task Status</th>
            <th className="p-2 border-r border-white text-xl">Modify</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} className="border-b border-white">
              <td className="p-2 border-r border-white">{index + 1}</td>
              <td className="p-2 border-r border-white">{task.title}</td>
              <td className="p-2 border-r border-white">{task.description}</td>
              <td className="p-2 border-r border-white">{task.dueDate}</td>
              <td className={`p-2 border-r border-white`}>
                <span
                  className={`
      ${task.priority === "High" ? "bg-orange-700 px-4 py-0.5 rounded-md" : ""}
      ${task.priority === "Medium" ? "bg-blue-600 px-4 rounded-md py-0.5 " : ""}
      ${task.priority === "Low" ? "bg-green-600 px-4 rounded-md py-0.5 " : ""}
    `}
                >
                  {task.priority}
                </span>
              </td>

              <td className="p-2 border-r border-white">
                <span
                  className={`
              ${
                task.status === "Pending"
                  ? "bg-red-600 px-4 rounded-md py-0.5"
                  : " "
              }
              ${
                task.status === "Inprogress"
                  ? "bg-yellow-600 px-4 py-0.5 rounded-md "
                  : ""
              }
              ${
                task.status === "Completed"
                  ? "bg-green-600 px-4 py-0.5 rounded-md "
                  : ""
              }
              `}
                >
                  {task.status}
                </span>
              </td>
              <td className="p-2 flex justify-center items-center py-1 md:mt-0 mt-3">
                <button
                  onClick={() => handleEditTask(task)}
                  className="bg-green-800 text-white px-4 mr-3 rounded-md py-0.5"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task)}
                  className="bg-green-800 text-white px-4 py-0.5 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
