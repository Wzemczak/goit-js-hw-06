const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {};
  const formElements = loginForm.elements;

  for (const element of formElements) {
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }

  if (!formData.email || !formData.password) {
    alert("Proszę wypełnić wszystkie pola formularza.");
  } else {
    console.log(formData);
    loginForm.reset();
  }
});
