function convertTemperature() {
  const temperatureInput = document.getElementById("temperature");
  const unitSelect = document.getElementById("unit");
  const resultDiv = document.getElementById("result");

  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    resultDiv.innerText = "Please enter a valid number";
    return;
  }

  let result;

  switch (unit) {
    case "celsius":
      result = temperature;
      break;
    case "kelvin":
      result = temperature + 273.15;
      break;
    case "fahrenheit":
      result = (temperature - 32) * (5 / 9);
      break;
    default:
      result = "Invalid unit";
  }

  resultDiv.innerText = `Result: ${result.toFixed(2)} ${unit}`;
}
