const inputEm = document.getElementById('inputEmail');
const inputPass = document.getElementById('inputPassword');
const btnSubmit = document.getElementById('btn-submit');

function Entrar() {
  if (inputEm.value === 'tryber@teste.com' && inputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnSubmit.addEventListener('click', Entrar);

const checkAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

checkAgreement.addEventListener('click', () => {
  if (checkAgreement.checked === false) {
    submitButton.disabled = true;
  } else {
    document.getElementById('submit-btn').disabled = false;
  }
});

function counter() {
  const textarea = document.getElementById('textarea').value;
  document.getElementById('counter').innerText = 500 - textarea.length;
}

counter();

const inputName = document.getElementById('input-name').value;
const inputLastName = document.getElementById('input-lastname').value;

const inputEmail = document.getElementById('input-email').value;

const house = document.getElementById('house');
house.addEventListener('change', () => {
  console.log(house.value);
});

function pickFamlily() {
  const family = document.getElementsByClassName('trybe-family');
  let array = '';
  for (let index = 0; index < family.length; index += 0) {
    if (family[index].checked) {
      array = family[index].value;
    }
  }
  console.log(array);
}

submitButton.addEventListener('click', pickFamlily);