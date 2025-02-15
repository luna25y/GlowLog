import { TaskModel } from '../models/taskModel';
import { CategoryModel } from '../models/categoryModel';

export const getTasksFromDB = async () => {
  const tasks = await TaskModel.scan().exec();
  const tasksWithCategory = await Promise.all(tasks.map(async (task) => {
    const category = await CategoryModel.get(task.category);
    return {
      ...task,
      categoryName: category ? category.name : null,
      categoryColor: category ? category.color : null,
    };
  }));
  return tasksWithCategory;
};

export const createTaskInDB = async (task: { id: string; name: string; category: string; estiStartTime: string; estiEndTime: string; estiDuration: number; startTime: string; endTime: string; duration: number }) => {
  await TaskModel.create(task);
};

export const updateTaskInDB = async (id: string, update: { name: string }) => {
  const task = await TaskModel.update({ id }, update);
  if (!task) {
    throw new Error('Task not found');
  }
};

export const deleteTaskFromDB = async (id: string) => {
  const task = await TaskModel.get(id);
  if (!task) {
    throw new Error('Task not found');
  }
  await TaskModel.delete(id);
};