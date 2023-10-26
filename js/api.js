/*
By: PalancaTechnologies Softwares 
CEO: Júnior Futa
a.k.a: JFuta21
E-mail: juniorfuta94@gmail.com
Instagram: @juniorfuta
*/

//Integrating API

const API_RATES = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'

const API_CURRENCIES = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'

function currenciesRates(){

fetch(API_RATES)

  .then(response =>
    response.json())

  .then(data =>
    console.log(data))


}