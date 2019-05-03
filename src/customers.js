import makeCustomerRow from './make-customer-row.js';
import customerApi from './customer-api.js';

const tbody = document.getElementById('customers');

const customers = customerApi.getAll();

for(let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const tr = makeCustomerRow(customer);
    tbody.appendChild(tr);
}