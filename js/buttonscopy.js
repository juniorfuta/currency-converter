

const buttonCopyOne= document.getElementById('btn1')

const buttonCopyTwo= document.getElementById('btn2')


function buttonOneClicked() {

  buttonCopyOne.style.color = "green"

  buttonCopyOne.style.border = " solid 2px green"

  let value = localStorage.getItem("locale");

  if (value === 'pt') {
    buttonCopyOne.innerHTML = 'COPIADO <i class ="fa-solid fa-copy"></i>'
  }
  else if (value === 'fr') {
    buttonCopyOne.innerHTML = 'COPIÉ <i class ="fa-solid fa-copy"></i>'
  }
  else {
    buttonCopyOne.innerHTML ='COPIED <i class ="fa-solid fa-copy"></i>'
  }
}

function buttonOneNotClicked() {

  buttonCopyOne.style.color = "green"

  buttonCopyOne.style.border = " solid 2px green"

  let value = localStorage.getItem("locale");

  if (value === 'pt') {
    buttonCopyOne.innerHTML = 'COPIADO <i class ="fa-solid fa-copy"></i>'
  }
  else if (value === 'fr') {
    buttonCopyOne.innerHTML = 'COPIÉ <i class ="fa-solid fa-copy"></i>'
  }
  else {
    buttonCopyOne.innerHTML ='COPIED <i class ="fa-solid fa-copy"></i>'
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


buttonCopyOne.addEventListener('click', function () {

  buttonOneClicked()

  copyTextToClipboard('input1')

})

//document.body.addEventListener('click', function ())