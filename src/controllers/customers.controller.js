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
      return { message: "Customer has been added successfully" };
    } else {
      return { message: "This customer already exists" };
    }
  },

  //Función PUT para actualizar los datos del cliente
  updateCustomer: (id, updatedData) => {
    const customerIndex = data.customers.findIndex((c) => c.id === id);

    if (customerIndex === -1) {
      return { message: "Customer not found" };
    }

    //Actualización de datos del cliente
    data.customers[customerIndex] = { ...data.customers[customerIndex], ...updatedData };

    console.log('Updated customer:', data.customers[customerIndex]);
    return { message: "Customer updated successfully" };
  },

  //Función DELETE para la eliminación del cliente
  deleteCustomer: (id) => {
    const customerIndex = data.customers.findIndex((c) => c.id === id);

    if (customerIndex === -1) {
      return { message: "Customer not found" };
    }

    //Eliminar cliente
    data.customers.splice(customerIndex, 1);

    console.log('Updated customers list:', data.customers);
    return { message: "Customer deleted successfully" };
  },
};

export default customersControllers;

