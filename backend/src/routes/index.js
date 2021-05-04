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

routes.get("/", (req, res) => {
  res.json({ message: "ok" });
});

routes.get("/login", (req, res) => {
  res.json({ message: "error" });
});

export default routes;
