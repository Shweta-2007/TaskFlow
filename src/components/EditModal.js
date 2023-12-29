// EditModal.js
import React, { useState } from "react";

const EditModal = ({ show, task, onEdit, onClose }) => {
  const [editType, setEditType] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");

  const handleEdit = () => {
    onEdit({ ...task, [editType]: updatedValue });
    setEditType("");
    setUpdatedValue("");
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center flex-col items-center backdrop-blur-sm">
        <div className="bg-white p-8 rounded-lg border-green-800 border-4">
          <p className="text-xl font-semibold mb-4 text-black ">
            What do you want to edit?
          </p>
          <div className="mb-4 flex">
            <label className="block text-black mr-2 " htmlFor="editType">
              Select Edit Type:
            </label>
            <select
              id="editType"
              className="bg-white text-black font-bold px-2 border-green-800 border-2 rounded-md"
              value={editType}
              onChange={(e) => setEditType(e.target.value)}
            >
              <option value="select" className="bg-green-800 text-white">
                Select
              </option>
              <option value="title" className="bg-green-800 text-white">
                Title
              </option>
              <option value="description" className="bg-green-800 text-white">
                Description
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-black" htmlFor="updatedValue">
              Enter Updated Value:
            </label>

            <textarea
              className="p-4 w-full border-green-800 border-2 rounded-md text-black overflow-hidden overflow-y-auto h-24 whitespace-normal text-lg "
              value={updatedValue}
              id="updatedValue"
              onChange={(e) => setUpdatedValue(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-800 text-white px-4 py-2 mr-4 rounded-lg hover:bg-green-900 "
              onClick={handleEdit}
            >
              Submit
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 mr-2 rounded-lg hover:bg-gray-700 "
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
