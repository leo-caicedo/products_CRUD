const express = require("express");

const app = express();
const { mongoConnection } = require("./db/mongo");

// required routes
const routes = require("./routes");

// middleware
app.use(express.json());

// db
mongoConnection();

// routes
app.use("/api/products", routes);

// redirect
app.get("/", function (req, res) {
  res.redirect("/api/products");
});

// server
app.listen(3000, () => {
  console.log("Express listen on port 3000");
});