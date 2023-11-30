/*
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
*/
const API_CURRENCIES_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'

let currencyList1 = document.getElementById('select--1')

let currencyList2 = document.getElementById('select--2')

async function fillSelectorHandler() {

  const currencisJSON = await fetch(API_CURRENCIES_URL)

  const currenciesNameObject = await currencisJSON.json()

  const currenciesISOcodes = Object.getOwnPropertyNames(currenciesNameObject)

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
    '"' + ' value="' + currenciesISOcodes[475] + '">' + currenciesnames[474] +
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

fillSelectorHandler()


function keepUserCurrencyChoice() {

  let choice1 = localStorage.getItem('valueSelectOne0')

  let  choice2 = localStorage.getItem('valueSelectTwo0')

  if(choice1!='' && choice2!=''){

    currencyList1.value = choice1

    currencyList2.value = choice2
  }
}