const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { survayRouter } = require("./routers/survayRoute");
const { defaultLogger } = require("./middlewares/defaultLoggin");
const { dbConnection } = require("./database/connection");
const helment = require("helmet");
const { logger } = require("./log/logger");
dbConnection();

const portNo = process.env.PORTNO;

/**
 * config data for the cors with allowing origins
 */
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
};

app.use(helment());
app.use(cors(corsOptions));
app.use(express.json());
// Custom middleware for logging
app.use(defaultLogger);

// Define routes
app.use("/api/", survayRouter);

// Handle unspecified routes (404)
app.use("*", (req, res) => {
  res.status(404).send("No page found");
});

app.listen(portNo, () => {
  logger.info(`server running in port ${portNo}`);
});
