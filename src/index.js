let currentDisplay = "";

function displayInput(value) {
  let display = document.getElementById("display");

  if (currentDisplay === " ") {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }

  display.value = currentDisplay;
}

function solveInput() {
  const output = document.getElementById("display");
  const result = eval(output.value);
  output.value = result;
}

function clearInput() {
  const display = document.getElementById("display");
  display.value = "";
  currentDisplay = "";
}

function clearLastInput() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.getElementById("display").value = currentDisplay;
}
