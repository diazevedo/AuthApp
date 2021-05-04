import "dotenv/config.js";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import routes from "./routes/index.js";

import "./database/index.js";
import User from "./schemas/User.js";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());

    this.server.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
      })
    );

    this.server.use(passport.initialize());
    this.server.use(passport.session());

    passport.serializeUser(function (user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
