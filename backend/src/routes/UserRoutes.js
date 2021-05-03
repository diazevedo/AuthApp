import { Router } from "express";
import UserController from "./../controllers/User.js";

const routes = Router();

routes.post("/users", UserController.store);

export default routes;
