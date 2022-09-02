// Import stylesheets
import './style.css';

// Write Javascript code!
const form = document.getElementById('form-subscription');
console.log(form);

// Listening submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // const name = document.getElementById('input-name').value;
  // const price = document.getElementById('input-price').value;
  // const date = document.getElementById('input-date').value;

  // console.log(name, price, date);

  // Formdata
  const formdata = new FormData(e.target);
  console.log('formdata', Object.fromEntries(formdata));
  const subscription = Object.fromEntries(formdata);

  // Iteration elements
  // const inputs = e.target.elements;
  // const subscription = {};

  // for (let i = 0; i < inputs.length; i++) {
  //   const element = inputs.item(i);
  //   if (element.type != 'submit') {
  //     subscription[element.name] = element.value;
  //   }
  // }

  console.log(subscription);

  const template = document.querySelector('#template-sub-item').content;
  console.log(template);

  template.querySelector('.subscription-name').textContent = subscription.name;
  template.querySelector('.subscription-price').textContent =
    subscription.price;
  template.querySelector('.subscription-date').textContent = subscription.date;

  const clone = template.cloneNode(true);

  const subscriptionList = document.getElementById('subscription-list');
  subscriptionList.appendChild(clone);
});
