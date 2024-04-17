import { ApiFeatures } from "../../../utils/apiFeatures.js";
import { catchError } from "../../../utils/error.handler.js";
import { makeImage } from "../../image/utils/image.utils.js";
import categoryModel from "../models/category.model.js";

export const getCategory = catchError(async (req, res) => {
  const { categorySlug } = req.params;
  const category = await categoryModel.findOne({ slug: categorySlug });
  res.json({ category });
});

export const getCategories = catchError(async (req, res) => {
  const apiFeatures = new ApiFeatures(categoryModel.find(), req.query).paginate(
    10
  );
  const categories = await apiFeatures.query;
  res.json({ categories });
});

export const addCategory = catchError(async (req, res) => {
  const category = await categoryModel.create(req.body);
  res.status(201).json({ category });
});

export const updateCategory = catchError(async (req, res) => {
  const { categorySlug } = req.params;
  const category = await categoryModel.findOneAndUpdate(
    { slug: categorySlug },
    req.body
  );
  res.status(201).json({ category });
});

export const deleteCategory = catchError(async (req, res) => {
  const { categorySlug } = req.params;
  const category = await categoryModel.findOneAndDelete({
    slug: categorySlug,
  });
  res.json({ category });
});