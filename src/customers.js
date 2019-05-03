import customerApi from './customer-api.js';

const tbody = document.getElementById('customers');

const customers = customerApi.getAll();

for(let i = 0; i < customers.length; i++) {
    const customer = customers[i];


    // input: applicant

    const tr = document.createElement('tr');
    //we are creating the table cell    
    const nameCell = document.createElement('td');
    // creating the anchor link <a>
    const link = document.createElement('a');
    
    //create a search params object
    const searchParams = new URLSearchParams();
    // set the name key with the customers name as the value
    searchParams.set('name', customer.name);
    //use the formatted search string as the end of the link href
    //that goes to the detail page
    link.href = 'order.html?' + searchParams.toString();

    // also use the customer's name as the display text for the link
    link.textContent = customer.name;
    // add the link to the name cell
    nameCell.appendChild(link)
    // add the name cell to the new table row
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
    

    //output: tr

    tbody.appendChild(tr);
}