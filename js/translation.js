
function testTranslate(language) {

  
  
    let buttonCopy1Translate;
    let buttonCopy2Translate;
    let keybordTranslation;
    let historyTranslate;
    let footerTranslate;
    let dolarUsaTranslate;
    let australianDollarTranslate;
    let canadianDollarTranslate;
    let bulagrianLevTranslate;
    

       //let iconButtonCopy;
  
    let headingTranslate = document.getElementById("heading");
  
    buttonCopy1Translate=document.getElementById("btn1");
    buttonCopy2Translate=document.getElementById("btn2");
    keybordTranslation=document.getElementById("keybordHeading");
    historyTranslate=document.getElementById("historyHeading"); 
    footerTranslate=document.getElementById("footerHeading"); 
    dolarUsaTranslate=document.getElementById("dolarUsa"); 
    australianDollarTranslate=document.getElementById("australian dollar");
    canadianDollarTranslate=document.getElementById("canadian dollar");
    bulagrianLevTranslate=document.getElementById("bulgarian lev");
    let indianRupeTranslate=document.getElementById("indian rupee");

    //iconButtonCopy=document.getElementById("i2");
  
    if (language === "pt") {
      headingTranslate.innerHTML = "Conversor de Moedas";
      buttonCopy1Translate.innerHTML ="COPIAR" 
      buttonCopy2Translate.innerHTML ="COPIAR"
      keybordHeading.innerHTML ="Teclado"
      historyTranslate.innerHTML ="Histórico"
      footerTranslate.innerHTML ="Perfis de Divísas"
      dolarUsaTranslate.innerHTML ="US-Dolar Americano"
      australianDollarTranslate.innerHTML="AUD-Dolar Australiano"
      canadianDollarTranslate.innerHTML="CAD-Dolar Canadiano"
      bulagrianLevTranslate.innerHTML="BGN=Lev Bulgariano"
      indianRupeTranslate.innerHTML="INR-Rupia Indiana"

    }
    else if (language === "fr") {
      headingTranslate.innerHTML = "Convertisseur de Devises";
      buttonCopy1Translate.innerHTML ="COPIER" 
      buttonCopy2Translate.innerHTML ="COPIER"
      keybordHeading.innerHTML ="Clavier" 
      historyTranslate.innerHTML ="Historique"
      footerTranslate.innerHTML ="Profils de Devises"
      dolarUsaTranslate.innerHTML ="US-Dolar American"
      australianDollarTranslate.innerHTML="AUD-Dolar Australian"
      canadianDollarTranslate.innerHTML="CAD-Dolar Canadian"
      bulagrianLevTranslate.innerHTML="BGN=Lev Bulgarian"
      indianRupeTranslate.innerHTML="INR-Rupie Indienne"

    }
    else {
      headingTranslate.innerHTML = "Currency Converter";
      buttonCopy1Translate.innerHTML ="COPY" 
      buttonCopy2Translate.innerHTML ="COPY" 
      keybordHeading.innerHTML ="Keybord"
      historyTranslate.innerHTML ="History"
      footerHeading.innerHTML ="Profils Divises"
      dolarUsaTranslate.innerHTML ="US-USA Dollar"
      australianDollarTranslate.innerHTML="AUD-Australain Dollar"
      canadianDollarTranslate.innerHTML="CAD-Canadian Dollar"
      bulagrianLevTranslate.innerHTML="BGN-Bulgarian Lev"
      indianRupeTranslate.innerHTML="INR-Indian Rupee"
    }

  }