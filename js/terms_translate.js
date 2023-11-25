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