import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/tasks/tasksSlice";
import TaskDetail from "./TaskDetail";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.tasks);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <ul className="space-y-2">
        {items.map((t) => (
          <li
            key={t._id}
            className="p-3 bg-white shadow rounded flex justify-between"
          >
            <div>
              <div className="font-semibold">{t.title}</div>
              <div className="text-sm text-gray-500">{t.description}</div>
            </div>

            <button
              className="text-blue-600 underline"
              onClick={() => setSelected(t)}
            >
              Open
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <TaskDetail task={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
