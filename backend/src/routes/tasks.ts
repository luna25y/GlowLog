import express, { Request, Response, Router } from "express";
import { getTasks, createTask, deleteTaskById, updateTaskById } from '../controllers/tasksController';

const router = Router();

// 创建
router.post("/tasks", createTask);

// 获取
router.get("/tasks", getTasks);

// 更新
router.put('/tasks/:id', updateTaskById);

// 删除
router.delete('/tasks/:id', deleteTaskById);

export default router;
