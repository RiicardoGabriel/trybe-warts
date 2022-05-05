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
