/*
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
*/

let input1 = document.getElementById('input1')

let input2 = document.getElementById('input2')

function inputOneHandler() {

  const body = document.body

  body.setAttribute("data-side", "input1")
}

function inputTwoHandler() {

  const body = document.body

  body.setAttribute("data-side", "input2")
}

input1.addEventListener('focus', inputOneHandler)

input2.addEventListener('focus', inputTwoHandler)

function getInput() {

  const currentSide = document.body.getAttribute('data-side')

  currentSide === 'input2' ? 'input2' : 'input1'

  return currentSide
}

function writeInput(value) {

  const nameInput = getInput()

  const currentValue = nameInput.value;

  const newValue = currentValue + value;

  nameInput.value = newValue
}

function cleanInput() {

  const numbInput = document.getElementById('input1');

  numbInput.value = "";
}
