const input = document.querySelector('.searchBlock');
const conteiner = document.querySelector('.searchConteiner');
const btnSubmit = document.querySelector('.searchBtn');
const form = document.querySelector('form');
const state = {
  form: {
    valid: false,
    validMinLength: false,
    validMaxLength: false,
    validSibvols: false,
    input: '',
  },
};
const Reg = /[!@#$%^&*()]/;

const validate = (elem) => {
  state.form.valid = false;
  if (elem.target.value.length >= 4) {
    state.form.validMinLength = true;
  } else {
    state.form.validMinLength = false;
  }
  if (elem.target.value.length <= 12) {
    state.form.validMaxLength = true;
  } else {
    state.form.validMaxLength = false;
  }
  if (!Reg.test(elem.target.value)) {
    state.form.validSibvols = true;
  } else {
    state.form.validSibvols = false;
  }
  if (state.form.validMinLength === true
     && state.form.validMaxLength === true
     && state.form.validSibvols === true) {
    state.form.valid = true;
  } else {
    state.form.valid = false;
  }
};
input.addEventListener('input', validate);

const submit = (e) => {
  e.preventDefault();
  if (state.form.valid === true) {
    conteiner.classList.remove('unvalid');
    conteiner.classList.add('valid');
    form.submit();
  } else {
    conteiner.classList.remove('valid');
    conteiner.classList.add('unvalid');
  }
};
btnSubmit.addEventListener('click', submit);
