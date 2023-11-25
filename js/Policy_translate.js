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
