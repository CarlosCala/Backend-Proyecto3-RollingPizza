import { Router } from "express";
import {
  login,
  register,
  showUser,
  updateUser,
  getOneUser,
} from "../controllers/users.controllers";

const router = Router();

router
.route("/login")
.post(login);

router
.route("/register")
.post(register);

router
.route("/table")
.get(showUser);

router
.route("/:_id")
.get(getOneUser)
.put(updateUser);

export default router;
