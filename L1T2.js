// red
const button1 = document.getElementById("redButton");

button1.addEventListener("click", function() {
  button1.style.backgroundColor = "red";
});
// green
const button2 = document.getElementById("greenButton");

button2.addEventListener("click", function() {
  button2.style.backgroundColor = "green";
});

// alert message
const currentTime = new Date();
const hour = currentTime.getHours();

if (hour >= 6 && hour < 12) {
  alert("Good morning!");
} else if (hour >= 12 && hour < 18) {
  alert("Good afternoon!");
} else if (hour >= 18 && hour < 24) {
  alert("Good evening!");
} else {
  alert("Good night!");
}

//calculator
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

add.addEventListener("click", function() {
  const sum = Number(num1.value) + Number(num2.value);
  result.textContent = "Result: " + sum;
});

clear.addEventListener("click", function() {
  num1.value = "";
  num2.value = "";
  result.textContent = "Result: ";
});