import customerApi from './customer-api.js';

const name = document.getElementById('name');
const experience = document.getElementById('experience');
const destination = document.getElementById('destination');
const duration = document.getElementById('duration');
const addOns = document.getElementById('add-ons');
const medical = document.getElementById('medical');

const customer = customerApi.get();



if(!customer) {
    window.location = './';
}

name.textContent = customer.name;
experience.textContent = customer.experience;
destination.textContent = customer.destination;
duration.textContent = customer.duration;
addOns.textContent = customer.addOns;
if(customer.addOns) {
    addOns.textContent = customer.addOns.join(', ');
}
medical.textContent = customer.medical;
