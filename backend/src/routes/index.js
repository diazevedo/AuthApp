import { Router } from "express";

import passport from "passport";

import googleRoutes from "./AuthGoogle.js";
import userRoutes from "./UserRoutes.js";

const routes = Router();

routes.use(userRoutes);
routes.use(googleRoutes);

export default routes;
