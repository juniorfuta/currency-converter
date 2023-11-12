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

function generateInputEvent() {

  var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true
  });

  var inputElement = document.getElementById('input1');

  inputElement.dispatchEvent(inputEvent);
}

function writeInput(value) {

  const nameInput = getInput()

  if (nameInput === 'input1') {

    const currentValue = input1.value

    const newValue = currentValue + value

    input1.value = newValue

    generateInputEvent()

  } else {

    const currentValue = input2.value

    const newValue = currentValue + value

    input2.value = newValue
  }
}

function cleanInput() {

  const nameInput = getInput()

  if (nameInput === 'input1') {

    input1.value = ''

  } else {

    input2.value = ''
  }
}

function clearInput() {

  getInputValue = getElementById('input1')

  currentValue = getInputValue.value;

  if (currentValue === 'NaN') {
    getInputValue.value = ''
  }
}

function backSpace() {

  const nameInput = getInput()

  if (nameInput === 'input1') {

    const currentValue = input1.value

    let convertToArray = Array.from(String(currentValue), String);

    let getArraylength = convertToArray.length

    let getTheLastTermIndex = getArraylength - 1

    convertToArray[getTheLastTermIndex] = ''

    number = convertToArray.join('')

    input1.value = number

  } else {

    const currentValue = input2.value

    let convertToArray = Array.from(String(currentValue), String);

    let getArraylength = convertToArray.length

    let getTheLastTermIndex = getArraylength - 1

    convertToArray[getTheLastTermIndex] = ''

    let number = convertToArray.join('')

    input2.value = number

  }
}