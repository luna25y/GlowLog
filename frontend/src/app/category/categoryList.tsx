"use client";

import { useState, useEffect } from "react";
import { getCategories,updateCategory, deleteCategory } from "@/utils/categoryApi";

const CategoryList = () => {
    const [categories, setCategories] = useState<{ id: string; name: string; color: string }[]>([]);
    
    useEffect(() => {
        fetchCategories();
    }, []);
    
    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data as { id: string; name: string; color: string }[]);
    };
    
    const handleUpdate = async (id: string) => {
        const newName = prompt("Enter new category name:");
        const newColor = prompt("Enter new category color:");
            if (newName) {
                await updateCategory(id, {
                    name: newName,
                    color: newColor || "",
                }); 
                fetchCategories();
            }
    };

    const handleDelete = async (id: string) => {
        await deleteCategory(id);
        fetchCategories();
    };

    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Category List</h2>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category.id} className="flex justify-between items-center p-4 border rounded-md bg-white dark:bg-gray-900 shadow">
                        <span>{category.name} - {category.color}</span>
                        <div>
                            <button onClick={() => handleUpdate(category.id)} className="bg-yellow-500 text-white px-3 py-1 rounded mx-1">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(category.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
