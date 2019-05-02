const customerApi = {
    storage: localStorage,
    save(customer) {
        //get our customer array
        const customers = customerApi.getAll();
        //add this customer to the array
        customers.push(customer);
        //serialize json
        const json = JSON.stringify(customers);
        //save to local storage
        customerApi.storage.setItem('customers', json);
    },

    get() {
        //use get all to fetch my customer data
        const customers = customerApi.getAll();
        //return it
        return customers[0];
    },

    getAll() {
        //get from local storage
        const json = customerApi.storage.getItem('customers');
        //decerealize(hehe) to object
        let customers = JSON.parse(json);
        if(!customers) {
            customers = [];
        }

        return customers;
    }
};

export default customerApi;