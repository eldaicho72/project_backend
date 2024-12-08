import { Router } from "express";
import usersControllers from "../controllers/users.controller.js";

const router = Router();

router.get("/users", async (req, res) => {
  const users = usersControllers.getUsers();
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user, message } = usersControllers.get_id(id);
  res.json({ user, message });
});

router.post("/users", (req, res) => {
  const user = req.body;
  const { message } = usersControllers.postUsers(user);
  res.json({ message });
});


//RUTA para LOGIN
router.post("/users/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  const response = usersControllers.login(email, password);
  if (!response.success) {
    //Error de autenticación
    return res.status(401).json(response); 
  }

  //Login exitoso
  res.json(response); 
});

//PUT, editar usuario
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  
  const { message, updatedUser } = usersControllers.updateUser(id, userData);
  res.json({ message, updatedUser });
});

//DELETE usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const { message } = usersControllers.deleteUser(id);
  res.json({ message });
});

export default router;
