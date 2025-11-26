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

      <div className="card w-full max-w-lg shadow-xl">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <button onClick={onClose} className="text-gray-500">✖</button>
        </div>

        <p className="text-gray-700 mb-4">{task.description}</p>

        <label className="block text-sm mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="input mb-4"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={deleteIt} className="btn-danger">Delete</button>
          <button onClick={updateStatus} className="btn-primary">Save</button>
        </div>
      </div>

    </div>
  );
}
