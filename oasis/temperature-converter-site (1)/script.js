function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultParagraph = document.getElementById('result');

    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
        alert('Please enter a valid number.');
        return;
    }

    const celsius = (fahrenheit - 32) * 5/9;
    resultParagraph.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
}

document.getElementById('convertBtn').addEventListener('click', convertToCelsius);
