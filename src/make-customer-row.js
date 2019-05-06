function makeCustomerRow(customer) {
    const tr = document.createElement('tr');
  
    const nameCell = makeNameCell(customer.name);
    const destinationCell = makeTextCell(customer.destination);
    const durationCell = makeTextCell(customer.duration);
    const addOnsCell = makeAddOnsCell(customer.addOns);
    
    tr.appendChild(nameCell);
    tr.appendChild(destinationCell);
    tr.appendChild(durationCell);
    tr.appendChild(addOnsCell);

    return tr;
}

function makeNameCell(name) {
    
    //we are creating the table cell    
    const nameCell = document.createElement('td');
    // creating the anchor link <a>
    const link = document.createElement('a');
    
    //create a search params object
    const searchParams = new URLSearchParams();
    // set the name key with the customers name as the value
    searchParams.set('name', name);
    //use the formatted search string as the end of the link href
    //that goes to the detail page
    link.href = 'order.html?' + searchParams.toString();

    // also use the customer's name as the display text for the link
    link.textContent = name;
    // add the link to the name cell
    nameCell.appendChild(link);
    
    return nameCell; 
}

function makeAddOnsCell(addOns) {
    let addOnsList = '';
    if(addOns) {
        addOnsList = addOns.join(', ');
    }
    const cell = makeTextCell(addOnsList);
    return cell;
}

function makeTextCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

export default makeCustomerRow;