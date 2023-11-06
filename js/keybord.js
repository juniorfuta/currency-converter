
function writeInput(value) {

  input1.addEventListener('focus', function() {

    let input1 = document.getElementById('input1');

    const currentValue = input1.value;
  
    const newValue = currentValue + value;
  
    input1.value = newValue;²a
  })

}

function cleanInput() {

  const numbInput = document.getElementById('input1');

  numbInput.value = "";
}
