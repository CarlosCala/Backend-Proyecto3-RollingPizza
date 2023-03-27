import { Router } from "express";

import {
  showProducts,
  createProduct,
  deleteProduct,
  getOneProduct,
  updateProduct,
} from "../controllers/products.controllers";
// creamos la instancia del router
const router = Router();

//crea mis rutas
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
