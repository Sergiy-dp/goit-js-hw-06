const refs = {
   counterValue: document.querySelector("#value"),
   decrementBtn: document.querySelector('[data-action="decrement"]'),
   incrementBtn: document.querySelector('[data-action="increment"]'),
};
let currentValue = 0;

refs.decrementBtn.addEventListener("click", decrementCounter);
refs.incrementBtn.addEventListener("click", incrementCounter);

function decrementCounter() {
  currentValue--;
  refs.counterValue.textContent = currentValue;
}

function incrementCounter() {
  currentValue++;
  refs.counterValue.textContent = currentValue;
}
