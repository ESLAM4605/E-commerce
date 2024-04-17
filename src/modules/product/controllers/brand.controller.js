import { ApiFeatures } from "../../../utils/apiFeatures.js";
import { catchError } from "../../../utils/error.handler.js";
import brandModel from "../models/brand.model.js";

export const getBrand = catchError(async (req, res) => {
  const { brandSlug } = req.params;
  const brand = await brandModel.findOne({ slug: brandSlug });
  res.json({ brand });
});

export const getBrands = catchError(async (req, res) => {
  const apiFeatures = new ApiFeatures(brandModel.find(), req.query).paginate(
    10
  );
  const brands = await apiFeatures.query;
  res.json({ brands });
});

export const addBrand = catchError(async (req, res) => {
  const brand = await brandModel.create(req.body);
  res.status(201).json({ brand });
});

export const updateBrand = catchError(async (req, res) => {
  const { brandSlug } = req.params;
  const brand = await brandModel.findOneAndUpdate(
    { slug: brandSlug },
    req.body,
    { new: true }
  );
  res.json({ brand });
});

export const deleteBrand = catchError(async (req, res) => {
  const { brandSlug } = req.params;
  const brand = await brandModel.findOneAndDelete({ slug: brandSlug });
  res.json({ brand });
});
