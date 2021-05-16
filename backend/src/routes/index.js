import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import googleRoutes from "./AuthGoogle.js";
import FacebookRoutes from "./AuthFacebook.js";
import TwitterRoutes from "./AuthTwitter.js";
import GithubRoutes from "./AuthGithub.js";
import FileRoutes from "./FileRoutes.js";

import authCheck from "../middlewares/SessionCheck.js";

const routes = Router();

routes.use(userRoutes);
routes.use(googleRoutes);
routes.use(FacebookRoutes);
routes.use(TwitterRoutes);
routes.use(GithubRoutes);
routes.use(FileRoutes);

routes.get("/", authCheck, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

routes.get("/login", (req, res) => {
  res.json({ success: false });
});

routes.get("/logout", (req, res) => {
  req.logout();

  res.status(205).json({ success: true });
});

export default routes;
