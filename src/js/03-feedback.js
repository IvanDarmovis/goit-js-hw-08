import trottle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form [name=email]'),
  message: document.querySelector('.feedback-form [name=message]'),
};

const result = {};

refs.form.addEventListener('input', trottle(onFormInput, 500));
refs.form.addEventListener('submit', onSubmitForm);

// const keys =
if (localStorage.getItem('feedback-form-state')) {
  const preloadSettings = JSON.parse(localStorage.getItem('feedback-form-state'));
  Object.keys(preloadSettings).forEach(el => {
    console.log(refs[el].value);
    refs[el].value = preloadSettings[el];
    result[el] = preloadSettings[el];
  });
}

function onFormInput(ev) {
  const name = ev.target.name;
  const value = ev.target.value;
  result[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
}

function onSubmitForm(ev) {
  ev.preventDefault();
  console.log(result);
  localStorage.removeItem('feedback-form-state');
  Object.keys(result).forEach(el => {
    refs[el].value = '';
  });
}
