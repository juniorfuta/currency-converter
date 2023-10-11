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

//functions for the buttons copy
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

//function to open the dropdown of languages 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// function to close the dropdown of language if the user clicks outside of it
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

//Functions to Translate

//Function test to translate change language

function testTranslate(language) {

  let headingTranslate;

  let buttonCopy1Translate;
  let buttonCopy2Translate;
 //let iconButtonCopy;

  headingTranslate = document.getElementById("heading");

  buttonCopy1Translate=document.getElementById("btn1");
  buttonCopy2Translate=document.getElementById("btn2");
  //iconButtonCopy=document.getElementById("i2");

  if (language === "pt") {
    headingTranslate.innerHTML = "Conversor de Moedas";
    buttonCopy1Translate.innerHTML ="COPIAR" 
    buttonCopy2Translate.innerHTML ="COPIAR"

  }
  else if (language === "fr") {
    headingTranslate.innerHTML = "Convertisseur de Devises";
    buttonCopy1Translate.innerHTML ="COPIER" 
    buttonCopy2Translate.innerHTML ="COPIER" 
  }
  else {
    headingTranslate.innerHTML = "Currency Converter";
    buttonCopy1Translate.innerHTML ="COPY" 
    buttonCopy2Translate.innerHTML ="COPY" 
  }

}

//function to copy a text

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