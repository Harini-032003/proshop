import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
} from '../controllers/productController.js';
// middleware for admin routes
import {protect, admin} from '../middleware/authMiddleware.js';

//using functions from productController to getProducts and product by id
router.route('/').get(getProducts).post(protect,admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);
export default router;