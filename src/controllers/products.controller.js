import { data } from "../../src/database/bd.js";

const productsControllers = {
    //Get todos los productos 
  getProducts: () => {
    return data.products.map((item) => {
      const { id, name, description, category, price, stock, material, status, created_at, updated_at } = item;
      return { id, name, description, category, price, stock, material, status, created_at, updated_at };
    });
  },

  //GET producto por ID
  getProductById: (id) => {
    const product = data.products.find((p) => p.id === parseInt(id));
    if (product) {
      return { product, message: "Product found" };
    } else {
      return { product: null, message: "Product not found" };
    }
  },

  //Agregar con POST nuevo producto
  postProduct: (product) => {
    const productExists = data.products.some((item) => item.id === product.id);

    if (!productExists) {
      product.created_at = new Date().toISOString();  //Asignación de la fecha de creación
      product.updated_at = new Date().toISOString();  //Asignación de la fecha de actualización
      data.products.push(product);
      return { message: "Product added successfully", product };
    } else {
      return { message: "Product already exists" };
    }
  },

  //Actualizar un producto
  updateProduct: (id, updatedInfo) => {
    const productIndex = data.products.findIndex((p) => p.id === parseInt(id));
    if (productIndex !== -1) {
      const updatedProduct = { ...data.products[productIndex], ...updatedInfo, updated_at: new Date().toISOString() };
      data.products[productIndex] = updatedProduct;
      return { message: "Product updated successfully", updatedProduct };
    } else {
      return { message: "Product not found" };
    }
  },

  //Eliminar un producto
  deleteProduct: (id) => {
    const productIndex = data.products.findIndex((p) => p.id === parseInt(id));
    if (productIndex !== -1) {
      data.products.splice(productIndex, 1);
      return { message: "Product deleted successfully" };
    } else {
      return { message: "Product not found" };
    }
  }
};

export default productsControllers;
