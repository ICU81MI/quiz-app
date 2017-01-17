let question = 'At what temp on the celcius scale does water freeze?';
let answer = prompt(question);
let resultDiv = document.getElementById('result');

if (answer == 0) {
  resultDiv.innerHTML = 'Correct!';
} else {
  resultDiv.innerHTML = 'That is not the correct answer.';
}
