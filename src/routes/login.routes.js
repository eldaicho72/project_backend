import { Router } from "express";
import loginControllers from "../controllers/login.controller.js";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let { message } = loginControllers().verifyLogin(email, password);
  res.json({ message });
});

export default router;