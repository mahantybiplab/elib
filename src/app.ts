import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHandlers";

const app = express();

// routes
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to the elib api" });
});

// global error handler
// app.use(globalErrorHandler)
app.use(globalErrorHandler);

export default app;
 