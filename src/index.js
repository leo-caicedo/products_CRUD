const express = require("express");

const app = express();
const { mongoConnection } = require("./db/mongo");
const { logErrors, errorHandler } = require("./utils/middleware/errorHandler");
const notFoundHandler = require("./utils/middleware/notFoundHandler");

// required routes
const productsAPI = require("./routes");

// middleware

app.use(express.json());

// db
mongoConnection();

// routes
productsAPI(app);

// redirect
app.get("/", function (req, res) {
  res.redirect("/api/products");
});

// Catch 404
app.use(notFoundHandler);

// errorHandler
app.use(logErrors);
app.use(errorHandler);

// server
app.listen(3000, () => {
  console.log("Express listen on port 3000");
});
