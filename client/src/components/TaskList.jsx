import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/tasks/tasksSlice";
import TaskDetail from "./TaskDetail";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.tasks);

  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  // ----- FILTER LOGIC -----
  const filteredTasks = items.filter((task) => {
    if (filter === "all") return true;
    if (filter === "todo") return task.status === "todo";
    if (filter === "in-progress") return task.status === "in-progress";
    if (filter === "done") return task.status === "done";
    if (filter === "mine") return task.assigneeId === "Sachin"; // your name or user id
    return true;
  });

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "todo", label: "Todo" },
    { id: "in-progress", label: "In Progress" },
    { id: "done", label: "Completed" },
    { id: "mine", label: "Assigned to Me" }
  ];

  return (
    <div className="space-y-5">

      {/* ---- FILTER BUTTONS ---- */}
      <div className="flex flex-wrap gap-3">
        {filterButtons.map((b) => (
          <button
            key={b.id}
            onClick={() => setFilter(b.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition
              ${filter === b.id
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* ---- LIST OF TASKS ---- */}
      <div className="space-y-4">
        {filteredTasks.map((t) => (
          <div key={t._id} className="card flex justify-between items-start">
            <div className="space-y-1">
              <div className="text-lg font-semibold">{t.title}</div>
              <div className="text-sm text-gray-600">{t.description}</div>

              <div className="text-xs mt-2 flex items-center gap-2">
                <span
                  className={`tag ${
                    t.status === "done"
                      ? "bg-green-200 text-green-700"
                      : t.status === "in-progress"
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {t.status.toUpperCase()}
                </span>

                {t.dueDate && (
                  <span className="tag bg-blue-100 text-blue-700">
                    📅 {new Date(t.dueDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>

            <button
              className="text-blue-600 underline text-sm mt-1"
              onClick={() => setSelected(t)}
            >
              Open
            </button>
          </div>
        ))}
      </div>

      {selected && <TaskDetail task={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
