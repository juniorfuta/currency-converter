/*
By: Palanca Technologies Softwares 
CEO: Júnior Futa
a.k.a: JFuta21
E-mail: juniorfuta94@gmail.com
Instagram: @juniorfuta
*/


var requestURL = 'https://api.exchangerate.host/latest'; 
var request = new XMLHttpRequest(); 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  var data= response.rates.AOA;
  console.log(data);
}


// Methode fetch
const data = await (await fetch ('https://api.exchangerate.host/latest')). json();
console.log(data);
