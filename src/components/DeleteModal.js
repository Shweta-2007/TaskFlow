import React from "react";

const DeleteModal = ({ show, task, onConfirm, onExit }) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm ">
        <div className="bg-white p-8 rounded-lg  z-50 flex flex-col ">
          <p className="text-xl font-bold mb-4 text-black">
            Are you sure want to delete this task?
          </p>
          <div className="flex justify-center">
            <button
              className="bg-red-700 text-white px-4 py-2 mr-4 rounded-lg hover:bg-red-900"
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 mr-2 rounded-lg hover:bg-gray-700"
              onClick={onExit}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
