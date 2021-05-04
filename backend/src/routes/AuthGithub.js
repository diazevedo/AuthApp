import { Router } from "express";
import passport from "passport";

import "../middlewares/PassportGithub.js";

const routes = Router();

routes.get("/auth/github", passport.authenticate("github"));

routes.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.json({ message: "GITHUB", user: req.user });
  }
);

export default routes;
