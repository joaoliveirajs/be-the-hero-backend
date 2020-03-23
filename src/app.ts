import express from "express";
import morgan from "morgan";
import cors from "cors";

import "dotenv/config";

import routes from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(morgan("dev"));
    this.express.use(cors());
  }
  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
