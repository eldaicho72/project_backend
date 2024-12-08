import { Router } from "express";
import productsControllers from "../controllers/products.controller.js";

const router = Router();

//GET todos los productos
router.get("/products", (req, res) => {
  const products = productsControllers.getProducts();
  res.json(products);
});

//GET producto por ID
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const { product, message } = productsControllers.getProductById(id);
  res.json({ product, message });
});

//Agregar un producto nuevo
router.post("/products", (req, res) => {
  const product = req.body;
  const { message, product: addedProduct } = productsControllers.postProduct(product);
  res.json({ message, product: addedProduct });
});

//Actualizar un producto
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;
  const { message, updatedProduct } = productsControllers.updateProduct(id, updatedInfo);
  res.json({ message, product: updatedProduct });
});

//Eliminar un producto
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const { message } = productsControllers.deleteProduct(id);
  res.json({ message });
});

export default router;
