function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter a value";
    return;
  }

  let value = Number(input);
  let tempInCelsius;

  // Convert FROM → Celsius
  if (from === "C") {
    tempInCelsius = value;
  } else if (from === "K") {
    tempInCelsius = value - 273.15;
  } else if (from === "F") {
    tempInCelsius = ((value - 32) * 5) / 9;
  }

  let finalTemp;

  // Convert Celsius → TO
  if (to === "C") {
    finalTemp = tempInCelsius;
  } else if (to === "K") {
    finalTemp = tempInCelsius + 273.15;
  } else if (to === "F") {
    finalTemp = (tempInCelsius * 9) / 5 + 32;
  }

  result.textContent = `${finalTemp.toFixed(2)} °${to}`;
}
