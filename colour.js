const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("button");
const colorSpan = document.getElementById("color");
const heading = document.getElementById("heading");

function generateColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[Math.floor(Math.random() * colors.length)];
  }
  return hexColor;
}

function changeColor() {
  const randomColor = generateColor();
  
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  heading.style.color = randomColor;
}

button.addEventListener("click", changeColor);
