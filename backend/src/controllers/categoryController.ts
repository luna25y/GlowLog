import { Request, Response } from 'express';
import { getCategoriesFromDB, createCategoryInDB, updateCategoryInDB, deleteCategoryFromDB } from '../services/categoryService';

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await getCategoriesFromDB();
    res.status(200).send(categories);
  } catch (error) {
    res.status(404).send({ message: 'Categories not found' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { name, color } = req.body;
  const id = req.body.name;
  try {
    await createCategoryInDB({ id, name, color });
    res.status(201).send({ message: 'Category created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Failed to create category' });
  }
};

export const updateCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, color } = req.body;
  try {
    await updateCategoryInDB(id, { name, color });
    res.status(200).send({ message: 'Category updated successfully' });
  } catch (error) {
    res.status(404).send({ message: 'Category not found' });
  }
};

export const deleteCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteCategoryFromDB(id);
    res.status(200).send({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(404).send({ message: 'Category not found' });
  }
};