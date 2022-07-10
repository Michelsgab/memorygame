const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");

const validateInput = ({ target }) => {
  if (target.value.length) {
    button.removeAttribute("disabled");
  }
};

input.addEventListener("input", validateInput);
