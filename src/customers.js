import customerApi from './customer-api.js';

const tbody = document.getElementById('customers')

const customers = customerApi.getAll();

for(let i = 0; i < customers.length; i++) {
    const customers = customers[i];

    const tr = document.getElementById('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = customer.name;
    tr.appendChild(nameCell);

    const destinationCell = document.createElement('td');
    destinationCell.textContent = customer.destination;
    tr.appendChild(destinationCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = customer.name;
    tr.appendChild(nameCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = customer.name;
    tr.appendChild(nameCell);
}