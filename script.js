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
    submitButton.disabled = false;
  }
});

function counter() {
  const textarea = document.getElementById('textarea').value;
  document.getElementById('counter').innerText = 500 - textarea.length;
}

counter();

function nameLastName() {
  let string = '';
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  if (name != null && lastName != null) {
    string = `Nome: ${name} ${lastName}`;
  }
  return string;
}

function email() {
  let stringEmail = '';
  const emailName = document.querySelector('#input-email').value;
  if (emailName != null) {
    stringEmail = `Email: ${emailName}`;
  }
  return stringEmail;
}

const house = document.getElementById('house');
function pickHouse() {
  return `Casa: ${house.value}`;
}

house.addEventListener('change', pickHouse);

function pickFamlily() {
  const family = document.getElementsByName('family');
  let array = '';
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      array = family[index].value;
    }
  }
  return `Família: ${array}`;
}

function pickSubject() {
  const subject = document.getElementsByClassName('subject');
  let array = ' ';
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      array += `${subject[index].value}, `;
    }
  }
  return `Matérias: ${array}`;
}

function pickNote() {
  const rate = document.getElementsByName('rate');
  let array = ' ';
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      array += rate[index].value;
    }
  }
  return `Avaliação: ${array}`;
}

function reviewHere() {
  const review = document.getElementById('textarea').value;
  return `Observações: ${review}`;
}

submitButton.addEventListener('click', () => {
  const form = document.getElementById('evaluation-form');
  const quebraLinha = '<br>';
  const nameAndEmail = nameLastName() + quebraLinha + email() + quebraLinha;
  const houseFamily = pickHouse() + quebraLinha + pickFamlily() + quebraLinha;
  const subjectReview = pickSubject() + quebraLinha + pickNote() + quebraLinha + reviewHere();

  form.innerHTML = nameAndEmail + houseFamily + subjectReview;
});
