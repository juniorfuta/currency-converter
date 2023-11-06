
function writeInput(value) {

  let input = document.getElementById('input1');
  const currentValue = input.value;
  const newValue = currentValue + value;
  input.value = newValue;
}

function cleanInput() {
  const numbInput = document.getElementById('input1');
  numbInput.value = "";
}