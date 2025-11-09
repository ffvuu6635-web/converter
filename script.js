const input = document.getElementById('kilometers');
const convertBtn = document.getElementById('convert');
const clearBtn = document.getElementById('clear');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const km = parseFloat(input.value);

  if (isNaN(km) || km < 0) {
    result.textContent = "⚠️ Please enter a valid positive number.";
    result.style.color = "red";
  } else {
    const miles = km * 0.621371;
    result.textContent = ${km} kilometers = ${miles.toFixed(2)} miles;
    result.style.color = "green";
  }
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  result.textContent = '';
});