const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((input, index) => {
  input.addEventListener("input", function () {
    // Allow only digits
    input.value = input.value.replace(/\D/g, "");

    if (input.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      if (input.value === "" && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = "";
      } else {
        input.value = "";
      }
    }
  });
});