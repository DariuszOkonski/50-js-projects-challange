const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.parentElement.classList.toggle("active"));
  });
});
