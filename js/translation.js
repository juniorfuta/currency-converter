
function testTranslate(language) {

  //let iconButtonCopy;

  let headingTranslate = document.getElementById("heading");
  let buttonCopy1Translate = document.getElementById("btn1");
  let buttonCopy2Translate = document.getElementById("btn2");
  let keybordTranslation = document.getElementById("keybordHeading");
  let historyTranslate = document.getElementById("historyHeading");
  let footerTranslate = document.getElementById("footerHeading");
  let dolarUsaTranslate = document.getElementById("dolarUsa");
  let australianDollarTranslate = document.getElementById("australian dollar");
  let canadianDollarTranslate = document.getElementById("canadian dollar");
  let bulagrianLevTranslate = document.getElementById("bulgarian lev");
  let indianRupeTranslate = document.getElementById("indian rupee");
  let japaneseYenTranslate = document.getElementById("japanese yen");


  //iconButtonCopy=document.getElementById("i2");

  if (language === "pt") {
    headingTranslate.innerHTML = "Conversor de Moedas";
    buttonCopy1Translate.innerHTML = "COPIAR"
    buttonCopy2Translate.innerHTML = "COPIAR"
    keybordTranslation.innerHTML = "Teclado"
    historyTranslate.innerHTML = "Histórico"
    footerTranslate.innerHTML = "Perfis de Divísas"
    dolarUsaTranslate.innerHTML = "US-Dolar Americano"
    australianDollarTranslate.innerHTML = "AUD-Dolar Australiano"
    canadianDollarTranslate.innerHTML = "CAD-Dolar Canadiano"
    bulagrianLevTranslate.innerHTML = "BGN=Lev Bulgariano"
    indianRupeTranslate.innerHTML = "INR-Rupia Indiana"
    japaneseYenTranslate.innerHTML= "JPY-Yen Japonês"

  }
  else if (language === "fr") {
    headingTranslate.innerHTML = "Convertisseur de Devises";
    buttonCopy1Translate.innerHTML = "COPIER"
    buttonCopy2Translate.innerHTML = "COPIER"
    keybordTranslation.innerHTML = "Clavier"
    historyTranslate.innerHTML = "Historique"
    footerTranslate.innerHTML = "Profils de Devises"
    dolarUsaTranslate.innerHTML = "US-Dolar American"
    australianDollarTranslate.innerHTML = "AUD-Dolar Australian"
    canadianDollarTranslate.innerHTML = "CAD-Dolar Canadian"
    bulagrianLevTranslate.innerHTML = "BGN=Lev Bulgarian"
    indianRupeTranslate.innerHTML = "INR-Rupie Indienne"
    japaneseYenTranslate.innerHTML= "JPY-Yen Japonais"

  }
  else {
    headingTranslate.innerHTML = "Currency Converter";
    buttonCopy1Translate.innerHTML = "COPY"
    buttonCopy2Translate.innerHTML = "COPY"
    keybordTranslation.innerHTML = "Keybord"
    historyTranslate.innerHTML = "History"
    footerHeading.innerHTML = "Profils Divises"
    dolarUsaTranslate.innerHTML = "US-USA Dollar"
    australianDollarTranslate.innerHTML = "AUD-Australain Dollar"
    canadianDollarTranslate.innerHTML = "CAD-Canadian Dollar"
    bulagrianLevTranslate.innerHTML = "BGN-Bulgarian Lev"
    indianRupeTranslate.innerHTML = "INR-Indian Rupee"
  }
}
