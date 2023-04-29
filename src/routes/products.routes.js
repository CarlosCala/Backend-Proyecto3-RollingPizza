import { Router } from "express";

import {
  showProducts,
  createProduct,
  deleteProduct,
  getOneProduct,
  updateProduct,
} from "../controllers/products.controllers";

const router = Router();


router
  .route("/")
  .get(showProducts) 
  .post( createProduct);

router
  .route("/:id")
  .get(getOneProduct)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
