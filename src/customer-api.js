const customerApi = {
    storage: localStorage,
    save(customer) {
        const json = JSON.stringify(customer);
        localStorage.setItem('customer', json);
    },
    get() {
        const json = localStorage.getItem('customer');
        const customer = JSON.parse(json);
        return customer;
    }
};

export default customerApi;