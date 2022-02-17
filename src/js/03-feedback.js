import trottle from 'lodash.throttle';
import { Feedback } from './03-feedback-class';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form [name=email]'),
  message: document.querySelector('.feedback-form [name=message]'),
};

const key = 'feedback-form-state';

// const result = {};

// refs.form.addEventListener('input', trottle(onFormInput, 500));
// refs.form.addEventListener('submit', onSubmitForm);

// // const keys =
// if (localStorage.getItem(key)) {
//   const preloadSettings = JSON.parse(localStorage.getItem(key));
//   Object.keys(preloadSettings).forEach(el => {
//     console.log(refs[el].value);
//     refs[el].value = preloadSettings[el];
//     result[el] = preloadSettings[el];
//   });
// }

// function onFormInput(ev) {
//   const name = ev.target.name;
//   const value = ev.target.value;
//   result[name] = value;
//   localStorage.setItem(key, JSON.stringify(result));
// }

// function onSubmitForm(ev) {
//   ev.preventDefault();
//   console.log(result);
//   localStorage.removeItem(key);
//   Object.keys(result).forEach(el => {
//     refs[el].value = '';
//   });
// }

const form = new Feedback(refs, key);

refs.form.addEventListener('input', trottle(form.onFormInput.bind(form), 500));
refs.form.addEventListener('submit', form.onSubmitForm.bind(form));
form.checkStorage();
