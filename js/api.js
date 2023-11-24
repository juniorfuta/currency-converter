/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
*/

clearLocalStorage()

const API_RATES_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'

let history = document.getElementById('historyContent')

let input1Value = document.getElementById('input1')

let input2Value = document.getElementById('input2')

async function convertion() {

  const currencisJSON = await fetch(API_RATES_URL)

  const currenciesRatesObject = await currencisJSON.json()

  let userchoice_one = document.getElementById('select--1')

  let userchoice_two = document.getElementById('select--2')

  const ratesCurrencies = currenciesRatesObject.eur

  function retriveRate() {

    const userchoiceValue1 = userchoice_one.value

    const userchoiceValue2 = userchoice_two.value

    let value1storage = localStorage.setItem("valueSelectOne", userchoiceValue1)

    let value2storage = localStorage.setItem("valueSelectTwo", userchoiceValue2)

    let value10storage = localStorage.setItem("valueSelectOne0", userchoiceValue1)

    let value20storage = localStorage.setItem("valueSelectTwo0", userchoiceValue2)

    let rate_input1 = ratesCurrencies[userchoiceValue1]

    let rate_input2 = ratesCurrencies[userchoiceValue2]

    function input1ConversionHandler() {

      input2Value.value = (rate_input2 * input1Value.value) / rate_input1

    }

    function input2ConversionHandler() {

      input1Value.value = (rate_input1 * (input2Value.value)) / rate_input2
    }

    input2Value.addEventListener('input', input2ConversionHandler)
    input1Value.addEventListener('input', input1ConversionHandler)
  }

  userchoice_one.addEventListener("change", retriveRate)
  userchoice_two.addEventListener("change", retriveRate)
}

function clearLocalStorage() {

  const value1storage = localStorage.setItem("valueSelectOne", '')

  const value2storage = localStorage.setItem("valueSelectTwo", '')
}

convertion()



