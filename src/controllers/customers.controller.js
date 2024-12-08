import { data } from "../../src/database/bd.js";

const customersControllers = {

  //Función GET para obtener todos los clientes
  getCustomers: () => {
    const customers = data.customers.map((item) => {
      const { id, first_name, last_name, email, phone, status } = item;
      return { id, first_name, last_name, email, phone, status };
    });
    console.log(customers); 
    return customers;
  },

  //Función GET para obtener un cliente por ID
  get_id: (id) => {
    const customer = data.customers.find((c) => c.id === id);
    if (customer) {
      const { id, first_name, last_name, email, phone, status } = customer;
      return { customer: { id, first_name, last_name, email, phone, status }, message: "Customer found" };
    } else {
      return { customer: null, message: "This customer does not exist, please try again." };
    }
  },

  //Función POST para agregar un nuevo cliente
  postCustomer: (customer) => {
    const customerFound = data.customers.some((item) => item.id === customer.id);

    if (!customerFound) {
      data.customers.push(customer);
      console.log('Updated customers:', data.customers); 
      return { message: "Customer has been added successfully" };
    } else {
      return { message: "This customer already exists" };
    }
  },
};

export default customersControllers;
