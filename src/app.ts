import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes";
import cookieParser from "cookie-parser";
import path from "path";
const app: Application = express();

app.use(cors());
//file upload

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use("/uploads/", express.static("/uploads/"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/", routes);

app.use(globalErrorHandler);

app.get("/api/v1/", (req: Request, res: Response) => {
  res.send("Hey WellCome To Server!");
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});
export default app;
