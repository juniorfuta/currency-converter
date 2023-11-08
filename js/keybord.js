/*
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
*/

let input1 = document.getElementById('input1')

let input2 = document.getElementById('input2')

function writeInput(value) {

    const currentValue1 = input1.value;
  
    const newValue1 = currentValue1 + value;
  
    input1.value = newValue1;


    const currentValue = input2.value;
  
    const newValue = currentValue + value;
  
    input2.value = newValue;
}

function cleanInput() {

  const numbInput = document.getElementById('input1');

  numbInput.value = "";
}
