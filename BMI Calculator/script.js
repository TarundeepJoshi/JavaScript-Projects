const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Invalid value`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Invalid value`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${bmi}`;

    var result2 = "";
    if (bmi < 18.5) {
      result2 = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result2 = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
      result2 = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
      result2 = "Obese";
    } else if (35 <= bmi) {
      result2 = "Extremely obese";
    }

    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">${result2}</span>`;
  }
});
