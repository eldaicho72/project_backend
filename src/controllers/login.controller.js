import { data } from "../database/bd.js";

const loginControllers = () => {
  const verifyLogin = (email, password) => {
    let user_exists = false;
    let correct_password = false;

    data.users.map((item) => {
      if (item.email === email) {
        user_exists = true;
        if (item.password === password) correct_password = true;
      }
    });

    if (!user_exists) {
      return { message: "The email address is not registered. Please check and try again." };
    }

    if (!correct_password) {
      return { message: "Incorrect password. Please try again" };
    }

    return { message: "Welcome! You’re now signed in" };
  };
  return { verifyLogin };
};

export default loginControllers;