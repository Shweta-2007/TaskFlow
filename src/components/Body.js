import React, { useState } from "react";
import { addTask, deleteTask, updateTask } from "../utils/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";

const Body = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [number, setNumber] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.tasks);

  const handleAddTask = () => {
    if (!title || !description) {
      setError("Please enter title and description!");
      return;
    }

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
    setError("");
  };

  const handleDeleteTask = (task) => {
    setTaskToDelete(task);
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
    setTaskToEdit(task);
    setShowEditModal(true);
  };

  const handleConfirmEdit = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setShowEditModal(false);
  };

  const handleExitEdit = () => {
    setTaskToEdit("");
    setShowEditModal(false);
  };

  return (
    <div
      className={` md:m-4 m-2 md:p-4 p-2 text-white overflow-hidden min-h-screen bg-black  `}
    >
      <h1 className="text-center bg-blue-900   font-bold text-4xl  p-2  md:mt-8  ">
        Task-Flow
      </h1>
      {error ? (
        <p className="text-white bg-red-700 text-center mt-2 ">{error}</p>
      ) : (
        ""
      )}

      <TaskForm
        title={title}
        description={description}
        dueDate={dueDate}
        priority={priority}
        status={status}
        number={number}
        setTitle={setTitle}
        setDescription={setDescription}
        setDueDate={setDueDate}
        setPriority={setPriority}
        setStatus={setStatus}
        setNumber={setNumber}
        handleAddTask={handleAddTask}
      />

      {tasks.length > 0 && (
        <TaskTable
          tasks={tasks}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}

      <EditModal
        show={showEditModal}
        task={taskToEdit}
        onEdit={handleConfirmEdit}
        onClose={handleExitEdit}
      />

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
