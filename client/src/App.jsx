import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task Tracker</h1>
          <div className="text-sm text-gray-600">Demo</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
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
