const registerBtn = document.querySelector("button");
registerBtn.addEventListener('click', stylePassInputs);

const passOriginalInput = document.querySelector("#password");
const passConfirmInput = document.querySelector("#password-confirm");
const passInputs = [passOriginalInput, passConfirmInput];
const para = document.querySelector(".pass-warning");

function stylePassInputs() {
  let validationResult = validatePasswords();
  toggleStyleClass(validationResult);
}

function validatePasswords() {
  const passOriginalValue = passOriginalInput.value;
  const passConfirmValue = passConfirmInput.value;

  return passOriginalValue === passConfirmValue ? true : false;
}

function toggleStyleClass(validationResult) {
  passInputs.forEach((input) => {
    input.classList.remove('invalid-input');
  });
  para.textContent  = "";
  passConfirmInput.removeEventListener('input', stylePassInputs);

  if (validationResult === false) {
    passInputs.forEach((input) => {
      input.classList.add('invalid-input');
    });
    para.textContent = "* Passwords do not match";
    passConfirmInput.addEventListener('input', stylePassInputs);
  };
}