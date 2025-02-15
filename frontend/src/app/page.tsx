"use client";

import TaskForm from "./tasks/taskForm";
import TaskList from "./tasks/taskList";
import CategoryForm from "./category/categoryForm";
import CategoryList from "./category/categoryList";

export default function page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Task Management</h1>
      <br />
      <TaskForm />
      <br />
      <TaskList />
      <br />
      <CategoryForm />
      <br />
      <CategoryList />
    </div>
  );
}

