const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const heightInput = document.querySelector("#height").value;
  const weightInput = document.querySelector("#weight").value;

  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  const results = document.querySelector("#results");

  // Validation
  if (!heightInput || height <= 0 || isNaN(height)) {
    results.innerHTML = "<strong>❌ Please enter a valid height ❌<strong>";
    return;
  }

  if (!weightInput || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "<strong>❌ Please enter a valid weight ❌</strong>";
    return;
  }

  // BMI calculation
  bmi = (weight / (height / 100) ** 2).toFixed(2);

  // Display result
  // results.innerHTML = `Your BMI is <strong>${bmi}</strong>`

  let color = "";
  let status = "";

  if (bmi < 18.6) {
    color = "orange";
    status = "Underweight";
  } else if (bmi <= 24.9) {
    color = "green";
    status = "Normal";
  } else {
    color = "red";
    status = "Overweight";
  }

  results.innerHTML = `Your BMI is <strong>${bmi}</strong><br>Status: <strong>${status}</strong>`;
  results.style.color = color;
});