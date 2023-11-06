const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});
