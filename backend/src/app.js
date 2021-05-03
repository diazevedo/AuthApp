import "dotenv/config.js";
import express from "express";
import cors from "cors";
import passport from "passport";

import routes from "./routes/index.js";

import "./database/index.js";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(passport.initialize());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
