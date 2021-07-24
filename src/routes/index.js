const { Router } = require("express");

const ProductsService = require("../services");

function productsAPI(app) {
  const router = Router();
  app.use("/api/products", router);

  const productsService = new ProductsService();

  router.get("/", async function (req, res, next) {
    try {
      const products = await productsService.getProducts();

      res.status(200).json({
        data: products,
        message: "products listed",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async function (req, res, next) {
    const { id } = req.params;

    try {
      const product = await productsService.getProduct(id);

      res.status(200).json({
        data: product,
        message: "product retrieved",
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function (req, res, next) {
    const { body: product } = req;
    try {
      const createdProduct = await productsService.createProduct(product);

      res.status(201).json({
        data: createdProduct,
        message: "product created",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:id", async function (req, res, next) {
    const { id } = req.params;
    const { body: product } = req;

    try {
      const updatedProduct = await productsService.updateProduct(id, product);

      res.status(200).json({
        data: updatedProduct,
        message: "product updated",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async function (req, res, next) {
    const { id } = req.params;

    try {
      const deletedProduct = await productsService.deleteProduct(id);

      res.status(200).json({
        data: deletedProduct,
        message: "product deleted",
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = productsAPI;
