const customerApi = {
    storage: localStorage,
    save(customer) {
        const customers = customerApi.getAll();
        
        customers.push(customer);
        
        const json = JSON.stringify(customers);
        customerApi.storage.setItem('customers', json);
    },

    get() {
        const customers = customerApi.getAll();
        return customers[customers.length - 1];
    },

    getAll() { 
        const json = customerApi.storage.getItem('customers');
        
        let customers = JSON.parse(json);

        if(!customers) {
            customers = [];
        }
        console.log('customer', customers);
        return customers;
    }
};

export default customerApi;