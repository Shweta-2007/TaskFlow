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
    <div className="flex  justify-center  flex-col   md:flex-col lg:flex-row lg:flex-wrap  xl:flex-row items-center  md:mt-10 mt-2 overflow-hidden ">
      <div>
        <label
          className="block mb-2 md:text-xl text-base lg:-mt-3 "
          htmlFor="number"
        >
          Sl.No.
        </label>
        <input
          className={`text-xl text-black mr-6 p-2 md:w-16 w-12 h-8 md:h-auto lg:mr-10 `}
          type="number"
          min={0}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2  md:text-xl text-base " htmlFor="title">
          Title
        </label>
        <input
          className=" md:text-xl text-lg text-black mr-6 p-2  md:w-auto  w-full h-8 md:h-auto mb-2 lg:mr-10 "
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label
          className="block mb-2 md:text-xl text-base"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className=" md:text-xl text-lg text-black mr-6 p-2 md:w-auto  w-full h-8 md:h-auto mb-2 lg:mr-10 "
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 md:text-xl text-base" htmlFor="dueDate">
          Due Date
        </label>
        <input
          className=" text-black mr-6 p-2 md:w-auto  w-full h-8 md:h-auto mb-2 lg:mr-10 "
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="priority" className="block mb-2 md:text-xl text-base">
          Task Priority
        </label>
        <select
          id="priority"
          className="bg-white text-black font-bold mr-6 p-1 px-4 md:w-auto  w-full h-8 md:h-auto mb-2 lg:mr-10"
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
        <label htmlFor="status" className="block mb-2 md:text-xl text-base">
          Task Status
        </label>
        <select
          id="status"
          className="bg-white text-black font-bold p-1 md:w-auto  w-full h-8 md:h-auto mb-4 lg:mr-5 "
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
        className=" bg-green-800 text-white rounded-lg p-2 px-4 ml-4 md:-mb-5  "
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
