import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/tasks/tasksSlice";

export default function AddTask() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    description: "",
    assigneeId: "",
    dueDate: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return alert("Title required");
    dispatch(createTask(form));
    setForm({ title: "", description: "", assigneeId: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h3 className="font-bold mb-2">Add Task</h3>

      <input
        name="title"
        placeholder="Title"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
        value={form.title}
      />

      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
        value={form.description}
      />

      <input
        name="assigneeId"
        placeholder="Assignee"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
        value={form.assigneeId}
      />

      <input
        name="dueDate"
        type="date"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
        value={form.dueDate}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
