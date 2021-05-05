import { Router } from "express";
import passport from "passport";

import "../middlewares/PassportGoogle.js";

const routes = Router();

routes.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

routes.get(
  "/auth/google/loggedin",
  passport.authenticate("google", {
    successRedirect: process.env.APP_REDIRECT_URL,
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.json({ message: "GOOGLE", user: req.user });
  }
);

export default routes;
