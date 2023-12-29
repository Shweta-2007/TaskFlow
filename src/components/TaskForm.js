import React from "react";

const TaskForm = ({
  title,
  setTitle,
  description,
  setDescription,
  dueDate,
  setDueDate,
  priority,
  setPriority,
  status,
  setStatus,
  number,
  setNumber,
  handleAddTask,
}) => {
  return (
    <div className="flex justify-center items-center mt-10">
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
        className=" bg-green-800 text-white rounded-lg p-2 px-4 ml-4 -mb-7 "
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
