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

// Function to treate the name currencies 

async function currenciesNames() {

  const currencisJSON = await fetch(API_CURRENCIES_URL)

  const currenciesNameObject = await currencisJSON.json()

  // Array with all currencies ISO codes 
  const currenciesISOcodes = Object.getOwnPropertyNames(currenciesNameObject)

  //Array with all currencies names

  const currenciesnames = Object.values(currenciesNameObject)

  let setCurrency1 =document.getElementById('st')

  setCurrency1.innerHTML = '<option id="select1" value="">Select your currency</option>'

  for (let i = 0; i < 537; i++) {

    setCurrency1.innerHTML += '<option id="" value="">' + currenciesnames[i] + '</option>'

  }
}

currenciesRates()
currenciesNames()



