/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */

//resetLocalStorage()

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

function AboutUsTranslate(language) {

  let aboutUsPageTranslate = document.getElementById("aboutUsHeading");
  let aboutUsContentTranslate = document.getElementById("content");

  if (language === "pt") {
    aboutUsPageTranslate.innerHTML = "Acerca de Nós"
    aboutUsContentTranslate.innerHTML = "PalancaTech é uma Startup Tecnológica de Desenvolvimento e Inovação em Angola envolvida no desenvolvimento tecnológico de Angola especialmente da província de Malanje fundada por Estudantes de Engenharia Elétrica e Informática Industrial e Web Developers <strong> Júnior Futa e João Paulino </strong> em 2023 França."
  }

  else if (language === "fr") {

    aboutUsPageTranslate.innerHTML = "À Propos De Nous"
    aboutUsContentTranslate.innerHTML = "PalancaTech est une Startup Technologique de développement  et d'innovation en Angola engagé dans le développement technologique de l'Angola en particulier dans la province de Malanje fondée par des étudiants en Génie Electrique et Informatique Industrielle et développeurs Web <strong> Júnior Futa et João Paulino </strong> en 2023 France."
  }

  else {

    aboutUsPageTranslate.innerHTML = "About us"
    aboutUsContentTranslate.innerHTML = "PalancaTech is a Technological Development and Innovation Startup in Angola Engaged in the technological development of Angola especially in the province of Malanje founded by Students of Electrical Engineering and Industrial Informatics and Web Developers <strong>Júnior Futa and João Paulino </strong> in 2023 France."
  }
}

function PolicyTranslate(language) {

  let policyHeadingTranslate = document.getElementById("policyHeading");
  let cookiesContentTranslate = document.getElementById("cookiesPolicyContent");
  let concentHeadingTranslate = document.getElementById("concentHeading");
  let concentContentTranslate = document.getElementById("consentPolicyContent");

  if (language === "pt") {
    policyHeadingTranslate.innerHTML = "Políticas de Privacidade"
    cookiesContentTranslate.innerHTML = "No nosso website não recolhemos quaisquer dados pessoais apenas ideias do que procura."
    concentHeadingTranslate.innerHTML = "2.Consentimento"
    concentContentTranslate.innerHTML = "Ao usar nosso site você concorda com nossa política de privacidade."
  }

  else if (language === "fr") {
    policyHeadingTranslate.innerHTML = "Politiques de Confidentialité"
    cookiesContentTranslate.innerHTML = "Sur notre site Web, nous ne collectons aucune donnée personnelle, juste des idées sur ce que vous recherchez."
    concentHeadingTranslate.innerHTML = "2.Consentement"
    concentContentTranslate.innerHTML = "En utilisant notre site Web, vous acceptez notre politique de confidentialité."
  }

  else {
    policyHeadingTranslate.innerHTML = "Privacy Policies"
    cookiesContentTranslate.innerHTML = "In our website we don't collect  any  personnal data just ideias of what you search."
    concentHeadingTranslate.innerHTML = "2.Consent"
    concentContentTranslate.innerHTML = "Using our website you are you are agreeing to our privacy policy."
  }
}


function termsTranslate(language) {

  let termsHeadingTranslate = document.getElementById("termsHeading");
  let p1Translate = document.getElementById("p1");
  let p2Translate = document.getElementById("p2");
  let p3Translate = document.getElementById("p3");
  let p4Translate = document.getElementById("p4");

  //iconButtonCopy=document.getElementById("i2");

  if (language === "pt") {
    termsHeadingTranslate.innerHTML = "Termos de Uso"
    p1Translate.innerHTML = "<b>1.Uso pessoal e não comercial:</b> este site não tem fins lucrativos e é para uso pessoal."
    p2Translate.innerHTML = "<b>2.Precisão das taxas de câmbio: </b>as taxas de câmbio exibidas são apenas indicativas mas com precisão garantida."
    p3Translate.innerHTML = "<b>3.Propriedade intelectual:</b> todos os direitos de propriedade intelectual relacionados à ferramenta (incluindo software, design e conteúdo) permanecem nossa propriedade."
    p4Translate.innerHTML = "<b>4.Interrupções de serviço:</b> O serviço pode ser interrompido para manutenção ou outros motivos, e não seremos responsáveis ​​por quaisquer interrupções."
  }

  else if (language === "fr") {
    termsHeadingTranslate.innerHTML = "Conditions d'Utilisation"
    p1Translate.innerHTML = "<b>1.Utilisation personnelle et non commerciale:</b> ce site Web est à but non lucratif et destiné à un usage personnel."
    p2Translate.innerHTML = "<b>2.Précision des taux de change: </b>les taux de change affichés ne sont qu'indicatifs mais avec une précision garantie."
    p3Translate.innerHTML = "<b>3.Propriété intellectuelle:</b> tous les droits de propriété intellectuelle liés à l'outil (y compris les logiciels, la conception et le contenu) restent notre propriété."
    p4Translate.innerHTML = "<b>4.Interruptions de service:</b> Le service peut être interrompu pour des raisons de maintenance ou pour d'autres raisons, et nous ne serons pas responsables de toute interruption."
  }

  else {
    termsHeadingTranslate.innerHTML = "Terms de Use"
    p1Translate.innerHTML = "<b>1.Personal and non-commercial use:</b> this website is non-profit and for personal use."
    p2Translate.innerHTML = "<b>2.Accuracy of exchange rates: </b>the exchange rates displayed are only indicative but with guaranteed accuracy."
    p3Translate.innerHTML = "<b>3.Intellectual property:</b> all intellectual property rights related to the tool(including software, design and contents) remain our property."
    p4Translate.innerHTML = "<b>4.Service Interruptions:</b> Service may be interrupted for maintenance or other reasons, and we will not be liable for any disruptions."
  }
}

/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */