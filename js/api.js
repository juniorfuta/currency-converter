/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */

//Integrating API

clearLocalStorage()


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

  let getCurrentLanguage = localStorage.getItem("locale")

  if (getCurrentLanguage === "en") {

    currencyList1.innerHTML = '<option id="select1" value="">Select your currency</option>'

    currencyList2.innerHTML = '<option id="select2" value="">Select your currency</option>'

  } else if (getCurrentLanguage === "pt") {

    currencyList1.innerHTML = '<option id="select1" value="">Selecione a Moeda</option>'

    currencyList2.innerHTML = '<option id="select2" value="">Selecione a Moeda</option>'

  } else {

    currencyList1.innerHTML = '<option id="select1" value="">Veuillez Selectioner la Divise</option>'

    currencyList2.innerHTML = '<option id="select2" value="">Veuillez Selectioner la Divise</option>'
  }

  currencyList1.innerHTML += '<option id="' + currenciesISOcodes[23] +
    '"' + ' value="' + currenciesISOcodes[23] + '">' + currenciesnames[23] +
    ' (' + currenciesISOcodes[23].toUpperCase() + ')' + '</option>'

  currencyList1.innerHTML += '<option id="' + currenciesISOcodes[153] +
    '"' + ' value="' + currenciesISOcodes[153] + '">' + currenciesnames[153] +
    ' (' + currenciesISOcodes[153].toUpperCase() + ')' + '</option>'

  currencyList1.innerHTML += '<option id="' + currenciesISOcodes[474] +
    '"' + ' value="' + currenciesISOcodes[474] + '">' + currenciesnames[474] +
    ' (' + currenciesISOcodes[474].toUpperCase() + ')' + '</option>'

  currencyList2.innerHTML += '<option id="' + currenciesISOcodes[23] +
    '"' + ' value="' + currenciesISOcodes[23] + '">' + currenciesnames[23] +
    ' (' + currenciesISOcodes[23].toUpperCase() + ')' + '</option>'

  currencyList2.innerHTML += '<option id="' + currenciesISOcodes[153] +
    '"' + ' value="' + currenciesISOcodes[153] + '">' + currenciesnames[153] +
    ' (' + currenciesISOcodes[153].toUpperCase() + ')' + '</option>'

  currencyList2.innerHTML += '<option id="' + currenciesISOcodes[474] +
    '"' + ' value="' + currenciesISOcodes[474] + '">' + currenciesnames[474] +
    ' (' + currenciesISOcodes[474].toUpperCase() + ')' + '</option>'

  for (let i = 0; i < 537; i++) {

    currencyList1.innerHTML += '<option id="' + currenciesISOcodes[i] +
      '"' + ' value="' + currenciesISOcodes[i] + '">' + currenciesnames[i] +
      ' (' + currenciesISOcodes[i].toUpperCase() + ')' + '</option>'

    currencyList2.innerHTML += '<option id="' + currenciesISOcodes[i] +
      '"' + ' value="' + currenciesISOcodes[i] + '">' + currenciesnames[i] +
      ' (' + currenciesISOcodes[i].toUpperCase() + ')' + '</option>'

  }
  keepUserCurrencyChoice()
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

function hystoryDirect() {

  input1Select = localStorage.getItem('valueSelectOne')

  input2Select = localStorage.getItem('valueSelectTwo')

  inputselect1 = input1Select.toUpperCase()

  inputselect2 = input2Select.toUpperCase()

  inputvl1 = input1Value.value

  inputvl10 = Math.round(inputvl1)

  inputvl100 = inputvl10.toLocaleString()

  inputvl2 = input2Value.value

  inputvl20 = Math.round(inputvl2)

  inputvl200 = inputvl20.toLocaleString()

  if (input1Select != '' && input2Select != '') {
    history.innerHTML += '<p>' + inputvl100 + ' ' + '<span class ="divisesNames">' + inputselect1 + '</span>' +
      ' = ' + inputvl200 + ' ' + '<span class ="divisesNames">' + inputselect2 + '</span>' + '</p>'
  }
}

function clearLocalStorage() {

  const value1storage = localStorage.setItem("valueSelectOne", '')

  const value2storage = localStorage.setItem("valueSelectTwo", '')
}


function generateInputO() {

  var inputEvent = new Event('change', {
    bubbles: true,
    cancelable: true
  });

  var inputElement = document.getElementById('select--1');

  inputElement.dispatchEvent(inputEvent);
}

function generateInput1() {

  var inputEvent = new Event('change', {
    bubbles: true,
    cancelable: true
  });

  var inputElement = document.getElementById('select--2');

  inputElement.dispatchEvent(inputEvent);
}

function keepUserCurrencyChoice() {

  let choice1 = localStorage.getItem('valueSelectOne0')

  let  choice2 = localStorage.getItem('valueSelectTwo0')

  if(choice1!='' && choice2!=''){

    currencyList1.value = choice1

    currencyList2.value = choice2
  
  }

}



convertion()



