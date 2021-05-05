import "dotenv/config.js";
import express from "express";
import cors from "cors";
import passport from "passport";
import routes from "./routes/index.js";
import cookieSession from "cookie-session";

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

    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });

    this.server.use(
      cors({
        origin: [
          "http://127.0.0.1:3000/",
          "http://127.0.0.1:3000",
          "http://localhost:3000",
          "http://localhost:3000/",
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
        credentials: "include",
      })
    );

    passport.serializeUser(function (user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    });

    this.server.use(
      cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [process.env.SESSION_SECRET],
      })
    );

    this.server.use(passport.initialize());
    this.server.use(passport.session());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
