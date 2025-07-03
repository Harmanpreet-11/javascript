  const form = document.querySelector('#bmi-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const height = parseFloat(document.querySelector('#height').value);
      const weight = parseFloat(document.querySelector('#weight').value);
      const results = document.querySelector('#results');

      if (!height || height <= 0) {
        results.innerHTML = `❌ Please enter a valid height.`;
      } else if (!weight || weight <= 0) {
        results.innerHTML = `❌ Please enter a valid weight.`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `✅ Your BMI is <strong>${bmi}</strong>`;
      }
    });