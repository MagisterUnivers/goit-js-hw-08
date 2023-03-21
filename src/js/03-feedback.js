import throttle from 'lodash.throttle';

const formEd = document.querySelector('.feedback-form');
const inputE = document.querySelector('input');
const inputM = document.querySelector('textarea');

let tempVault = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  tempVault = JSON.parse(localStorage.getItem('feedback-form-state'));
  inputE.value = tempVault.email;
  inputM.value = tempVault.message;
}

formEd.addEventListener(
  'input',
  throttle(event => {
    tempVault[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(tempVault));
  }),
  500
);

formEd.addEventListener('submit', event => {
  event.preventDefault();
  formEd.reset();
  console.log(tempVault);

  localStorage.removeItem('feedback-form-state');

  tempVault = {
    email: '',
    message: '',
  };
});
