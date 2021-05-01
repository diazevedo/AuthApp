import { Router } from "express";

import UserController from "./controllers/User.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "ok " });
});

routes.post("/users", UserController.store);

export default routes;
