import { Server } from "http";
import mongoose from "mongoose";
import app from "../app";
import config from "../config/index";
import { errorlogger, logger } from "../shared/logger";
import cors from "cors";

app.use(cors());

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function connectDB() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`🛢 DAPS Database is connected successfully`);

    server = app.listen(config.port, () => {
      console.log(`DAPS Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

connectDB();
