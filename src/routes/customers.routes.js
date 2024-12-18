import { Router } from "express";
import customersControllers from "../controllers/customers.controller.js";

const router = Router();

//GET para obtener todos los clientes
router.get("/customers", (req, res) => {
  const customers = customersControllers.getCustomers();
  res.json(customers);
});


//GET para un cliente en específico con el ID
router.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { customer, message } = customersControllers.get_id(id);
  res.json({ customer, message });
});

//POST para agregar un nuevo cliente
router.post("/customers", (req, res) => {
  const customer = req.body;
  const { message } = customersControllers.postCustomer(customer);
  res.json({ message });
});


//PUT actualizar cliente
router.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body; // Datos que deseas actualizar
  const { message } = customersControllers.updateCustomer(id, updatedData);
  res.json({ message });
});

//DELETE cliente
router.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { message } = customersControllers.deleteCustomer(id);
  res.json({ message });
});


export default router;
