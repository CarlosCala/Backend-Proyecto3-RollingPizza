import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./config/database";
import router from "./routes/products.routes";
import auth from "./routes/user.routes";
import ord from "./routes/order.routes";
import * as dotenv from "dotenv";

//instancia de express
const app = express();

//crear un puerto
app.set("port", process.env.PORT || 4001);

app.listen(app.get("port"), () => {
  console.log("**************");
  console.log("estoy en el puerto " + app.get("port"));
  console.log("**************");
});
//middlewares
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
dotenv.config();

//rutas
app.use("/apiPizzas", router);
app.use("/apiPizzas/auth", auth);
app.use("/apiPizzas/or", ord);
