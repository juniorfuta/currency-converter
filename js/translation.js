/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */
resetLanguge();

function resetLocalStorage() {
  localStorage.setItem("locale", "en")
}

function resetLanguge(){

  let value= localStorage.getItem('locale')

  if (value==='pt'){

    translatePortuguese()
  }
  else if (value==='fr'){

    translateFrench()
  }
  else{
    translateEnglish()
  }
}

function translatePortuguese() {

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
  let newzealandDollarTranslate = document.getElementById("zealand dollar");
  let russianDollarTranslate = document.getElementById("russian ruble");
  let southAfricanRandTranslate = document.getElementById("south african rand");
  let swissFrancTranalate = document.getElementById("swiss franc");
  let britishPoundTranslate = document.getElementById("british pound");
  let contactsTranslate = document.getElementById("contacts");
  let aboutUsTranslate = document.getElementById("about us");
  let policyTranslate = document.getElementById("policy");
  let termsTranslate = document.getElementById("terms");
  let madeTranslate = document.getElementById("footer3");
  let selectTranslate = document.getElementById("select1");
  let select1Translate = document.getElementById("select2");
  let buttongenerate = document.getElementById("btn-generate");
  let buttoncopyhistory = document.getElementById("btn-copyHistory");

  //Translation Sidenav

  let themeTranslate = document.getElementById("theme");
  let darkTranslate = document.getElementById("dark theme");
  let lightTranslate = document.getElementById("light theme");
  let aboutTranslate = document.getElementById("aboutHeading");
  let aboutcontainerTranslate = document.getElementById("aboutcontainer");
  let aboutUsPageTranslate = document.getElementById("aboutUsHeading");


  headingTranslate.innerHTML = "Conversor de Moedas";
  buttonCopy1Translate.innerHTML = 'COPIAR <i class ="fa-solid fa-copy"></i>'
  buttonCopy2Translate.innerHTML = 'COPIAR <i class ="fa-solid fa-copy"></i>'
  keybordTranslation.innerHTML = " Teclado"
  historyTranslate.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> Histórico'
  footerTranslate.innerHTML = "Perfis de Divísas"
  dolarUsaTranslate.innerHTML = "US-Dólar Americano"
  australianDollarTranslate.innerHTML = "AUD-Dólar Australiano"
  canadianDollarTranslate.innerHTML = "CAD-Dólar Canadiano"
  bulagrianLevTranslate.innerHTML = "BGN=Lev Bulgariano"
  indianRupeTranslate.innerHTML = "INR-Rupia Indiana"
  japaneseYenTranslate.innerHTML = "JPY-Yen Japonês"
  newzealandDollarTranslate.innerHTML = "AOA-Kwanza Angolano"
  russianDollarTranslate.innerHTML = "RUB-Rublo Russo"
  southAfricanRandTranslate.innerHTML = "ZAR-Rand Sul-Africano"
  swissFrancTranalate.innerHTML = "CHF-Franco Suíço"
  britishPoundTranslate.innerHTML = "GBP-Libra britânica"
  contactsTranslate.innerHTML = "Contactos para Parcerias"
  aboutUsTranslate.innerHTML = "Acerca de Nós"
  policyTranslate.innerHTML = "Política"
  termsTranslate.innerHTML = "Termos"
  madeTranslate.innerHTML = "Feito por Júnior Futa (JFuta21)"
  themeTranslate.innerHTML = "Tema"
  darkTranslate.innerHTML = "Escuro"
  lightTranslate.innerHTML = "Claro"
  aboutTranslate.innerHTML = "Acerca do Conversor"
  selectTranslate.innerHTML="Selecione a Moeda"
  select1Translate.innerHTML="Selecione a Moeda"
  aboutcontainerTranslate.innerHTML = "O conversor de moeda da PalancaTech permite que você verifique as últimas taxas de câmbio médias de compra/venda e converter tudas principais moedas mundiais. As taxas PalancaTech são taxas de câmbio compiladas das principais fontes de dados do mercado."
  buttongenerate.innerHTML = "Gerar Histórico"
  buttoncopyhistory.innerHTML = "Copiar Histórico"

  if (aboutUsPageTranslate) {
    aboutUsPageTranslate.innerHTML = "Acerca de Nós"
  }

}

function translateFrench() {

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
  let newzealandDollarTranslate = document.getElementById("zealand dollar");
  let russianDollarTranslate = document.getElementById("russian ruble");
  let southAfricanRandTranslate = document.getElementById("south african rand");
  let swissFrancTranalate = document.getElementById("swiss franc");
  let britishPoundTranslate = document.getElementById("british pound");
  let contactsTranslate = document.getElementById("contacts");
  let aboutUsTranslate = document.getElementById("about us");
  let policyTranslate = document.getElementById("policy");
  let termsTranslate = document.getElementById("terms");
  let madeTranslate = document.getElementById("footer3");
  let selectTranslate = document.getElementById("select1");
  let select1Translate = document.getElementById("select2");
  let buttongenerate = document.getElementById("btn-generate");
  let buttoncopyhistory = document.getElementById("btn-copyHistory");

  //Translation Sidenav

  let themeTranslate = document.getElementById("theme");
  let darkTranslate = document.getElementById("dark theme");
  let lightTranslate = document.getElementById("light theme");
  let aboutTranslate = document.getElementById("aboutHeading");
  let aboutcontainerTranslate = document.getElementById("aboutcontainer");
  let aboutUsPageTranslate = document.getElementById("aboutUsHeading");

  headingTranslate.innerHTML = "Convertisseur de Devises";
  buttonCopy1Translate.innerHTML = 'COPIER <i class ="fa-solid fa-copy"></i>'
  buttonCopy2Translate.innerHTML = 'COPIER <i class ="fa-solid fa-copy"></i>'
  keybordTranslation.innerHTML = " Clavier"
  historyTranslate.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> Historique'
  footerTranslate.innerHTML = "Profils de Devises"
  dolarUsaTranslate.innerHTML = "US-Dolar American"
  australianDollarTranslate.innerHTML = "AUD-Dolar Australian"
  canadianDollarTranslate.innerHTML = "CAD-Dolar Canadian"
  bulagrianLevTranslate.innerHTML = "BGN=Lev Bulgarian"
  indianRupeTranslate.innerHTML = "INR-Rupie Indienne"
  japaneseYenTranslate.innerHTML = "JPY-Yen Japonais"
  newzealandDollarTranslate.innerHTML = "AOA-Kwanza Angolais"
  russianDollarTranslate.innerHTML = "RUB-Rouble Russe"
  southAfricanRandTranslate.innerHTML = "ZAR-Rand Sud-Africain"
  swissFrancTranalate.innerHTML = "CHF-Franc Suisse"
  britishPoundTranslate.innerHTML = "GBP-Livre Sterling"
  contactsTranslate.innerHTML = "Contacts Pour Les partenariats"
  aboutUsTranslate.innerHTML = "À Propos De Nous"
  policyTranslate.innerHTML = "Politique"
  termsTranslate.innerHTML = "Termes"
  madeTranslate.innerHTML = "Fait par Júnior Futa (JFuta21)"
  themeTranslate.innerHTML = "Thème"
  darkTranslate.innerHTML = "Noire"
  lightTranslate.innerHTML = "Claire"
  aboutTranslate.innerHTML = "À Propos du Convertisseur"
  selectTranslate.innerHTML="Veuillez Selectioner la Divise"
  select1Translate.innerHTML="Veuillez Selectioner la Divise"
  aboutcontainerTranslate.innerHTML = "Le convertisseur de devises de PalancaTech vous permet de vérifier les derniers taux de change moyens acheteur/vendeur et convertir toutes principales monnaies mondiales. Les taux PalancaTech sont des taux de change compilés à partir des principales sources de données du marché."
  buttongenerate.innerHTML = "Générer l'Historique"
  buttoncopyhistory.innerHTML = "Copier l'Historique"

  if (aboutUsPageTranslate) {
    aboutUsPageTranslate.innerHTML = "À Propos De Nous"
  }

}

function translateEnglish() {

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
  let newzealandDollarTranslate = document.getElementById("zealand dollar");
  let russianDollarTranslate = document.getElementById("russian ruble");
  let southAfricanRandTranslate = document.getElementById("south african rand");
  let swissFrancTranalate = document.getElementById("swiss franc");
  let britishPoundTranslate = document.getElementById("british pound");
  let contactsTranslate = document.getElementById("contacts");
  let aboutUsTranslate = document.getElementById("about us");
  let policyTranslate = document.getElementById("policy");
  let termsTranslate = document.getElementById("terms");
  let madeTranslate = document.getElementById("footer3");
  let selectTranslate = document.getElementById("select1");
  let select1Translate = document.getElementById("select2");
  let buttongenerate = document.getElementById("btn-generate");
  let buttoncopyhistory = document.getElementById("btn-copyHistory");

  //Translation Sidenav

  let themeTranslate = document.getElementById("theme");
  let darkTranslate = document.getElementById("dark theme");
  let lightTranslate = document.getElementById("light theme");
  let aboutTranslate = document.getElementById("aboutHeading");
  let aboutcontainerTranslate = document.getElementById("aboutcontainer");
  let aboutUsPageTranslate = document.getElementById("aboutUsHeading");

  headingTranslate.innerHTML = "Currency Converter";
  buttonCopy1Translate.innerHTML = 'COPY <i class ="fa-solid fa-copy"></i>'
  buttonCopy2Translate.innerHTML = 'COPY <i class ="fa-solid fa-copy"></i>'
  keybordTranslation.innerHTML = " Keybord"
  historyTranslate.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> History'
  footerTranslate.innerHTML = "Profils Divises"
  dolarUsaTranslate.innerHTML = "US-USA Dollar"
  australianDollarTranslate.innerHTML = "AUD-Australain Dollar"
  canadianDollarTranslate.innerHTML = "CAD-Canadian Dollar"
  bulagrianLevTranslate.innerHTML = "BGN-Bulgarian Lev"
  indianRupeTranslate.innerHTML = "INR-Indian Rupee"
  japaneseYenTranslate.innerHTML = "JPY-Japanese Yen"
  newzealandDollarTranslate.innerHTML = "AOA-Angolan kwanza"
  russianDollarTranslate.innerHTML = "RUB-Russian Ruble"
  southAfricanRandTranslate.innerHTML = "ZAR-South African Rand"
  swissFrancTranalate.innerHTML = "CHF-Swiss Franc"
  britishPoundTranslate.innerHTML = "GBP-British Pound"
  contactsTranslate.innerHTML = "Contactos para Parcerias"
  aboutUsTranslate.innerHTML = "About Us"
  policyTranslate.innerHTML = "Policy"
  termsTranslate.innerHTML = "Terms"
  madeTranslate.innerHTML = "Made by Júnior Futa (JFuta21)"
  themeTranslate.innerHTML = "Theme"
  darkTranslate.innerHTML = "Dark"
  lightTranslate.innerHTML = "Light"
  aboutTranslate.innerHTML = "About Converter"
  selectTranslate.innerHTML="Select your currency"
  select1Translate.innerHTML="Select your currency"
  aboutcontainerTranslate.innerHTML = "PalancaTech's currency converter allows you to check the latest average bid/ask exchange rates and convert all major world currencies. PalancaTech Rates are compiled exchange rates from major market data sources"
  buttongenerate.innerHTML = "Generate History"
  buttoncopyhistory.innerHTML = "Copy History"


  if (aboutUsPageTranslate) {
    aboutUsPageTranslate.innerHTML = "About Us"
  }

}

function Translate(language) {

  if (language === "pt") {

    translatePortuguese()

    localStorage.setItem("locale", "pt")
  }
  else if (language === "fr") {

    translateFrench()

    localStorage.setItem("locale", "fr")
  }
  else {

    translateEnglish()

    localStorage.setItem("locale", "en")
  }
}

