import { Router } from "express";
import passport from "passport";

import "../middlewares/PassportFacebook.js";

const routes = Router();

routes.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email, user_photos" })
);

routes.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/auth/facebook/loggedin",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

routes.get("/auth/facebook/loggedin", function (req, res) {
  res.json({ message: "FACEBOOK", user: req.user });
});

export default routes;
