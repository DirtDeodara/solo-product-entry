import getAnswers from '../src/getAnswers.js';
import customerApi from './customer-api.js';


const form = document.getElementById('rekall-app');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const answers = getAnswers(formData);
    customerApi.save(answers);
   
    window.location = '../thank-you.html';
});