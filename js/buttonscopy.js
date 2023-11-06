//functions for the buttons copy when clicked


function buttonOneClicked() {

  document.getElementById("btn1").style.color = "green"

  document.getElementById("btn1").style.border = " solid 2px green"

  let value = localStorage.getItem("locale");

  if (value === 'pt') {
    document.getElementById("btn1").innerHTML = 'COPIADO <i class ="fa-solid fa-copy"></i>'
  }
  else if (value === 'fr') {
    document.getElementById("btn1").innerHTML = 'COPIÉ <i class ="fa-solid fa-copy"></i>'
  }
  else {
    document.getElementById("btn1").innerHTML ='COPIED <i class ="fa-solid fa-copy"></i>'
  }
}

function buttonTwoClicked () {

  document.getElementById("btn2").style.color = "green"

  document.getElementById("btn2").style.border = "solid 2px green"

  let value = localStorage.getItem("locale");

  if (value === 'pt') {
    document.getElementById("btn2").innerHTML = 'COPIADO <i class ="fa-solid fa-copy"></i>'
  }
  else if (value === 'fr') {
    document.getElementById("btn2").innerHTML = 'COPIÉ <i class ="fa-solid fa-copy"></i>'
  }
  else {
    document.getElementById("btn2").innerHTML = 'COPIED <i class ="fa-solid fa-copy"></i>'
  }
}