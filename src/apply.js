import getAnswers from '../src/getAnswers.js';

const form = document.getElementById('rekall-app');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const answers = getAnswers(formData);
    console.log(answers);
});