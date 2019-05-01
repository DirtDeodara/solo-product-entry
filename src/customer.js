import customerApi from './customer-api.js';

const name = document.getElementById('name');
const experience = document.getElementById('experience');
const destination = document.getElementById('destination');
const duration = document.getElementById('duration');
const addOns = document.getElementById('add-ons');
const medical = document.getElementById('medical');

const customer = customerApi.get();

