import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import indexRouter from "./routes/indexRouter";
import personRouter from "./routes/personRouter";

const server: Express = express();

// Middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev")); // messages by console
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(helmet());
server.use(cors());

// Routes
server.use("/", indexRouter);
server.use("/person", personRouter);

// Error catching endware.
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status: number = err.status || 500;
  const message: string = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
