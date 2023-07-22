// Import the PasswordsGenerator class from passwordsGenerator.js
// Make sure to include passwordsGenerator.js before this script in the HTML file.

const generator = new PasswordsGenerator();

const lengthInput = document.getElementById('length');
const countInput = document.getElementById('count');
const upperCheckbox = document.getElementById('upper');
const lowerCheckbox = document.getElementById('lower');
const numbersCheckbox = document.getElementById('numbers');
const symbolCheckbox = document.getElementById('symbol');
const pinCheckbox = document.getElementById('pin');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const generatedPasswordsDiv = document.getElementById('generated-passwords');

generateBtn.addEventListener('click', () => {
  generator.SetLength(parseInt(lengthInput.value));
  generator.SetCount(parseInt(countInput.value));
  generator.SetUpper(upperCheckbox.checked);
  generator.SetLower(lowerCheckbox.checked);
  generator.SetNumbers(numbersCheckbox.checked);
  generator.SetSymbol(symbolCheckbox.checked);
  generator.SetPIN(pinCheckbox.checked);

  const passwords = generator.GeneratePasswords();
  displayGeneratedPasswords(passwords);
});

copyBtn.addEventListener('click', () => {
  const passwordsList = document.getElementById('passwords-list');
  const textArea = document.createElement('textarea');
  passwordsList.appendChild(textArea);
  textArea.value = passwordsList.textContent;
  textArea.select();
  document.execCommand('copy');
  passwordsList.removeChild(textArea);
  alert('Passwords copied to clipboard!');
});

function displayGeneratedPasswords(passwords) {
  let html = '<h2>Generated Passwords:</h2>';
  html += '<ul id="passwords-list">';
  passwords.forEach(password => {
    html += `<li>${password}</li>`;
  });
  html += '</ul>';

  generatedPasswordsDiv.innerHTML = html;
}
