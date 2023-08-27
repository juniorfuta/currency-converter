function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

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

//input number validation1
valueInput1 = document.getElementById('input1');

valueInput1.addEventListener('input', validateInput1);

function validateInput1() {
  // Get the value of the input field
  let x = document.getElementById("input1").value
  //test input
  let warnigText = document.getElementById("output1");
  if (isNaN(x)) {
    warnigText.innerHTML = "Invalid format";
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
    warnigText.innerHTML = "Invalid format";
  }
  else {
    warnigText.innerHTML = "";
  }
}

// valueInput.addEventListener('focus', alertFunction);

//  function alertFunction(){
//   console.log('Input 1 is focused.');
// }