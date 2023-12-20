const registerBtn = document.querySelector("button");
registerBtn.addEventListener('click', validateInputs);

const passOriginalInput = document.querySelector("#password");
const passConfirmInput = document.querySelector("#password-confirm");
const passInputs = [passOriginalInput, passConfirmInput];
const emailInput = document.querySelector("#email");
const para = document.querySelector(".pass-warning");
const form = document.querySelector("form");

function validateInputs() {
  let checkEmailResult = checkEmail();
  let validationResult = checkPasswords();
  toggleStyleClass(validationResult);
  if (validationResult === true) {
    changeEventListener();
  }
}

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

function toggleStyleClass(validationResult) {
  passInputs.forEach((input) => {
    input.classList.remove('invalid-input');
  });
  para.textContent  = "";
  passConfirmInput.removeEventListener('input', validateInputs);

  if (validationResult === false) {
    passInputs.forEach((input) => {
      input.classList.add('invalid-input');
    });
    para.textContent = "* Passwords do not match";
    passConfirmInput.addEventListener('input', validateInputs);
  };
}

function changeEventListener() {
  registerBtn.removeEventListener('click', validateInputs);
  registerBtn.addEventListener('click', () => {
    if (form.checkValidity()) {
      form.submit()
    } else {
      window.alert("You must fill all required fields correctly.");
    }
});
}