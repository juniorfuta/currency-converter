/*
By: PalancaTechnologies Softwares 
CEO: Júnior Futa (JFuta21)
Email: juniorfuta94@gmail.com
Instagram: @juniorfuta
*/

//input number validation1
valueInput1 = document.getElementById('input1');

valueInput1.addEventListener('input', validateInput1);

function validateInput1() {
  // Get the value of the input field
  let x = document.getElementById("input1").value;
  //test input
  let warnigText = document.getElementById("output1");

  if (isNaN(x)) {

    warnigText.innerHTML = "Invalid format. Please enter a number";
  }
  else {

    warnigText.innerHTML = "";
  }
}

//input number validation2
valueInput2 = document.getElementById('input2');

valueInput2.addEventListener('input', validateInput2);

function validateInput2() {
  // Get the value of the input field
  let x = document.getElementById("input2").value
  //test input
  let warnigText = document.getElementById("output2");
  if (isNaN(x)) {

    warnigText.innerHTML = "Invalid format. Please enter a number";
  }
  else {

    warnigText.innerHTML = "";
  }
}

function openNav() {

  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {

  document.getElementById("mySidenav").style.width = "0";
}

// function that change the icon of sidenav

function changeIcon(x) {

  x.classList.toggle("change");

}

//function to count the clicks and open the sidenav

let clickCounter = 0;

let button = document.getElementById("container");

button.addEventListener("click", function () {

  clickCounter++;

  if (clickCounter === 1) {

    openNav();
    changeIcon(this);
  }
  else if (clickCounter === 2) {

    closeNav();
    changeIcon(this);

    clickCounter = 0;
  }
});


//I'm working here in the sidevnav 14/09/2023

function testAlert() {
  alert('Click Sindenav icon')
}
document.getElementById("container").addEventListener("click", testAler());


/* document.getElementById("container").addEventListener("click", function(){
  clickCount++;
  if (clickCount === 1) {
      if (clickCount === 1) {
        // Handle single click action here
        openNav();
      } else if (clickCount === 2) {
        // Handle double click action here
        closeNav();
      }
      clickCount = 0;
  }
}); */

//Testing inputs focus 
const inp = document.querySelectorAll('input[type="text"]');

inp.forEach(input => {
  input.addEventListener('focus', function (event) {
    if (event.target === input1) {

    } else if (event.target === input2) {

    }
  });
});

// Intoducing numbers with button

let text;

function writeInput(text) {
  let numbInput = document.getElementById('input1');
  const currentValue = numbInput.value;
  const newValue = currentValue + text;
  numbInput.value = newValue;
}


// Code of the C button 
function cleanInput() {
  const numbInput = document.getElementById('input1');
  numbInput.value = "";
}

//functions for the button copy
function copied1() {
  document.getElementById("btn1").style.color = "green";
  document.getElementById("btn1").style.border = " solid 2px green";
  let icon = document.getElementById("i1")
  icon.style.color = "green";
  let text = document.getElementById("btn1");
  text.innerHTML = "COPIED";
}

function copied2() {
  document.getElementById("btn2").style.color = "green";
  document.getElementById("btn2").style.border = "solid 2px green";
  let icon = document.getElementById("i2")
  icon.style.color = "green";
  let text = document.getElementById("btn2");
  text.innerHTML = "COPIED";
}



/*valueInput.addEventListener('focus', alertFunction); */

//  function alertFunction(){
//   console.log('Input 1 is focused.');
// }



//When the user clicks on the button, 
//toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Functions to convert
var requestURL = 'https://api.exchangerate.host/convert?from=USD&to=EUR';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;
  console.log(response);
}

//Functions to Transilate

function translateTo(language) {
  const translations = {
    'en': {
      'heading': 'Currency Converter',
      'paragraph': 'This is a sample paragraph.'
    },
    'pt': {
      'heading': 'Conversor de Moedas',
      'paragraph': 'Este es un párrafo de ejemplo.'
    }
  };

  const elementsToTranslate = document.querySelectorAll('[id^="heading"], [id^="paragraph"]');

  elementsToTranslate.forEach(element => {
    const id = element.id;
    if (translations[language][id]) {
      element.textContent = translations[language][id];
    }
  });
}

//Function test

function testTranslate(language) {

  let textToTranslate;

  textToTranslate = document.getElementById("heading");

  if (language === "pt") {
    textToTranslate.innerHTML = "Conversor de Moedas";

  }
  else if (language === "fr") {
    textToTranslate.innerHTML = "Convertisseur de Devises";
  }
  else {
    textToTranslate.innerHTML = "Currency Converter";
  }

}

//fonction pour copier un texte

function copyTextToClipboard(inputId) {
  // Récupérer l'élément d'entrée en fonction de son ID
  var inputElement = document.getElementById(inputId);

  // Vérifier si l'élément d'entrée existe
  if (inputElement) {
    // Sélectionner le texte dans l'élément d'entrée
    inputElement.select();

    try {
      // Copier le texte sélectionné dans le presse-papiers
      document.execCommand('copy');
    } catch (err) {
      console.error('Impossible de copier le texte:', err);

    }
  } else {
    console.error('L\'élément d\'entrée avec l\'ID ' + inputId + ' n\'existe pas.');
  }
}


/*
By: PalancaTechnologies Softwares 
CEO: Júnior Futa (JFuta21)
Email: juniorfuta94@gmail.com
Instagram: @juniorfuta
*/