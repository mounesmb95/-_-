// Function to convert temperature
function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect");
    const result = document.getElementById("result");

    const temperature = parseFloat(temperatureInput);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        const fahrenheit = (temperature * 9/5) + 32;
        result.innerText = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        result.innerText = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }
}

// Event listener for the "Convert" button
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);
