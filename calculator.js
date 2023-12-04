const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNum = display.textContent;

    if (!action) {
      if (displayNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "minus" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
    }
    // Array.from(key.parentNode.children).forEach((k) =>
    //   k.classList.remove("is-depressed")
    // );
    if (action === "decimal") {
      display.textContent = displayNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
  }
});
