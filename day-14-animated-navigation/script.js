const btn = document.getElementById("btn");
const navigation = document.querySelector("nav");

console.log(btn);

btn.addEventListener("click", () => {
  console.log("Hello");
  navigation.classList.toggle("active");
});
