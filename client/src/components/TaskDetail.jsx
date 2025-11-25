import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../features/tasks/tasksSlice";

export default function TaskDetail({ task, onClose }) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(task.status);

  const updateStatus = () => {
    dispatch(updateTask({ id: task._id, updates: { status } }));
    onClose();
  };

  const deleteIt = () => {
    dispatch(deleteTask(task._id));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow w-full max-w-md">
        <h3 className="font-bold text-lg mb-2">{task.title}</h3>
        <p className="mb-4">{task.description}</p>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={deleteIt} className="bg-red-500 text-white px-3 py-2 rounded">
            Delete
          </button>
          <button onClick={updateStatus} className="bg-blue-600 text-white px-3 py-2 rounded">
            Save
          </button>
        </div>

        <button className="mt-3 text-gray-700 underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
