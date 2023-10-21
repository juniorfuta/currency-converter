
function Translate(language) {

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

  //Translation Sidenav

  let themeTranslate = document.getElementById("theme");
  let darkTranslate = document.getElementById("dark theme");
  let lightTranslate = document.getElementById("light theme");
  let aboutTranslate = document.getElementById("aboutHeading");
  let aboutcontainerTranslate = document.getElementById("aboutcontainer");
  let aboutUsPageTranslate = document.getElementById("aboutUsHeading");

  //iconButtonCopy=document.getElementById("i2");

  if (language === "pt") {
    headingTranslate.innerHTML = "Conversor de Moedas";
    buttonCopy1Translate.innerHTML = "COPIAR"
    buttonCopy2Translate.innerHTML = "COPIAR"
    keybordTranslation.innerHTML = "Teclado"
    historyTranslate.innerHTML = "Histórico"
    footerTranslate.innerHTML = "Perfis de Divísas"
    dolarUsaTranslate.innerHTML = "US-Dólar Americano"
    australianDollarTranslate.innerHTML = "AUD-Dólar Australiano"
    canadianDollarTranslate.innerHTML = "CAD-Dólar Canadiano"
    bulagrianLevTranslate.innerHTML = "BGN=Lev Bulgariano"
    indianRupeTranslate.innerHTML = "INR-Rupia Indiana"
    japaneseYenTranslate.innerHTML = "JPY-Yen Japonês"
    newzealandDollarTranslate.innerHTML = "NZD-Dólar da Nova Zelândia"
    russianDollarTranslate.innerHTML = "RUB-Rublo Russo"
    southAfricanRandTranslate.innerHTML = "ZAR-Rand Sul-Africano"
    swissFrancTranalate.innerHTML = "CHF-Franco Suíço"
    britishPoundTranslate.innerHTML = "GBP-Libra britânica"
    contactsTranslate.innerHTML = "Contactos para Parcerias"
    aboutUsTranslate.innerHTML = "Acerca de Nós"
    policyTranslate.innerHTML = "Política"
    termsTranslate.innerHTML = "Termos"
    madeTranslate.innerHTML = "Feito com &#x1F497; por Júnior Futa (JFuta21)"
    themeTranslate.innerHTML = "Tema"
    darkTranslate.innerHTML = "Escuro"
    lightTranslate.innerHTML = "Claro"
    aboutTranslate.innerHTML = "Acerca do Conversor"
    aboutcontainerTranslate.innerHTML = "O conversor de moeda da PalancaTech permite que você verifique as últimas taxas de câmbio médias de compra/venda e converter tudas principais moedas mundiais. As taxas PalancaTech são taxas de câmbio compiladas das principais fontes de dados do mercado."
    aboutUsPageTranslate.innerHTML = "Acerca de Nós"
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
    japaneseYenTranslate.innerHTML = "JPY-Yen Japonais"
    newzealandDollarTranslate.innerHTML = "NZD-Dollar Néo-Zélandais"
    russianDollarTranslate.innerHTML = "RUB-Rouble Russe"
    southAfricanRandTranslate.innerHTML = "ZAR-Rand Sud-Africain"
    swissFrancTranalate.innerHTML = "CHF-Franc Suisse"
    britishPoundTranslate.innerHTML = "GBP-Livre Sterling"
    contactsTranslate.innerHTML = "Contacts Pour Les partenariats"
    aboutUsTranslate.innerHTML = "À Propos De Nous"
    policyTranslate.innerHTML = "Politique"
    termsTranslate.innerHTML = "Termes"
    madeTranslate.innerHTML = "Fait avec &#x1F497; pour Júnior Futa (JFuta21)"
    themeTranslate.innerHTML = "Thème"
    darkTranslate.innerHTML = "Noire"
    lightTranslate.innerHTML = "Claire"
    aboutTranslate.innerHTML = "À Propos du Convertisseur"
    aboutcontainerTranslate.innerHTML = "Le convertisseur de devises de PalancaTech vous permet de vérifier les derniers taux de change moyens acheteur/vendeur et convertir toutes principales monnaies mondiales. Les taux PalancaTech sont des taux de change compilés à partir des principales sources de données du marché."
    aboutUsPageTranslate.innerHTML = "À Propos De Nous"
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
    japaneseYenTranslate.innerHTML = "JPY-Japanese Yen"
    newzealandDollarTranslate.innerHTML = "NZD-New Zealand Dollar"
    russianDollarTranslate.innerHTML = "RUB-Russian Ruble"
    southAfricanRandTranslate.innerHTML = "ZAR-South African Rand"
    swissFrancTranalate.innerHTML = "CHF-Swiss Franc"
    britishPoundTranslate.innerHTML = "GBP-British Pound"
    contactsTranslate.innerHTML = "Contactos para Parcerias"
    aboutUsTranslate.innerHTML = "About Us"
    policyTranslate.innerHTML = "Policy"
    termsTranslate.innerHTML = "Terms"
    madeTranslate.innerHTML = "Made with &#x1F497; by Júnior Futa (JFuta21)"
    themeTranslate.innerHTML = "Theme"
    darkTranslate.innerHTML = "Dark"
    lightTranslate.innerHTML = "Light"
    aboutTranslate.innerHTML = "About Converter"
    aboutcontainerTranslate.innerHTML = "PalancaTech's currency converter allows you to check the latest average bid/ask exchange rates and convert all major world currencies. PalancaTech Rates are compiled exchange rates from major market data sources"
    aboutUsPageTranslate.innerHTML = "About Us"
  }
}

function AboutUsTranslate(language) {

  let aboutUsPageTranslate = document.getElementById("aboutUsHeading");
  let aboutUsContentTranslate = document.getElementById("content");

  //iconButtonCopy=document.getElementById("i2");
 

  if (language === "pt") {
    aboutUsPageTranslate.innerHTML = "Acerca de Nós"
    aboutUsContentTranslate.innerHTML ="PalancaTech é uma Startup Tecnológica de Desenvolvimento e Inovação em Angola envolvida no desenvolvimento tecnológico de Angola especialmente da província de Malanje fundada por Estudantes de Engenharia Elétrica e Informática Industrial e Web Developers <strong> Júnior Futa e João Paulino </strong> em 2023 França."
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

  //iconButtonCopy=document.getElementById("i2");

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


function termsTranslate(language){

  let termsHeadingTranslate = document.getElementById("termsHeading");

  //iconButtonCopy=document.getElementById("i2");

  if (language === "pt") {
    termsHeadingTranslate.innerHTML = "Termos de Uso"
  }

  else if (language === "fr") {
    termsHeadingTranslate.innerHTML = "Conditions d'Utilisation"
  }

  else {
    termsHeadingTranslate.innerHTML = "Terms de Use"
  }
}



