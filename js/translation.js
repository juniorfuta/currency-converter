
function testTranslate(language) {

    let headingTranslate;
  
    let buttonCopy1Translate;
    let buttonCopy2Translate;
   //let iconButtonCopy;
    let keybordTranslation;
  
    headingTranslate = document.getElementById("heading");
  
    buttonCopy1Translate=document.getElementById("btn1");
    buttonCopy2Translate=document.getElementById("btn2");
    keybordTranslation=document.getElementById("keybordHeading");
    //iconButtonCopy=document.getElementById("i2");
  
    if (language === "pt") {
      headingTranslate.innerHTML = "Conversor de Moedas";
      buttonCopy1Translate.innerHTML ="COPIAR" 
      buttonCopy2Translate.innerHTML ="COPIAR"
      keybordHeading.innerHTML ="Teclado"
  
  
    }
    else if (language === "fr") {
      headingTranslate.innerHTML = "Convertisseur de Devises";
      buttonCopy1Translate.innerHTML ="COPIER" 
      buttonCopy2Translate.innerHTML ="COPIER"
      keybordHeading.innerHTML ="Clavier" 
    }
    else {
      headingTranslate.innerHTML = "Currency Converter";
      buttonCopy1Translate.innerHTML ="COPY" 
      buttonCopy2Translate.innerHTML ="COPY" 
      keybordHeading.innerHTML ="Keybord"
    }
  
  }