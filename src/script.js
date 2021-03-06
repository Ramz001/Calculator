const numbers = document.querySelectorAll("[data-number]");
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("[data-delete]");
const resetBtn = document.querySelector("[data-reset]");
const operationBtns = document.querySelectorAll("[data-operation]");
const decimalBtn = document.querySelector("[data-decimal]");
const equalBtn = document.querySelector("[data-equal]");
const rangeBtn = document.querySelector("[data-range]");

let buffer = "";

// Event listeners
numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    const currentNumber = e.currentTarget.dataset.number;
    buffer += currentNumber;

    displayElement(buffer);
  });
});

resetBtn.addEventListener("click", () => {
  display.value = "";
  buffer = "";
});

operationBtns.forEach((op) => {
  op.addEventListener("click", (e) => {
    const currentOperation = e.currentTarget.dataset.operation;
    buffer += currentOperation;
    displayElement(buffer);
  });
});

decimalBtn.addEventListener("click", (e) => {
  const decimal = e.currentTarget.dataset.decimal;
  buffer += decimal;
  displayElement(buffer);
});

equalBtn.addEventListener("click", () => {
  buffer = eval(buffer);
  if (buffer === undefined) return "";
  displayElement(buffer);
});

deleteBtn.addEventListener("click", () => {
  buffer = buffer.toString().slice(0, -1);
  displayElement(buffer);
});

function displayElement(element) {
  display.value = element;
}

window.addEventListener("DOMContentLoaded", () => {
  rangeBtn.value = 1;
});

rangeBtn.addEventListener("change", () => {
  if (rangeBtn.value == 1) {
    document.body.classList.remove("theme-2");
    document.body.classList.remove("theme-3");
  }

  if (rangeBtn.value == 2) {
    document.body.classList.add("theme-2");
    document.body.classList.remove("theme-3");
  }
  if (rangeBtn.value == 3) {
    document.body.classList.add("theme-3");
    document.body.classList.remove("theme-2");
  }
});
