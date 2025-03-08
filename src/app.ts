import express from "express";

import userRouter from "./user/userRouter";
import globalErrorHandler from "./middlewares/globalErrorHandlers";

const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the elib api" });
});

app.use("/api/users", userRouter);

// global error handler

app.use(globalErrorHandler);

export default app;
