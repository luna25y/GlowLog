"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createTask, getTasks } from "../../utils/taskApi";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [estiStartTime, setEstiStartTime] = useState("");
  const [estiEndTime, setEstiEndTime] = useState("");
  const [estiDuration, setEstiDuration] = useState(0);
  const [tasks, setTasks] = useState<{ id: string; name: string; category: number; estiStartTime: string; estiEndTime: string; estiDuration: number }[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data as { id: string; name: string; category: number; estiStartTime: string; estiEndTime: string; estiDuration: number }[]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) return;

    const id = uuidv4();
    await createTask({ name, category, estiStartTime, estiEndTime, estiDuration });
    setName("");
    setCategory("");
    setEstiStartTime("");
    setEstiEndTime("");
    setEstiDuration(0);
    fetchTasks();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Task Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Estimated Start Time"
          value={estiStartTime}
          onChange={(e) => setEstiStartTime(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Estimated End Time"
          value={estiEndTime}
          onChange={(e) => setEstiEndTime(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
