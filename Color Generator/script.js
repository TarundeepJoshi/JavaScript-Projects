const outputColor = document.querySelector("#output-color span");
const output = document.getElementById("output");
const genBtn = document.getElementById("gen-btn");
const copyBtn = document.getElementById("copy-btn");

let color;

const randomColor = () => {
  const hexValues = "0123456789ABCDEF";
  color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }

  output.value = color;
  outputColor.style.backgroundColor = color;
};

copyBtn.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  alert(`COLOR (${color}) COPIED`);
});

window.onload = randomColor;
genBtn.addEventListener("click", randomColor);
