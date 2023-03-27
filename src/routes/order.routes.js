import { Router } from "express";
import {
  createOrder,
  getOneOrder,
  showOrders,
  updateOrder,
} from "../controllers/order.controller";

const router = Router();

router.route("/").post(createOrder);

router.route("/table").get(showOrders);

router.route("/:id").put(updateOrder).get(getOneOrder);

export default router;
