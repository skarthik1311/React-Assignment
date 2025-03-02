import React, { useState } from "react";
import TaskList from "../Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // Add a new task
  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);

      setTaskText(""); // Clear input field
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Add task when Enter key is pressed
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    addTask();
  }
};

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>

      {/* Input & Add Button */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          placeholder="Enter a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* Task List Component */}
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
