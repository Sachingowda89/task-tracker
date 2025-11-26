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
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Add New Task</h3>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          name="title"
          placeholder="Task Title"
          className="input"
          onChange={handleChange}
          value={form.title}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="input"
          rows="3"
          onChange={handleChange}
          value={form.description}
        />

        <input
          name="assigneeId"
          placeholder="Assignee Name"
          className="input"
          onChange={handleChange}
          value={form.assigneeId}
        />

        <input
          name="dueDate"
          type="date"
          className="input"
          onChange={handleChange}
          value={form.dueDate}
        />

        <button className="btn-primary w-full">Add Task</button>
      </form>
    </div>
  );
}
