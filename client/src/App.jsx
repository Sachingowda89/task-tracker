import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 drop-shadow-sm">Task Tracker</h1>
          <span className="text-sm text-gray-600">Modern UI</span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <AddTask />
          </div>

          <div className="md:col-span-2">
            <TaskList />
          </div>
        </div>

      </div>
    </div>
  );
}
