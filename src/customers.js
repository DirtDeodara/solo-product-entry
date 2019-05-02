import customerApi from './customer-api.js';

const tbody = document.getElementById('customers')

const customers = customerApi.getAll();

for(let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = customer.name;
    tr.appendChild(nameCell);

    const destinationCell = document.createElement('td');
    destinationCell.textContent = customer.destination;
    tr.appendChild(destinationCell);

    const durationCell = document.createElement('td');
    durationCell.textContent = customer.duration;
    tr.appendChild(durationCell);

    const addOnsCell = document.createElement('td');
    let addOnsList = '';
    if(customer.addOns) {
        addOnsList = customer.addOns.join(', ');
    }
    addOnsCell.textContent = addOnsList;
    tr.appendChild(addOnsCell);

    tbody.appendChild(tr);
}