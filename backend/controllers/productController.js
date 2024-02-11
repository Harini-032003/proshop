import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
// separate controllers for more cleaner code 
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
//getProducts function to fetch products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
//fetches products by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error('Resource not found');
});

export { getProducts, getProductById };