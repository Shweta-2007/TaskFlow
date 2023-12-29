import React, { useState } from "react";
import { addTask, deleteTask, updateTask } from "../utils/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";

const Body = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [number, setNumber] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.tasks);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      status,
      number,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
    setStatus("");
    setNumber("");
  };

  const handleDeleteTask = (task) => {
    setTaskToDelete(true);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      dispatch(deleteTask(taskToDelete));
      setTaskToDelete("");
      setShowDeleteModal(false);
    }
  };

  const handleExitDelete = () => {
    setTaskToDelete("");
    setShowDeleteModal(false);
  };

  const handleEditTask = (task) => {
    const updatedTitle = prompt("Enter updated title", task.title);
    if (updatedTitle !== null) {
      const updatedTask = { ...task, title: updatedTitle };
      dispatch(updateTask(updatedTask));
    }
  };

  return (
    <div className="m-4 p-4 text-white bg-black h-screen">
      <h1 className="text-center font-bold text-3xl m-2 p-2  border-b-white mb-5">
        TaskFlow
      </h1>
      <div className="flex justify-center items-center">
        <div>
          <label className="block mb-2 text-xl" htmlFor="number">
            No.
          </label>
          <input
            className=" text-xl text-black mr-6 p-2 w-16 "
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-xl" htmlFor="title">
            Title
          </label>
          <input
            className=" text-xl text-black mr-6 p-2 "
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-xl" htmlFor="description">
            Description
          </label>
          <input
            className=" text-xl text-black mr-6 p-2"
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-xl" htmlFor="dueDate">
            Due Date
          </label>
          <input
            className=" text-black mr-6 p-2"
            type="date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="priority" className="block mb-2 text-xl">
            Task Priority
          </label>
          <select
            id="priority"
            className="bg-white text-black font-bold mr-6 p-1 px-4"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Select</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block mb-2 text-xl">
            Task Status
          </label>
          <select
            id="status"
            className="bg-white text-black font-bold p-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Select</option>
            <option>Pending</option>
            <option>Inprogress</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          className=" bg-white text-black rounded-lg p-2 px-4 ml-4 -mb-7 "
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      {tasks.length > 0 && (
        <table className="m-4 p-4 text-center w-full border-collapse border border-white">
          <thead>
            <tr className=" border border-b-white">
              <th className="p-2 border-r border-white">No</th>
              <th className="p-2 border-r border-white">Title</th>
              <th className="p-2 border-r border-white">Description</th>
              <th className="p-2 border-r border-white">Due Date</th>
              <th className="p-2 border-r border-white">Task Priority</th>
              <th className="p-2 border-r border-white">Task Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b border-white">
                <td className="p-2 border-r border-white">{index + 1}</td>
                <td className="p-2 border-r border-white">{task.title}</td>
                <td className="p-2 border-r border-white">
                  {task.description}
                </td>
                <td className="p-2 border-r border-white">{task.dueDate}</td>
                <td className="p-2 border-r border-white">{task.priority}</td>
                <td className="p-2 border-r border-white">{task.status}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleEditTask(task)}
                    className="bg-white text-black px-4 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="bg-white text-black px-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <DeleteModal
        show={showDeleteModal}
        task={taskToDelete}
        onConfirm={handleConfirmDelete}
        onExit={handleExitDelete}
      />
    </div>
  );
};

export default Body;
