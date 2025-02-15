"use client";

import { useState, useEffect } from "react";
import { getTasks, updateTask, deleteTask } from "../../utils/taskApi";

const TaskList = () => {
  const [tasks, setTasks] = useState<{ id: string; name: string; category: string; estiStartTime: string; estiEndTime: string; estiDuration: number; categoryName: string; categoryColor: string }[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);


  useEffect(() => {
    console.log("Updated Tasks:", tasks); // 监听 tasks 变化
  }, [tasks]);

  const fetchTasks = async () => {
    const data = await getTasks();
    console.log("Fetched Tasks:", data); // 打印任务数据
    setTasks(data as { id: string; name: string; category: string; estiStartTime: string; estiEndTime: string; estiDuration: number; categoryName: string; categoryColor: string }[]);
  };

  
  //const fetchTasks = async () => {
  //  const data = await getTasks();
  //  setTasks(data as { id: string; name: string; category: string; estiStartTime: string; estiEndTime: string; estiDuration: number }[]);
  //};

  const handleUpdate = async (id: string) => {
    const newName = prompt("Enter new task name:");
    if (newName) {
      await updateTask(id, {
        name: newName,
        category: "", 
        estiStartTime: "",
        estiEndTime: "",
        estiDuration: 0
      });
      fetchTasks();
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Task List</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-4 border rounded-md bg-white dark:bg-gray-900 shadow">
            <span>{task.name} - {task.category} - {task.categoryName} - {task.categoryColor}</span>
            <div>
              <button onClick={() => handleUpdate(task.id)} className="bg-yellow-500 text-white px-3 py-1 rounded mx-1">
                Edit
              </button>
              <button onClick={() => handleDelete(task.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
