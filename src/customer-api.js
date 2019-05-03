const customerApi = {
    storage: localStorage,
    save(customer) {
        const customers = customerApi.getAll();
        
        customers.push(customer);
        
        const json = JSON.stringify(customers);
        customerApi.storage.setItem('customers', json);
    },

    get(name) {
        const customers = customerApi.getAll();
        for(let i = 0; i < customers.length; i++) {
            const customer = customers[i];
            if(customer.name === name) {
        
                return customer;
            }
        }
    },

    getAll() { 
        const json = customerApi.storage.getItem('customers');
        
        let customers = JSON.parse(json);

        if(!customers) {
            customers = [];
        }
        return customers;
    }
};

export default customerApi;