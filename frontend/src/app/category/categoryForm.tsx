"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createCategory, getCategories, updateCategory, deleteCategory } from "../../utils/categoryApi";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [categories, setCategories] = useState<{ id: string; name: string; color: string }[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data as { id: string; name: string; color: string }[]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    await createCategory({ name, color });
    setName("");
    setColor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        <input
          type="text"
          placeholder="Category color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Create Task</button>
      </form>
    </div>
  );
};

export default CategoryForm;
