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