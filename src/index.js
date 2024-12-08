import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import customersRoutes from "./routes/customers.routes.js";


const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);

app.listen(PORT);
console.log("Server on port", PORT);