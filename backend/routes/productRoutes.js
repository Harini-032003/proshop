import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';
//using functions from productController to getProducts and product by id
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;