/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */

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


//Function delete

function deleteLastElement() {
  let currentValue = document.getElementById('input1').value;
  console.log(currentValue);
}

/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */