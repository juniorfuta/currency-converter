/*
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
*/
function hystoryHandler() {

  input1Select = localStorage.getItem('valueSelectOne')

  input2Select = localStorage.getItem('valueSelectTwo')

  inputselect1 = input1Select.toUpperCase()

  inputselect2 = input2Select.toUpperCase()

  inputvl1 = input1Value.value

  inputvl10 = Math.round(inputvl1)

  inputvl100 = inputvl10.toLocaleString()

  inputvl2 = input2Value.value

  inputvl20 = Math.round(inputvl2)

  inputvl200 = inputvl20.toLocaleString()

  if (input1Select != '' && input2Select != '') {
    history.innerHTML += '<p>' + inputvl100 + ' ' + '<span class ="divisesNames">' + inputselect1 + '</span>' +
      ' = ' + inputvl200 + ' ' + '<span class ="divisesNames">' + inputselect2 + '</span>' + '</p>'
  }
}