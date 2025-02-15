import { CategoryModel } from '../models/categoryModel';

export const getCategoriesFromDB = async () => {
  const categories = await CategoryModel.scan().exec();
  return categories;
};

export const createCategoryInDB = async (category: { id: string; name: string; color?: string }) => {
  await CategoryModel.create(category);
};

export const updateCategoryInDB = async (id: string, update: { name?: string; color?: string }) => {
  const category = await CategoryModel.update({ id }, update);
  if (!category) {
    throw new Error('Category not found');
  }
};

export const deleteCategoryFromDB = async (id: string) => {
  const category = await CategoryModel.get(id);
  if (!category) {
    throw new Error('Category not found');
  }
  await CategoryModel.delete(id);
};