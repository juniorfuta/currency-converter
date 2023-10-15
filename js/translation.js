
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
  let termsTranslate= document.getElementById("terms");
  let madeTranslate= document.getElementById("footer3");

  //Translation Sidenav

  let themeTranslate= document.getElementById("theme");
  let darkTranslate= document.getElementById("dark theme");
  let lightTranslate= document.getElementById("light theme");
  let aboutTranslate= document.getElementById("aboutHeading");
  let aboutcontainerTranslate= document.getElementById("aboutcontainer");
  let aboutUsPageTranslate= document.getElementById("aboutUsHeading");
  
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
    policyTranslate.innerHTML="Política"
    termsTranslate.innerHTML="Termos"
    madeTranslate.innerHTML="Feito com &#x1F497; por Júnior Futa (JFuta21)"
    themeTranslate.innerHTML="Tema"
    darkTranslate.innerHTML="Escuro"
    lightTranslate.innerHTML="Claro"
    aboutTranslate.innerHTML="Acerca do Conversor"
    aboutcontainerTranslate.innerHTML="O conversor de moeda da PalancaTech permite que você verifique as últimas taxas de câmbio médias de compra/venda e converter tudas principais moedas mundiais. As taxas PalancaTech são taxas de câmbio compiladas das principais fontes de dados do mercado."
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
    policyTranslate.innerHTML="Politique"
    termsTranslate.innerHTML="Termes"
    madeTranslate.innerHTML="Fait avec &#x1F497; pour Júnior Futa (JFuta21)"
    themeTranslate.innerHTML="Thème"
    darkTranslate.innerHTML="Noire"
    lightTranslate.innerHTML="Claire"
    aboutTranslate.innerHTML="À Propos du Convertisseur"
    aboutcontainerTranslate.innerHTML="Le convertisseur de devises de PalancaTech vous permet de vérifier les derniers taux de change moyens acheteur/vendeur et convertir toutes principales monnaies mondiales. Les taux PalancaTech sont des taux de change compilés à partir des principales sources de données du marché."
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
    policyTranslate.innerHTML="Policy"
    termsTranslate.innerHTML="Terms"
    madeTranslate.innerHTML="Made with &#x1F497; by Júnior Futa (JFuta21)"
    themeTranslate.innerHTML="Theme"
    darkTranslate.innerHTML="Dark"
    lightTranslate.innerHTML="Light"
    aboutTranslate.innerHTML="About Converter"
    aboutcontainerTranslate.innerHTML="PalancaTech's currency converter allows you to check the latest average bid/ask exchange rates and convert all major world currencies. PalancaTech Rates are compiled exchange rates from major market data sources"
    aboutUsPageTranslate.innerHTML = "About Us"
  }
}
