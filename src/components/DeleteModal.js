import React from "react";

const DeleteModal = ({ show, task, onConfirm, onExit }) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-70 ">
        <div className="bg-white p-8 rounded-lg">
          <p className="text-xl font-semibold mb-4">
            Are you sure want to delete this task?
          </p>
          <div className="flex justify-end">
            <button
              className="bg-red-700 text-white px-4 py-2 mr-2 rounded-lg"
              onClick={onConfirm}
            >
              Confirm Delete
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 mr-2 rounded-lg"
              onClick={onExit}
            >
              Exit Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
