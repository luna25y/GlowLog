import { Request, Response } from 'express';
import { getTasksFromDB, createTaskInDB, updateTaskInDB, deleteTaskFromDB } from '../services/taskService';

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await getTasksFromDB();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(404).send({ message: 'Tasks not found' });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { name, category, estiStartTime, estiEndTime, estiDuration } = req.body;
  const id = new Date().toISOString();
  const startTime = "";
  const endTime = "";
  const duration = 0;
  try {
    await createTaskInDB({ id, name, category, estiStartTime, estiEndTime, estiDuration, startTime, endTime, duration });
    res.status(201).send({ message: 'Task created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Failed to create task' });
  }
};

export const updateTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await updateTaskInDB(id, { name });
    res.status(200).send({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(404).send({ message: 'Task not found' });
  }
};

export const deleteTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTaskFromDB(id);
    res.status(200).send({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(404).send({ message: 'Task not found' });
  }
};