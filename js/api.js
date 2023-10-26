/*
By: PalancaTechnologies Softwares 
CEO: Júnior Futa
a.k.a: JFuta21
E-mail: juniorfuta94@gmail.com
Instagram: @juniorfuta
*/

//Integrating API

currenciesRates()

function currenciesRates(){
 fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
 .then(response =>
  response.json())
 .then(data =>{
  return data;
 })
}

/*
fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
.then((res) => res.json()).then ((data) => console.log(data.aoa))

fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
.then((res) => res.json()).then ((data) => console.log(data.eur.aoa)) */