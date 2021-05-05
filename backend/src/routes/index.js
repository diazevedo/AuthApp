import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import googleRoutes from "./AuthGoogle.js";
import FacebookRoutes from "./AuthFacebook.js";
import TwitterRoutes from "./AuthTwitter.js";
import GithubRoutes from "./AuthGithub.js";

const routes = Router();

routes.use(userRoutes);
routes.use(googleRoutes);
routes.use(FacebookRoutes);
routes.use(TwitterRoutes);
routes.use(GithubRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) res.json({ success: false });

  next();
};

routes.get("/", authCheck, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

routes.get("/login", (req, res) => {
  res.json({ success: false });
});

export default routes;
