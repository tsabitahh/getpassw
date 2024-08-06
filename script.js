// input generated
const passwordOutput = document.querySelector('#password-output');
const lengthInput = document.querySelector('#length-input');
const uppercaseInput = document.querySelector('#uppercase-input');
const lowercaseInput = document.querySelector('#lowercase-input');
const numbersInput = document.querySelector('#numbers-input');
const symbolsInput = document.querySelector('#symbols-input');
const generateButton = document.querySelector('#generate-btn');

// random characters
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
  const length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 8 || length > 32) {
    alert('Please enter a valid password length between 8 and 32.');
    return;
  }
  let password = '';
  const characterFuncs = [];
  if (uppercaseInput.checked) {
    characterFuncs.push(getRandomUpper);
  }
  if (lowercaseInput.checked) {
    characterFuncs.push(getRandomLower);
  }
  if (numbersInput.checked) {
    characterFuncs.push(getRandomNumber);
  }
  if (symbolsInput.checked) {
    characterFuncs.push(getRandomSymbol);
  }

  // alert pop-up box
  if (characterFuncs.length === 0) {
    alert('Please select at least one type of character.');
    return;
  }
  for (let i = 0; i < length; i++) {
    const randomFunc = characterFuncs[Math.floor(Math.random() * characterFuncs.length)];
    password += randomFunc();
  }
  passwordOutput.textContent = password;
};

// Password output
generateButton.addEventListener('click', generatePassword);
