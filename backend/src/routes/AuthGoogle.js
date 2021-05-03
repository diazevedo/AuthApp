import { Router } from "express";
import passport from "passport";

import "./../controllers/GoogleController.js";

const routes = Router();

routes.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

routes.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => res.json({ message: "user looged in", user: req.user })
);

export default routes;
