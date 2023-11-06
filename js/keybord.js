let input1 = document.getElementById('input1');

function writeInput(value) {

  input1.addEventListener('focusin', function() {

    const currentValue = input1.value;
  
    const newValue = currentValue + value;
  
    input1.value = newValue;
  })

  input2.addEventListener('focus', function() {

    let input2 = document.getElementById('input2');

    const currentValue = input2.value;
  
    const newValue = currentValue + value;
  
    input2.value = newValue;
  })

}

function cleanInput() {

  const numbInput = document.getElementById('input1');

  numbInput.value = "";
}
