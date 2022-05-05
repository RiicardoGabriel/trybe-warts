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
