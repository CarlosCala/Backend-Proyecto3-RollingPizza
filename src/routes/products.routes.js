import { Router } from "express";
// import { check } from "express-validator";
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
  .get(showProducts) // esta ruta es llamada desde products controllers para tenerla mucho mas ordenada
  .post( createProduct);

// no se puede obtener dos get en la misma ruta , por ende para traer UN solo producto debemos crear otra ruta
router
  .route("/:id")
  .get(getOneProduct)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
