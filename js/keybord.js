/*
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
*/

let input1 = document.getElementById('input1')

let input2 = document.getElementById('input2')

function writeInput(value) {

    var focusedInput = document.activeElement;

    if (focusedInput===input1){

      const currentValue1 = input1.value;
  
      const newValue1 = currentValue1 + value;
    
      input1.value = newValue1;

    } else if (focusedInput===input2) {

    const currentValue = input2.value;
  
    const newValue = currentValue + value;
  
    input2.value = newValue; }
}

function cleanInput() {

  const numbInput = document.getElementById('input1');

  numbInput.value = "";
}
