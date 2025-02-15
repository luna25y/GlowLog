import express, { Router } from "express";
import { getCategories, createCategory, updateCategoryById, deleteCategoryById } from '../controllers/categoryController';

const router = Router();

router.post("/categories", createCategory);
router.get("/categories", getCategories);
router.put('/categories/:id', updateCategoryById);
router.delete('/categories/:id', deleteCategoryById);

export default router;