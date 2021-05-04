import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import googleRoutes from "./AuthGoogle.js";
import FacebookRoutes from "./AuthFacebook.js";

const routes = Router();

routes.use(userRoutes);
routes.use(googleRoutes);
routes.use(FacebookRoutes);

routes.get("/", (req, res) => {
  res.json({ message: "ok" });
});

routes.get("/login", (req, res) => {
  res.json({ message: "error" });
});

export default routes;
