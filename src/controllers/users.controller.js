import { data } from "../../src/database/bd.js";

const usersControllers = {

//Función Login
login: (email, password) => {
  const user = data.users.find((u) => u.email === email);

  if (!user) {
    return { success: false, message: "User not found" };
  }

  if (user.password !== password) {
    return { success: false, message: "Invalid password" };
  }

  //Si los datos ingresados son correctos
  const { id, first_name, last_name, role_id } = user;
  return {
    success: true,
    message: "Login successful",
    user: { id, first_name, last_name, role_id },
  };
},

//Funcion get usuarios
  getUsers: () => {
    const users = data.users.map((item) => {
      const {
        id,
        first_name,
        last_name,
        email,
        password,
        role_id,
        phone,
        status,
      } = item;
      return {
        id,
        first_name,
        last_name,
        email,
        password,
        role_id,
        phone,
        status,
      };
    });

    console.log(users);
    return users;
  },

  get_id: (Idaux) => {
    const user = data.users.find((u) => u.id === Idaux);
    if (user) {
      const { id, first_name, last_name, email, password, phone, role_id, status } = user;
      return { user: { id, first_name, last_name, email, password, phone, role_id, status }, message: "User found" };
    } else {
      return { user: null, message: "This user does not exist" };
    }
  },

  postUsers: (user) => {
    const userFound = data.users.some((item) => item.id === user.id);
  
    if (!userFound) {
      data.users.push(user);
      console.log('Updated users:', data.users); // Verifica si se actualiza correctamente
      return { message: "User has been added successfully" };
    } else {
      return { message: "This user already exists" };
    }
  },
    
};

export default usersControllers;
