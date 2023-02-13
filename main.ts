import mongoose from "mongoose";
import express, { Express } from "express";
import { config } from "dotenv";
import todoRouter from "./routes";

const app: Express = express();
config();
const PORT = process.env.PORT || "8080";
const DB_URL = process.env.DB_URL || "<URL>";
app.use(express.json());
app.use("/api", todoRouter);

function startApp(port: string, databaseUrl: string): void {
  try {
    mongoose.connect(databaseUrl, () => {
      console.log("База подключена");
    });
    app.listen(port, () => {
      console.log("Сервер запустили");
    });
  } catch (e) {
    console.log(e);
  }
}

startApp(PORT, DB_URL);
