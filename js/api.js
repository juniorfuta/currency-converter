/*
By: PalancaTechnologies Softwares 
CEO: Júnior Futa
a.k.a: JFuta21
E-mail: juniorfuta94@gmail.com
Instagram: @juniorfuta
*/

//Integrating API

const API_RATES_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'

const API_CURRENCIES_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'

const currencyList = document.getElementsByClassName("subject")

function currenciesRates() {

  fetch(API_RATES_URL)

    .then(response =>
      response.json())

    .then(data =>
      console.log(data.eur.brl))
}

function currenciesNames() {

  fetch(API_CURRENCIES_URL)

    .then(response =>
      response.json())

    .then(data =>
      console.log(Object.getOwnPropertyNames(data)))
}

currenciesRates()
currenciesNames()

