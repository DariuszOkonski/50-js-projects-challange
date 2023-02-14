const navigation = document.getElementById("navigation");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
