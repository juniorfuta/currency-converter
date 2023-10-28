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

let currencyList1 = document.getElementById('select--1')

let currencyList2 = document.getElementById('select--2')

// Function to treate the name currencies 

async function currenciesNames() {

  const currencisJSON = await fetch(API_CURRENCIES_URL)

  const currenciesNameObject = await currencisJSON.json()

  // Array with all currencies ISO codes 
  const currenciesISOcodes = Object.getOwnPropertyNames(currenciesNameObject)

  //Array with all currencies names

  const currenciesnames = Object.values(currenciesNameObject)

  currencyList1.innerHTML = '<option id="select1" value="tttt">Select your currency</option>'

  currencyList2.innerHTML = '<option id="select2" value="">Select your currency</option>'

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

  userchoice_one.addEventListener("change", function () {

    const userchoiceValue = userchoice_one.value

    const ratesCurrencies = currenciesRatesObject.eur

    let rate_input1 = ratesCurrencies[userchoiceValue]

    console.log(rate_input1);
  })

}


convertion()



