/*!
 * Copyright © 2023  PalacancaTechnologies as represented by Júnior FUTA
 * All Rights Reserved.
 */
retrieveTheme(); 

function setDarkTheme() {
  const body=document.body
  body.setAttribute ("data-theme", "dark")
  localStorage.setItem("data-theme", "dark")
}

function setLightTheme() {
  const body=document.body
  body.setAttribute ("data-theme", "light")
  localStorage.setItem("data-theme", "light")
}

function retrieveTheme() {
  const currentTheme= localStorage.getItem("data-theme")

  if (currentTheme==="dark") setDarkTheme();    
}