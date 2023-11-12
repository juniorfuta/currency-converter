/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */

//Integrating API

const API_RATES_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'

const API_CURRENCIES_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'

let currencyList1 = document.getElementById('select--1')

let currencyList2 = document.getElementById('select--2')

let history = document.getElementById('historyContent')

let input1Value = document.getElementById('input1')

let input2Value = document.getElementById('input2')

// Function to treate the name currencies 

async function currenciesNames() {

  const currencisJSON = await fetch(API_CURRENCIES_URL)

  const currenciesNameObject = await currencisJSON.json()

  // Array with all currencies ISO codes 
  const currenciesISOcodes = Object.getOwnPropertyNames(currenciesNameObject)

  //Array with all currencies names

  const currenciesnames = Object.values(currenciesNameObject)

  let getCurrentLanguage= localStorage.getItem ("locale")

  if (getCurrentLanguage==="en"){

    currencyList1.innerHTML = '<option id="select1" value="">Select your currency</option>'

    currencyList2.innerHTML = '<option id="select2" value="">Select your currency</option>'

  } else if (getCurrentLanguage==="pt") {

    currencyList1.innerHTML = '<option id="select1" value="">Selecione a Moeda</option>'

    currencyList2.innerHTML = '<option id="select2" value="">Selecione a Moeda</option>'

  } else {

    currencyList1.innerHTML = '<option id="select1" value="">Veuillez Selectioner la Disvise</option>'

    currencyList2.innerHTML = '<option id="select2" value="">Selecione a Moeda</option>'

  }

  for (let i = 0; i < 537; i++) {

    currencyList1.innerHTML += '<option id="' + currenciesISOcodes[i] +
      '"' + ' value="' + currenciesISOcodes[i] + '">' + currenciesnames[i] +
      ' (' + currenciesISOcodes[i].toUpperCase() + ')' + '</option>'

    currencyList2.innerHTML += '<option id="' + currenciesISOcodes[i] +
      '"' + ' value="' + currenciesISOcodes[i] + '">' + currenciesnames[i] +
      ' (' + currenciesISOcodes[i].toUpperCase() + ')' + '</option>'

  }
}

currenciesNames()

async function convertion() {

  //Recovering currencies Rates

  const currencisJSON = await fetch(API_RATES_URL)

  const currenciesRatesObject = await currencisJSON.json()

  //Recovering user's choice

  let userchoice_one = document.getElementById('select--1')

  let userchoice_two = document.getElementById('select--2')

  const ratesCurrencies = currenciesRatesObject.eur

  function recoverInput1() {
    
    const userchoiceValue1 = userchoice_one.value

    const userchoiceValue2 = userchoice_two.value
  
    let rate_input1 = ratesCurrencies[userchoiceValue1]
  
    let rate_input2 = ratesCurrencies[userchoiceValue2]

    function input1ConversionHandler () {

      input2Value.value = (rate_input2 * input1Value.value) / rate_input1

    }

    function input2ConversionHandler () {

      input1Value.value = (rate_input1 * (input2Value.value)) / rate_input2
    }

    input2Value.addEventListener('input', input2ConversionHandler)
    input1Value.addEventListener('input', input1ConversionHandler)
  }

  userchoice_one.addEventListener("change", recoverInput1)
  userchoice_two.addEventListener("change", recoverInput1)
}

// function hystoryDirect() {

//   history.innerHTML +="<p>"input1Value.value"</p>"  
// }

convertion()



