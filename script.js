// SET DEFAULT ACTIONS
const form = document.querySelector("form");
const registerBtn = document.querySelector("button");
registerBtn.addEventListener('click', validateInputs);
function validateInputs() {
  let checkEmailResult = checkEmail();
  let checkPassResult = checkPasswords();
  if (checkEmailResult && checkPassResult) {
    form.submit();
  };
  if (checkEmailResult === false) {
    displayInvalidEmailStyles();
    addEmailInputListener();
  };
  if (checkPassResult === false) {
    displayInvalidPassStyles();
    addPassInputListener();
  };
}


// REFERENCE CONST'S and FUNCTIONS
const emailInput = document.querySelector("#email");
const emailWarningPara = document.querySelector(".email-warning");
const passOriginalInput = document.querySelector("#password");
const passConfirmInput = document.querySelector("#password-confirm");
const passInputs = [passOriginalInput, passConfirmInput];
const passWarningPara = document.querySelector(".pass-warning");

function checkEmail() {
  const emailValue = emailInput.value;
  const emailRegex = /^.+@.+\..+$/;
  return emailRegex.test(emailValue);
}
function checkPasswords() {
  const passOriginalValue = passOriginalInput.value;
  const passConfirmValue = passConfirmInput.value;
  return passOriginalValue === passConfirmValue ? true : false;
}

function displayInvalidEmailStyles() {
  emailInput.classList.add('invalid-input');
  emailWarningPara.textContent = "* Invalid email. Use the format email@address.com";
}
function displayInvalidPassStyles() {
  passInputs.forEach((input) => {
    input.classList.add('invalid-input');
  });
  passWarningPara.textContent = "* Passwords must match";
}

function removeInvalidEmailStyles() {
  emailInput.classList.remove('invalid-input');
  emailWarningPara.textContent = "";
}
function removeInvalidPassStyles() {
  passInputs.forEach((input) => {
    input.classList.remove('invalid-input');
  });
  passWarningPara.textContent = "";
}

function addEmailInputListener() {
  emailInput.addEventListener('input', () => {
    let result = checkEmail();
    if (result === false) {
      displayInvalidEmailStyles();
    } else if (result === true) {
      removeInvalidEmailStyles();
    }
  });
}
function addPassInputListener() {
  passConfirmInput.addEventListener('input', () => {
    let result = checkPasswords();
    if (result === false) {
      displayInvalidPassStyles();
    } else if (result === true) {
      removeInvalidPassStyles();
    }
  });
}