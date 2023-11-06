const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("Proszę wypełnić wszystkie pola formularza.");
  } else {
    console.log(formObject);
    loginForm.reset();
  }
});
