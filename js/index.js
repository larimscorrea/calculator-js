const $buttonsNumbers = document.querySelectorAll(".calculator__buttons--number");
const $buttonsOperators = document.querySelectorAll(".calculator__buttons--operator");
const $inputGetNumbers = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator__buttons--result");

let calculate = "";
let calculateConvertToNumber = 0;
let operator = null;

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    calculateConvertToNumber += Number($button.textContent);
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$buttonsOperators.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    calculateConvertToNumber += Number($button.textContent);
    $inputGetNumbers.value = calculate.replaceAll(" ", "");

    if ($button.textContent === "%") {
      operator = 0 % 0;
    }
    if ($button.textContent === "x") {
      operator = 0x0;
    }
    if ($button.textContent === "-") {
      operator = 0 - 0;
    }
    if ($button.textContent === "+") {
      operator = 0 + 0;
    }
  });
});

$buttonResult.addEventListener("click", function () {
  $result.textContent = calculateConvertToNumber;
  // $result.textContent = eval(calculate);
});
